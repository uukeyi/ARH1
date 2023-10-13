import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../hooks/reduxTookitHooks";
import { useAppSelector } from "../../hooks/reduxTookitHooks";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import {
   getDiscussionQuestions,
   getDiscussionProps,
   deleteDiscussionQuestion,
} from "../../store/actions/discussionQuestionsAction";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormControl, FormLabel, InputLabel, TextField } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useAdminModalEdit } from "../../contexts/AdminModalEditContext";
interface DiscussionFacadePageProps {}

const DiscussionFacadePage: React.FC<DiscussionFacadePageProps> = () => {
   const dispatch = useAppDispatch();
   const [curPage, setCurPage] = useState<number>(1);
   const [sortBS, setSortBS] = useState<string>("");
   const [sortCC, setSortCC] = useState<string>("");
   const state = useAppSelector((state) => state.discussionQuestions);
   type formValues = {
      query: string;
   };
   const { isAuthSettings } = useAuth();
   const { setBlockSettings, setIsOpenBlockEdit } = useAdminModalEdit();
   const [errorDelete, setErrorDelete] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<formValues>();
   const onSubmit: SubmitHandler<any> = (data) => {
      if (data.query !== null || sortBS !== null || sortCC !== null)
         setCurPage(1);
      const arr = [data, curPage, sortBS, sortCC];
      dispatch(
         getDiscussionProps({
            data: arr,
         })
      );
   };

   const [error, setError] = useState(false);
   useEffect(() => {
      dispatch(getDiscussionQuestions(setError));
   }, []);
   const navigate = useNavigate();
   useEffect(() => {
      if (error) {
         alert("Возникла ошибка получения данных");
         navigate("/");
      }
   }, [error]);
   useEffect(() => {
      if (errorDelete) {
         alert("Не получилось удалить проблему");
         navigate("/");
      }
   }, [errorDelete]);
   return (
      <Box sx={{ pt: "180px", pb: "200px", background: "#f3f3f9" }}>
         <div className="container">
            <Box sx={{ display: "flex", gap: "50px", flexDirection: "column" }}>
               <FormControl
                  onSubmit={handleSubmit(onSubmit)}
                  component="form"
                  sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
               >
                  <TextField
                     {...register("query")}
                     sx={{
                        width: "80%",
                        background: "white",
                        border: "1px solid rgb(235 51 73)",
                     }}
                     variant="outlined"
                     label="Поиск по обсуждениям"
                  />
                  <Button
                     sx={{
                        width: "20%",
                        background: "white",
                        border: "1px solid rgb(235 51 73)",
                        color: "black",
                     }}
                     type="submit"
                  >
                     Поиск
                  </Button>
               </FormControl>
               <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
               >
                  <FormControl
                     onSubmit={handleSubmit(onSubmit)}
                     component="form"
                     sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
                  >
                     <Typography>Сортировка по:</Typography>
                     <Button
                        sx={{
                           background: "white",
                           border: "1px solid rgb(235 51 73)",
                           color: "black",
                        }}
                        onClick={() => {
                           setSortCC("commentsCount");
                        }}
                        type="submit"
                        value="commentsCount"
                     >
                        Кол-ву комментариев
                     </Button>
                     <Button
                        sx={{
                           background: "white",
                           border: "1px solid rgb(235 51 73)",
                           color: "black",
                        }}
                        onClick={() => {
                           setSortCC("createdAt");
                        }}
                        type="submit"
                        value="createdAt"
                     >
                        Дате создания
                     </Button>
                  </FormControl>
                  <FormControl
                     onSubmit={handleSubmit(onSubmit)}
                     component="form"
                     sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
                  >
                     <Button
                        sx={{
                           background: "white",
                           border: "1px solid rgb(235 51 73)",
                           color: "black",
                        }}
                        onClick={() => {
                           setSortBS("asc");
                        }}
                        type="submit"
                        value="asc"
                     >
                        По возрастанию
                     </Button>
                     <Button
                        sx={{
                           background: "white",
                           border: "1px solid rgb(235 51 73)",
                           color: "black",
                        }}
                        onClick={() => {
                           setSortBS("desc");
                        }}
                        type="submit"
                        value="desc"
                     >
                        По убыванию
                     </Button>
                  </FormControl>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     gap: "7px",
                     borderTop: "2px solid rgb(235 51 73)",
                     background: "white",
                     padding: "20px",
                  }}
               >
                  <Typography
                     sx={{ fontWeight: "400", fontFamily: "Oswald" }}
                     variant="h4"
                  >
                     Обсуждение
                  </Typography>
                  <Typography
                     sx={{
                        fontFamily: "Oswald",
                        fontSize: "18px",
                        fontWeight: "300",
                     }}
                  >
                     Данный раздел сайта предназначен для обсуждения. Здесь
                     можно получить консультацию по темам , поделиться опытом
                     эксплуатации.
                  </Typography>
                  <Typography
                     sx={{
                        fontFamily: "Oswald",
                        fontSize: "18px",
                        fontWeight: "300",
                     }}
                  >
                     <Typography
                        sx={{
                           fontFamily: "Oswald",
                           fontSize: "18px",
                           fontWeight: "400",
                        }}
                        component={"span"}
                     >
                        Внимание!
                     </Typography>{" "}
                     Просьба придерживаться вежливой и уважительной формы
                     общения. Записи, содержащие оскорбления и ненормативную
                     лексику, будут удалены.
                  </Typography>
               </Box>
               <Button
                  sx={{
                     width: {
                        xs: "100%",
                     },
                     background: "rgb(235 51 73)",
                  }}
                  //   className={classes.btnAddCategory}
                  variant="contained"
                  onClick={() => navigate("/createDiscussion")}
               >
                  Добавить новую тему
               </Button>
            </Box>
            <Stack
               alignItems={"center"}
               sx={{
                  marginTop: "50px",
                  gap: {
                     xs: 2.5,
                     md: 4.5,
                  },
               }}
            >
               {state.questions.map((post, index) => {
                  return (
                     <Box sx={{ width: "100%" }} key={index}>
                        <Card
                           sx={{
                              width: "100%",
                              display: {
                                 xs: "column",
                                 sm: "flex",
                              },
                              height: {
                                 xs: "350px",
                                 sm: "250px",
                              },
                              borderTop: "2px solid rgb(235 51 73)",
                           }}
                        >
                           <CardMedia
                              sx={{
                                 height: {
                                    xs: "40%",
                                    sm: "100%",
                                 },
                                 width: {
                                    xs: "100%",
                                    sm: "100%",
                                    md: "100%",
                                 },
                              }}
                              image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
                              title="green iguana"
                           />
                           <CardContent sx={{ width: "150%" }}>
                              <Typography
                                 gutterBottom
                                 variant="h5"
                                 component="div"
                                 sx={{
                                    fontSize: {
                                       xs: "18px",
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
                                       xs: "13px",
                                       md: "14px",
                                    },
                                 }}
                              >
                                 {post.description.split("").length > 100
                                    ? post.description.substring(0, 250) +
                                      "...."
                                    : post.description}
                              </Typography>
                           </CardContent>
                        </Card>
                        <Button
                           sx={{
                              width: {
                                 xs: "100%",
                              },
                              background: "rgb(235 51 73)",
                           }}
                           //   className={classes.btnAddCategory}
                           variant="contained"
                           onClick={() => {
                              navigate(`/discussionDetails/${post.id}`);
                           }}
                        >
                           Подробнее
                        </Button>
                        {isAuthSettings.isAdmin ? (
                           <Button
                              sx={{
                                 width: {
                                    xs: "100%",
                                 },
                                 background: "rgb(235 51 73)",
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

               <FormControl
                  onSubmit={handleSubmit(onSubmit)}
                  component="form"
                  sx={{ display: "flex", gap: "10px", flexDirection: "row" }}
               >
                  {" "}
                  <Button
                     sx={{
                        width: "20%",
                        background: "white",
                        border: "1px solid rgb(235 51 73)",
                        color: "black",
                     }}
                     type="submit"
                     onClick={() => {
                        if (curPage !== 1) {
                           setCurPage(curPage - 1);
                        }
                     }}
                  >
                     Prev
                  </Button>
                  <Button
                     sx={{
                        width: "20%",
                        background: "white",
                        border: "1px solid rgb(235 51 73)",
                        color: "black",
                     }}
                     type="submit"
                     onClick={() => setCurPage(curPage + 1)}
                  >
                     Next
                  </Button>
               </FormControl>
            </Stack>
         </div>
      </Box>
   );
};
export default DiscussionFacadePage;
