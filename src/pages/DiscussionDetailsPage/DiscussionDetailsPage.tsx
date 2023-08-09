import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTookitHooks';
import { getDiscussionDetails } from '../../store/actions/discussionQuestionsAction';
import { useLocation, useNavigate } from 'react-router';
import { Avatar, Button, Input, Typography } from '@mui/material';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useAuth } from '../../contexts/AuthContext';
import { IDiscussion } from '../../interfaces/discussionsResponse';
import { createComment, getComments } from '../../store/actions/commentsActions';
import { useParams } from 'react-router-dom';
const DiscussionDetailsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [discussion, setDiscussion] = useState<IDiscussion>({
    id: 0,
    title: '',
    description: '',
    authorId: 0,
    categoryId: 0,
    createdAt: '',
    isDeleted: false,
    author: {
      id: 0,
      email: '',
      password: '',
      emailConfirmed: false,
      name: '',
      isAdmin: false,
      createdAt: '',
      isBlocked: false,
      isDeleted: false,
    },
    category: {
      id: 0,
      name: '',
      description: '',
      iconUrl: null,
      isDeleted: '',
    },
    comments: [],
  });
  const [error, setError] = useState(false);
  const [commentMessage, setCommentMessage] = useState('');
  const [commentReplyMessage, setCommentReplyMessage] = useState('');
  const [errorComment, setErrorComment] = useState(false);
  const [errorFetchComments, setErrorFetchComments] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentLocation = location.pathname;
  const { isAuthSettings } = useAuth();
  const { discussionDetailsId } = useParams();
  const navigate = useNavigate();
  const currentId = Number(currentLocation.at(-1)) + 1;
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await dispatch<any>(
        getDiscussionDetails({ id: currentId, setError: setError })
      );
      setDiscussion(response.payload);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const stateComments = useAppSelector((state) => state.commentsSlice);
  useEffect(() => {
    fetchData();
    dispatch(
      getComments({
        setError: setErrorFetchComments,
        discussionId: discussionDetailsId,
      })
    );
  }, []);
  useEffect(() => {
    if (error) {
      alert('Возникла ошибка получения данных');
      navigate('/');
    }
  }, [error]);
  useEffect(() => {
    if (errorComment) {
      alert('Не удалось оставить комментарий');
      navigate('/discussionFacade');
    }
  }, [errorComment]);
  useEffect(() => {
    if (errorFetchComments) {
      alert('Не удалось получить комментарии обсуждения');
      navigate('/');
    }
  }, [errorFetchComments]);
  if (!discussion.id) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ pt: '180px', pb: '200px', background: '#f3f3f9' }}>
      <div className="container">
        <Box
          sx={{
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            borderTop: '2px solid rgb(235 51 73)',
            background: 'white',
            padding: '20px',
          }}
        >
          <Typography component={'span'} sx={{ fontSize: '22px', fontWeight: '700' }}>
            {isLoading ? <LoadingSpinner /> : discussion.title}
          </Typography>
          <Typography component={'span'}>
            {isLoading ? <LoadingSpinner /> : discussion.description}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '15px',
            // display: 'flex',
            gap: '10px',
            // justifyContent: 'space-between',
            // alignItems: 'flex-start',
            // flexDirection : 'columnn'
          }}
        >
          <Typography sx={{ fontSize: '22px', fontWeight: '700' }}>Комментарии</Typography>
          <Box
            sx={{
              borderTop: '1px solid rgb(33, 37, 41)',
              gap: '10px',
              padding: '10px 0',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Avatar alt="pfp" src=""></Avatar>
              <Input
                sx={{ border: '1px solid #eee', width: '100%' }}
                type="text"
                value={commentMessage}
                onChange={(e) => {
                  setCommentMessage(e.target.value);
                }}
                placeholder="Оставьте свой комментарий.."
              />
              <Button
                variant="outlined"
                onClick={() => {
                  if (!isAuthSettings.isAuth) {
                    navigate('/login');
                  } else {
                    if (commentMessage !== '') {
                      dispatch(
                        createComment({
                          message: commentMessage,
                          discussionId: discussionDetailsId,
                          setError: setErrorComment,
                        })
                      );
                    }
                  }
                }}
              >
                ✓
              </Button>
            </Box>
            {stateComments.comments.map((comment) => {
              if (comment.parentId === null) {
                return (
                  <>
                    <Box
                      sx={{
                        marginTop: '15px',
                        display: commentId === comment.id && isReplying ? 'block' : 'flex',
                        gap: '10px',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                      key={comment.id}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '10px',
                        }}
                      >
                        <Avatar alt="pfp" src=""></Avatar>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: '800',
                              marginBottom: '5px',
                            }}
                          >
                            {comment.author.name}
                          </Typography>
                          <Typography>{comment.description}</Typography>
                        </Box>
                      </Box>

                      {commentId === comment.id && isReplying ? null : (
                        <Button
                          sx={{
                            fontSize: {
                              xs: '11px',
                            },
                          }}
                          data-id={comment.id}
                          onClick={(e: any) => {
                            setCommentId(+e.target.dataset.id);
                            setIsReplying(true);
                          }}
                        >
                          Ответить
                        </Button>
                      )}

                      {commentId === comment.id && isReplying ? (
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'center',
                          }}
                        >
                          <Input
                            sx={{
                              border: '1px solid #eee',
                              width: '90%',
                            }}
                            type="text"
                            value={commentReplyMessage}
                            onChange={(e) => {
                              setCommentReplyMessage(e.target.value);
                            }}
                            placeholder="Оставьте свой комментарий.."
                          />
                          <Button
                            variant="outlined"
                            onClick={() => {
                              if (!isAuthSettings.isAuth) {
                                navigate('/login');
                              } else {
                                if (commentReplyMessage !== '') {
                                  setIsReplying(false);
                                  dispatch(
                                    createComment({
                                      message: commentReplyMessage,
                                      discussionId: discussionDetailsId,
                                      setError: setErrorComment,
                                      parentId: commentId,
                                    })
                                  );
                                }
                              }
                            }}
                          >
                            ✓
                          </Button>
                        </Box>
                      ) : null}
                    </Box>
                    {stateComments.comments.map((replyComment) => {
                      if (replyComment.parentId === comment.id) {
                        return (
                          <Box
                            sx={{
                              marginLeft: '20px',
                              marginTop: '15px',

                              display: 'flex',
                              gap: '10px',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                gap: '10px',
                              }}
                            >
                              <Avatar alt="pfp" src=""></Avatar>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: '800',
                                    marginBottom: '5px',
                                  }}
                                >
                                  {replyComment.author.name}
                                </Typography>
                                <Typography>{replyComment.description}</Typography>
                              </Box>
                            </Box>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z" />
                            </svg>
                          </Box>
                        );
                      }
                    })}
                  </>
                );
              }
            })}

            {/* <Input placeholder="asdasdasd"/> */}
          </Box>

          {/* <Input placeholder="asdasdasd"/> */}
        </Box>
      </div>
    </Box>
  );
};
export default DiscussionDetailsPage;
