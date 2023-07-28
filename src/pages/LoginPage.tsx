import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import AlertForm from "../components/AlertForm/AlertForm";
import { Link as LinkRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxTookitHooks";
import { fetchLogin } from "../store/actions/authActions";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

function LoginPage() {
   type formValues = {
      password: string;
      email: string;
   };
   const dispatch = useAppDispatch();
   const store = useAppSelector((state) => state.authSlice);
   const [isError, setIsError] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<formValues>();
   const { setIsAuth } = useAuth();
   const onSubmit: SubmitHandler<formValues> = (data) => {
      dispatch(
         fetchLogin({
            data: data,
            setError: setIsError,
            setIsAuth: setIsAuth,
            setSuccess: setIsSuccess,
         })
      );
   };
   useEffect(() => {
      if (isSuccess) {
         navigate("/");
      }
   }, [isSuccess]);
   return (
      <ThemeProvider theme={defaultTheme}>
         <Container
            sx={{
               height: "100vh",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               minWidth: {
                  xs: "100%",
                  sm: "400px",
               },
            }}
            component="main"
         >
            <CssBaseline />
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: {
                     xs: "100%",
                     sm: "400px",
                  },
               }}
            >
               <Typography component="h1" variant="h5">
                  Войти
               </Typography>
               <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  sx={{
                     mt: 1,
                     minWidth: {
                        xs: "100%",
                        sm: "500px",
                     },
                  }}
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Почта"
                     autoComplete="email"
                     autoFocus
                     {...register("email", {
                        required: "Это поле обязательно!",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Неправильный Email адрес",
                        },
                     })}
                  />
                  {errors?.email && (
                     <AlertForm
                        type="error"
                        text={errors?.email?.message}
                        fullWidth
                     />
                  )}
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     label="Пароль"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                     {...register("password", {
                        required: "Это поле обязательно!",
                        minLength: {
                           value: 8,
                           message: "Пароль слишком короткий",
                        },
                     })}
                  />
                  {errors?.password && (
                     <AlertForm
                        type="error"
                        text={errors?.password?.message}
                        fullWidth
                     />
                  )}
                  {isError && (
                     <AlertForm
                        type="error"
                        text={`Ошибка ${store.errorMessage}`}
                        fullWidth
                     />
                  )}

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                  >
                     Войти
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link
                           to={"/forgotPassword"}
                           component={LinkRouter}
                           variant="body2"
                        >
                           Забыли пароль?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link
                           to={"/registration"}
                           sx={{ fontFamily: "Roboto", fontSize: "0.875rem" }}
                           component={LinkRouter}
                        >
                           {"Зарегистрироваться"}
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   );
}
export default LoginPage;
