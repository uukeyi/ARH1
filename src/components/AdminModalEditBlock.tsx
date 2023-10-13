import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Modal, Typography } from "@mui/material";
import { useAppDispatch } from "../hooks/reduxTookitHooks";
import { updateBlock } from "../store/actions/landingPageActions";
import { useAdminModalEdit } from "../contexts/AdminModalEditContext";

const style = {
   position: "absolute" as "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

const AdminModalEditBlock: React.FC = () => {
   const { blockSettings, isOpenBlockEdit, setIsOpenBlockEdit } =
      useAdminModalEdit();
   const [inputValue, setInputValue] = useState("");
   // console.log(blockSettings)
   const [error, setError] = useState(false);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (error) {
         alert("Произошла ошибка замены данных");
      }
   }, [error]);
   console.log(blockSettings)
   return (
      <div>
         <Modal
            open={isOpenBlockEdit}
            onClose={() => {
               setIsOpenBlockEdit(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography>Изменяем блок "{blockSettings.name}"</Typography>
               <Typography>
                  Значение порядка "{blockSettings.orderIndex}"
               </Typography>

               <TextField
                  sx={{ width: "100%" }}
                  placeholder="Введите значение порядка"
                  variant="outlined"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
               />
               <Button
                  sx={{ display: "block", margin: "30px auto" }}
                  variant="outlined"
                  onClick={(e) => {
                     if (!blockSettings.id) {
                        alert("Произошла ошибка получения данных");
                     } else {
                        if (!inputValue) {
                           alert("Заполните поле!");
                        } else {
                           dispatch(
                              updateBlock({
                                 setError: setError,
                                 idBlock: blockSettings.id,
                                 orderIndex: inputValue,
                                 isDeleted: blockSettings.isDeleted,
                                 isVisible: blockSettings.isVisible,
                                 isMain: blockSettings.isMain,
                                 name: blockSettings.name,
                                 page: blockSettings.page,
                                 setIsOpen: setIsOpenBlockEdit,
                              })
                           );
                        }
                     }
                  }}
               >
                  Установить значение
               </Button>

               <Button
                  sx={{ display: "block", margin: "30px auto" }}
                  variant="outlined"
                  onClick={(e) => {
                     if (!blockSettings.id) {
                        alert("Произошла ошибка получения данных");
                     } else {
                        dispatch(
                           updateBlock({
                              setError: setError,
                              idBlock: blockSettings.id,
                              orderIndex: blockSettings.orderIndex,
                              isDeleted: blockSettings.isDeleted,
                              isVisible: !blockSettings.isVisible,
                              isMain: blockSettings.isMain,
                              name: blockSettings.name,
                              page: blockSettings.page,
                              setIsOpen: setIsOpenBlockEdit,
                           })
                        );
                     }
                  }}
               >
                  Скрыть / Показать 
               </Button>
            </Box>
         </Modal>
      </div>
   );
};
export default AdminModalEditBlock;
