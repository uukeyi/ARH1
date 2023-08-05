import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks/reduxTookitHooks';
import { useAppSelector } from '../../hooks/reduxTookitHooks';
import { getCategories } from '../../store/actions/categoriesAction';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { getDiscussionQuestions } from '../../store/actions/discussionQuestionsAction';
import { useNavigate } from 'react-router';
interface DiscussionFacadePageProps {}

const DiscussionFacadePage: React.FC<DiscussionFacadePageProps> = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.discussionQuestions);
  const useStyles = makeStyles({
    btnAddCategory: {
      backgroundColor: '#909090',
    },
  });
  console.log(state);
  const [error, setError] = useState(false);
  useEffect(() => {
    dispatch(getDiscussionQuestions(setError));
    dispatch(getCategories('asdasd'));
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      alert('Возникла ошибка получения данных');
      navigate('/');
    }
  }, [error]);
  return (
    <Box sx={{ pt: '180px', pb: '200px', background: '#f3f3f9' }}>
      <div className="container">
        <Box sx={{ marginBottom: '50px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '7px',
              borderTop: '2px solid rgb(235 51 73)',
              background: 'white',
              padding: '20px',
            }}
          >
            <Typography sx={{ fontWeight: '400', fontFamily: 'Oswald' }} variant="h4">
              Обсуждение
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Oswald',
                fontSize: '18px',
                fontWeight: '300',
              }}
            >
              Данный раздел сайта предназначен для обсуждения. Здесь можно получить консультацию по
              темам , поделиться опытом эксплуатации.
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Oswald',
                fontSize: '18px',
                fontWeight: '300',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Oswald',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
                component={'span'}
              >
                Внимание!
              </Typography>{' '}
              Просьба придерживаться вежливой и уважительной формы общения. Записи, содержащие
              оскорбления и ненормативную лексику, будут удалены.
            </Typography>
          </Box>
          <Button
            sx={{
              width: {
                xs: '100%',
              },
              background: 'rgb(235 51 73)',
            }}
            //   className={classes.btnAddCategory}
            variant="contained"
            onClick={() => navigate('/createDiscussion')}
          >
            Добавить новую тему
          </Button>
        </Box>
        <Stack
          alignItems={'center'}
          sx={{
            gap: {
              xs: 2.5,
              md: 4.5,
            },
          }}
        >
          {state.questions.map((post, index) => {
            return (
              <Box key={index}>
                <Card
                  sx={{
                    minWidth: '100%',
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
                  <CardContent>
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
                      {post.title}
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
                    navigate(`/discussionDetails/${index}`);
                  }}
                >
                  Подробнее
                </Button>
              </Box>
            );
          })}
        </Stack>
      </div>
    </Box>
  );
};
export default DiscussionFacadePage;
