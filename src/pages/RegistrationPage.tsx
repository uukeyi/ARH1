import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import AlertForm from "../components/AlertForm/AlertForm";
import { useAppDispatch, useAppSelector } from "../hooks/reduxTookitHooks";
import { fetchRegistration } from "../store/actions/authActions";
import { Link as LinkRouter } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const defaultTheme = createTheme();

function RegistrationPage() {
   type formValues = {
      name: string;
      password: string;
      email: string;
   };
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [isError, setIsError] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const { setIsAuth } = useAuth();
   const store = useAppSelector((state) => state.authSlice);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<formValues>();
   const onSubmit: SubmitHandler<formValues> = (data) => {
      dispatch(
         fetchRegistration({
            data: data,
            setError: setIsError,
            setIsAuth: setIsAuth,
            setSuccess: setIsSuccess,
         })
      );
   };
   useEffect(() => {
      if (isSuccess) {
         navigate("/confirmEmail");
      }
   }, [isSuccess]);

   return (
      <ThemeProvider theme={defaultTheme}>
         <Container
            component="main"
            maxWidth="xs"
            sx={{
               height: "100vh",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <CssBaseline />
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <Typography component="h1" variant="h5">
                  Зарегистрироваться
               </Typography>
               <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  sx={{ mt: 3 }}
               >
                  <Grid container spacing={2}>
                     <Grid sx={{ padding: "0px" }} item xs={12} sm={12}>
                        <TextField
                           autoComplete="given-name"
                           required
                           fullWidth
                           id="firstName"
                           label="Имя"
                           autoFocus
                           {...register("name", {
                              required: "Это поле обязательно!",
                              maxLength: {
                                 value: 18,
                                 message: "Слишком длинное имя пользователя",
                              },
                           })}
                        />
                     </Grid>
                     {errors?.name && (
                        <AlertForm type="error" text={errors?.name?.message} />
                     )}
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           id="email"
                           label="Почта"
                           autoComplete="email"
                           {...register("email", {
                              required: "Это поле обязательно!",
                              pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                 message: "Неправильный Email адрес",
                              },
                           })}
                        />
                     </Grid>
                     {errors?.email && (
                        <AlertForm type="error" text={errors?.email?.message} />
                     )}
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           label="Пароль"
                           type="password"
                           id="password"
                           autoComplete="new-password"
                           {...register("password", {
                              required: "Это поле обязательно!",
                              minLength: {
                                 value: 8,
                                 message: "Пароль слишком короткий",
                              },
                           })}
                        />
                     </Grid>
                     {errors?.password && (
                        <AlertForm
                           type="error"
                           text={errors?.password?.message}
                        />
                     )}
                     {isError && (
                        <AlertForm
                           type="error"
                           text={`Ошибка ${store.errorMessage}`}
                        />
                     )}
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                  >
                     Зарегистрироваться
                  </Button>
                  <Box
                     sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                     <Box>
                        <Link
                           href="#"
                           onClick={(e) => {
                              e.preventDefault();
                              navigate("/");
                           }}
                           variant="body2"
                        >
                           Домой
                        </Link>
                     </Box>
                     <Box>
                        <Link
                           to={"/login"}
                           component={LinkRouter}
                           variant="body2"
                        >
                           Уже есть аккаунт? Войти
                        </Link>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   );
}
export default RegistrationPage;
