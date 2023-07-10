import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTookitHooks";
import { getDiscussionDetails } from "../../store/actions/discussionQuestionsAction";
import { useLocation, useNavigate } from "react-router";
import { Avatar, Button, Input, Typography } from "@mui/material";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useAuth } from "../../contexts/AuthContext";
import UnauthorizedPopup from "../../components/UnauthorizedPopup/UnauthorizedPopup";

const DiscussionDetailsPage: React.FC = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [discussion, setDiscussion] = useState<{
      title: string;
      body: string;
      id: number;
      userId: number;
   }>({
      title: "",
      body: "",
      id: 0,
      userId: 0,
   });
   const dispatch = useAppDispatch();
   const location = useLocation();
   const currentLocation = location.pathname;
   const { isAuthSettings } = useAuth();
   const navigate = useNavigate();

   const currentId = Number(currentLocation.at(-1)) + 1;
   const userState = useAppSelector((state) => state.authSlice.user);
   console.log(userState);
   let item: any = [];
   const fetchData = async () => {
      setIsLoading(true);
      try {
         item = await dispatch(getDiscussionDetails(`${currentId}`));
         setDiscussion(item.payload.data);

         setIsLoading(false);

         return item.payload.data;
      } catch (error) {
         setIsLoading(false);
         return error;
      }
   };
   useEffect(() => {
      fetchData();
   }, []);

   if (discussion.id) {
      console.log("ok");
   } else {
      return <LoadingSpinner />;
   }

   return (
      <Box sx={{ pt: "180px", pb: "200px", background: "#f3f3f9" }}>
         <div className="container">
       
            <Box
               sx={{
                  marginBottom: "50px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  borderTop: "2px solid rgb(235 51 73)",
                  background: "white",
                  padding: "20px",
               }}
            >
               {/* {discussion.map((item) => ( */}
               <Typography
                  component={"span"}
                  sx={{ fontSize: "22px", fontWeight: "700" }}
               >
                  {isLoading ? <LoadingSpinner /> : discussion.title}
               </Typography>
               <Typography component={"span"}>
                  {isLoading ? <LoadingSpinner /> : discussion.body}
               </Typography>
               {/* ))} */}
            </Box>
            <Box
               sx={{
                  marginBottom: "50px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  borderTop: "2px solid rgb(235 51 73)",
                  background: "white",
                  padding: "20px",
               }}
            >
               <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
                  Комментарии
               </Typography>
               <Box
                  sx={{
                     borderTop: "1px solid rgb(33, 37, 41)",
                     gap: "10px",
                     padding: "10px 0",
                     display: "flex",
                     flexDirection: "column",
                  }}
               >
                  <Typography sx={{ fontSize: "18px" }}>
                     комментариев
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                     <Avatar alt="pfp" src=""></Avatar>
                     <Input
                        sx={{ border: "1px solid #eee", width: "100%" }}
                        type="text"
                        placeholder="Оставьте свой комментарий.."
                     />
                     <Button
                        variant="outlined"
                        onClick={() => {
                           if (!isAuthSettings.isAuth) {
                           //   return <UnauthorizedPopup  />
                              navigate("/login");
                           } else {
                           }
                        }}
                     >
                        ✓
                     </Button>
                  </Box>
                  <Box
                     sx={{
                        marginTop : '15px',
                        display: "flex",
                        gap: "10px",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           gap: "10px",
                        }}
                     >
                        <Avatar alt="pfp" src=""></Avatar>
                        <Box>
                           <Typography sx={{fontWeight : '800' , marginBottom : '5px'}}>Андрей Кириленко</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ea libero. Assumenda officiis ad, deserunt necessitatibus facilis sunt placeat ducimus magni error. Obcaecati vel fugit dolorum inventore ad minima modi dignissimos unde quos ducimus? Perspiciatis veritatis harum recusandae blanditiis! Nam animi quae, quibusdam veritatis fugit dignissimos laborum. Similique placeat eos accusantium quasi unde repellat? Dolores, expedita inventore. Molestiae tempore dolore sed, asperiores saepe natus amet nisi expedita eveniet autem modi aperiam architecto itaque iusto dolores minima nostrum dignissimos soluta voluptate hic, quis totam, alias ducimus ab! Neque repellat aliquam corrupti, ratione magnam deleniti libero, sunt odit quaerat dolore iusto! Temporibus?</Typography>

                        </Box>
                     </Box>

                     <Button>Ответить</Button>
                  </Box>
                  
                  {/* <Input placeholder="asdasdasd"/> */}
               </Box>
            </Box>
         </div>
      </Box>
   );
};
export default DiscussionDetailsPage;
