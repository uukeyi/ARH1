import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks/reduxTookitHooks';
import { useAppSelector } from '../../hooks/reduxTookitHooks';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import {
  getDiscussionQuestions,
  getDiscussionProps,
  deleteDiscussionQuestion,
  getDiscussionCategories,
} from '../../store/actions/discussionQuestionsAction';
import { useNavigate } from 'react-router';
import { FormControl, FormLabel, InputLabel, TextField } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useAdminModalEdit } from '../../contexts/AdminModalEditContext';
interface DiscussionCategoriesPageProps {}

const DiscussionCategoriesPage: React.FC<DiscussionCategoriesPageProps> = () => {
  const dispatch = useAppDispatch();
  const [curPage, setCurPage] = useState<number>(1);
  const state = useAppSelector((state) => state.discussionQuestions);
  const categories = useAppSelector((state) => state.discussionQuestions.categories);

  const { isAuthSettings } = useAuth();
  const { setBlockSettings, setIsOpenBlockEdit } = useAdminModalEdit();
  const [errorDelete, setErrorDelete] = useState(false);

  useEffect(() => {
    dispatch(getDiscussionCategories(setError));
  }, []);
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      alert('Возникла ошибка получения данных');
      navigate('/');
    }
  }, [error]);
  useEffect(() => {
    if (errorDelete) {
      alert('Не получилось удалить проблему');
      navigate('/');
    }
  }, [errorDelete]);

  return (
    <Box sx={{ pt: '180px', pb: '200px', background: '#f3f3f9' }}>
      <div className="container">
        <Box sx={{ display: 'flex', gap: '50px', flexDirection: 'column' }}>
          <Button
            sx={{
              width: {
                xs: '100%',
              },
              background: 'rgb(235 51 73)',
            }}
            variant="contained"
            onClick={() => navigate('/createDiscussion/category')}
          >
            Добавить новую тему
          </Button>
        </Box>
        <Stack
          alignItems={'center'}
          sx={{
            marginTop: '50px',
            gap: {
              xs: 2.5,
              md: 4.5,
            },
          }}
        >
          {state.categories.map((post, index) => {
            return (
              <Box sx={{ width: '100%' }} key={index}>
                <Card
                  sx={{
                    width: '100%',
                    display: {
                      xs: 'column',
                      sm: 'flex',
                    },
                    height: {
                      xs: '350px',
                      sm: '250px',
                    },
                    borderTop: '2px solid rgb(235 51 73)',
                  }}
                >
                  <CardMedia
                    sx={{
                      height: {
                        xs: '40%',
                        sm: '100%',
                      },
                      width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                      },
                    }}
                    image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
                    title="green iguana"
                  />
                  <CardContent sx={{ width: '150%' }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: {
                          xs: '18px',
                        },
                      }}
                    >
                      {post.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: {
                          xs: '13px',
                          md: '14px',
                        },
                      }}
                    >
                      {post.description.split('').length > 100
                        ? post.description.substring(0, 250) + '....'
                        : post.description}
                    </Typography>
                  </CardContent>
                </Card>
                <Button
                  sx={{
                    width: {
                      xs: '100%',
                    },
                    background: 'rgb(235 51 73)',
                  }}
                  //   className={classes.btnAddCategory}
                  variant="contained"
                  onClick={() => {
                    navigate(`/discussionFacade/${post.id}`);
                  }}
                >
                  Подробнее
                </Button>
                {isAuthSettings.isAdmin ? (
                  <Button
                    sx={{
                      width: {
                        xs: '100%',
                      },
                      background: 'rgb(235 51 73)',
                    }}
                    //   className={classes.btnAddCategory}
                    variant="contained"
                    onClick={() => {
                      dispatch(
                        deleteDiscussionQuestion({
                          idDiscussion: post.id,
                          setError: setErrorDelete,
                        })
                      );
                    }}
                  >
                    Удалить
                  </Button>
                ) : null}
              </Box>
            );
          })}
        </Stack>
      </div>
    </Box>
  );
};
export default DiscussionCategoriesPage;
