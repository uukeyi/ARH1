import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Modal, Typography } from "@mui/material";
import { useAppDispatch } from "../hooks/reduxTookitHooks";
import { deleteEl, updateElement } from "../store/actions/landingPageActions";
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

const AdminModalEdit: React.FC = () => {
   const { elSettings, isOpen, setIsOpen } = useAdminModalEdit();

   const [inputValue, setInputValue] = useState("");
   const [error, setError] = useState(false);
   const [deleteError, setDeleteError] = useState(false);
   const dispatch = useAppDispatch();
   useEffect(() => {
      if (error) {
         alert("Произошла ошибка замены данных");
      }
   }, [error]);
   return (
      <div>
         <Modal
            open={isOpen}
            onClose={() => {
               setIsOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography>Изменяем "{elSettings.value}"</Typography>

               <TextField
                  sx={{ width: "100%" }}
                  placeholder="Введите значение"
                  variant="outlined"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
               />
               <Button
                  sx={{ display: "block", margin: "30px auto" }}
                  variant="outlined"
                  onClick={(e) => {
                     if (!elSettings.id) {
                        alert("Произошла ошибка получения данных");
                     } else {
                        if (!inputValue) {
                           alert("Заполните поле!");
                        } else {
                           dispatch(
                              updateElement({
                                 elementId: elSettings.id,
                                 setError: setError,
                                 value: inputValue,
                                 blockId: elSettings.blockId,
                                 typeId: elSettings.typeId,
                                 orderIndex: elSettings.orderIndex,
                                 aosAnimation: elSettings.aosAnimation,
                                 setIsOpen: setIsOpen,
                              })
                           );
                        }
                     }
                  }}
               >
                  Изменить значение
               </Button>
               <Button
                  sx={{ display: "block", margin: "30px auto" }}
                  variant="outlined"
                  onClick={(e) => {
                     if (!elSettings.id) {
                        alert("Произошла ошибка получения данных");
                     } else {
                        dispatch(
                           deleteEl({
                              idEl: elSettings.id,
                              setError: setDeleteError,
                           })
                        );
                     }
                  }}
               >
                  Удалить
               </Button>
            </Box>
         </Modal>
      </div>
   );
};
export default AdminModalEdit;
