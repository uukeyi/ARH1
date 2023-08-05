import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import AlertForm from '../components/AlertForm/AlertForm';
import { Link as LinkRouter } from 'react-router-dom';

const defaultTheme = createTheme();

function CodeConfirmPage() {
  type formValues = {
    code: string;
  };
  const [isError, setIsError] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [errorText, setIsErrorText] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();
  const onSubmit: SubmitHandler<formValues> = async (data) => {
    // try {
    //   const response = await axios<IForgotPassword>({
    //     method: 'POST',
    //     url: 'http://194.87.238.163/api/Auth/forgotPassword',
    //     params: {
    //       code: data.code,
    //     },
    //   });
    //   if (response.data.hasError) {
    //     setIsError(true);
    //     setIsErrorText(response.data.errorMessage);
    //   } else {
    //     setIsError(false);
    //     setIsSucces(true);
    //   }
    // } catch (error: any) {
    //   setIsErrorText(error.message);
    //   setIsError(true);
    // }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: {
            xs: '100%',
            sm: '400px',
          },
        }}
        component="main"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: {
              xs: '100%',
              sm: '400px',
            },
          }}
        >
          <Typography component="h1" variant="h5">
            Код с почты
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              mt: 1,
              width: {
                xs: '100%',
                sm: '500px',
              },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Код"
              autoComplete="code"
              autoFocus
              {...register('code', {
                required: 'Это поле обязательно!',
              })}
            />
            {errors?.code && <AlertForm type="error" text={errors?.code?.message} fullWidth />}
            {isError && <AlertForm type="error" text={`Ошибка ${errorText}`} fullWidth />}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Сбросить
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  to={'/login'}
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                  }}
                  component={LinkRouter}
                >
                  Назад
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default CodeConfirmPage;
