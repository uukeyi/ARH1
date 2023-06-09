import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks/reduxTookitHooks';
import { useAppSelector } from '../../hooks/reduxTookitHooks';
import { getCategories } from '../../store/actions/categoriesAction';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
interface DiscussionFacadePageProps {}

const DiscussionFacadePage: React.FC<DiscussionFacadePageProps> = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.categoriesSlice);
  //TODO ТУТ НУЖНО ПОЛУЧИТЬ МАССИВ ИЗ СТЕЙТА , ПОКА ЧТО БЕРЕМ СТАТИЧНЫЕ ДАННЫЕ
  const useStyles = makeStyles({
    btnAddCategory: {
      backgroundColor: '#909090',
    },
  });
  const classes = useStyles();
  useEffect(() => {
    dispatch(getCategories('asdasd'));
  }, []);
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
            return (
              <Box>
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
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
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
                >
                  Смотреть все темы
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
