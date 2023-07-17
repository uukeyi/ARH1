import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useForm, SubmitHandler } from "react-hook-form";
import AlertForm from "../components/AlertForm/AlertForm";
import { Link as LinkRouter } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxTookitHooks";
import { confirmEmail } from "../store/actions/authActions";


export function CodeConfirmPage() {
    type formValues = {
        code: string;
        email: string;
    };
    const [isError, setIsError] = useState(false);
    const [isSucces, setIsSucces] = useState(false);
    const [errorText, setIsErrorText] = useState("");
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formValues>();
    const onSubmit: SubmitHandler<formValues> = async (data) => {
        dispatch(confirmEmail({ email: data.email, code: data.code, setError: setIsError }))
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: {
                    xs: "100%",
                    sm: "400px",
                },
                mt: '100px'
            }}
        >
            <Typography component="h1" variant="h5">
                Подвердите свою почту
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                    mt: 1,
                    width: {
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
                    id="code"
                    label="Код с почты"
                    {...register("code", {
                        required: "Это поле обязательно!",
                    })}
                />
                {errors?.code && (
                    <AlertForm
                        type="error"
                        text={errors?.code?.message}
                        fullWidth
                    />
                )}
                {isError && (
                    <AlertForm
                        type="error"
                        text={`Ошибка ${errorText}`}
                        fullWidth
                    />
                )}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Подтвердить
                </Button>
                <Grid container>
                    <Grid item>
                        <Link
                            to={"/login"}
                            sx={{
                                fontFamily: "Roboto",
                                fontSize: "0.875rem",
                            }}
                            component={LinkRouter}
                        >
                            Назад
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
