import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks/reduxTookitHooks';
import { useAppSelector } from '../../hooks/reduxTookitHooks';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  getDiscussionQuestions,
  getDiscussionSearch,
} from '../../store/actions/discussionQuestionsAction';
import { CardActions } from '@mui/material';
import { useNavigate } from 'react-router';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { TextField, FormControl } from '@mui/material';
import { CardContent } from '@mui/material';
interface DiscussionFacadePageProps {}

const DiscussionFacadePage: React.FC<DiscussionFacadePageProps> = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState<string>('');
  const state = useAppSelector((state) => state.categoriesSlice);
  //TODO ТУТ НУЖНО ПОЛУЧИТЬ МАССИВ ИЗ СТЕЙТА , ПОКА ЧТО БЕРЕМ СТАТИЧНЫЕ ДАННЫЕ
  const useStyles = makeStyles({
    btnAddCategory: {
      backgroundColor: '#909090',
    },
  });
  type formValues = {
    title: string;
    description: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();
  const onSubmit: SubmitHandler<formValues> = (data) => {
    // dispatch(
    //   getDiscussionSearch({
    //     data: data,
    //   })
    // );
    // navigate('/discussionFacade');
    console.log('idi nahui');
  };
  const classes = useStyles();
  useEffect(() => {
    dispatch(getDiscussionQuestions('sdf'));
    dispatch(getDiscussionSearch(query));
  }, []);
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: '180px', pb: '200px', background: '#f3f3f9' }}>
      <div className="container">
        <Box sx={{ display: 'flex', gap: '50px', flexDirection: 'column' }}>
          <FormControl
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{ display: 'flex', gap: '10px', flexDirection: 'row' }}
          >
            <TextField
              onChange={(e) => setQuery(e.target.value)}
              sx={{ width: '80%', background: 'white', border: '1px solid rgb(235 51 73)' }}
              variant="outlined"
              label="Поиск по обсуждениям"
            />
            <Button
              sx={{
                width: '20%',
                background: 'white',
                border: '1px solid rgb(235 51 73)',
                color: 'black',
              }}
            >
              Поиск
            </Button>
          </FormControl>
          <Box>
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
                Данный раздел сайта предназначен для обсуждения. Здесь можно получить консультацию
                по темам , поделиться опытом эксплуатации.
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
            {state.categories.map((post, index) => {
              // console.log(post);
              return (
                <Box key={index}>
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
                    key={index}
                  >
                    <CardMedia
                      sx={{
                        height: {
                          xs: '50%',
                          sm: '100%',
                        },
                        width: {
                          xs: '100%',
                          sm: 600,
                        },
                      }}
                      image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.body}
                      </Typography>
                      <CardActions>
                        <Button size="small">Читать больше</Button>
                      </CardActions>
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
                    Смотреть все темы
                  </Button>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </div>
    </Box>
  );
};
export default DiscussionFacadePage;
