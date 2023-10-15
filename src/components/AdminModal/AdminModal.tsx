import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControl, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks/reduxTookitHooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { createElement } from "../../store/actions/landingPageActions";
import { ILandingBlock } from "../../interfaces/landingPageResponse";
interface AdminModalProps {
   open: boolean;
   setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   pageBlock: ILandingBlock;
}
interface IElement {
   value: string;
   type: string | number;
   id: number;
   name?: string;
}

const AdminModal: React.FC<AdminModalProps> = ({
   open,
   setOpen,
   pageBlock,
}) => {
   const [isText, setIsText] = useState({
      value: false,
      type: "description",
      name: "desc",
   });
   const [isImg, setIsImg] = useState({
      value: false,
      type: "image",
   });
   const [isTitle, setIsTitle] = useState({
      value: false,
      type: "title",
   });
   const [inputValue, setInputValue] = useState("");
   const [elements, setElements] = useState<IElement[]>([]);
   const [edit, setIsEdit] = useState(false);
   const [id, setId] = useState(0);
   const [isError, setIsError] = useState(false);
   const [editValue, setEditValue] = useState("");
   type formValues = {
      elements: string;
   };
   const dispatch = useAppDispatch();
   const { handleSubmit } = useForm<formValues>();
   const onSubmit: SubmitHandler<any> = async () => {
      await elements.map((element) => {
         if (element.type === "title") {
            element.type = 1;
         } else if (element.type === "description") {
            element.type = 2;
         } else if (element.type === "image") {
            element.type = 3;
         }
         dispatch(
            createElement({
               value: element.value,
               typeId: element.type,
               idBlock: pageBlock.id,
               orderIndex: pageBlock.elements.length,
               aosAnimation: "",
               setError: setIsError,
            })
         );
      });
   };
   useEffect(() => {
      if (isError) {
         alert("Не получилось создать элемент");
      }
   }, [isError]);
   return (
      <div>
         <Modal
            open={open}
            onClose={() => {
               setOpen(false);
            }}
         >
            <Box sx={{ display: "flex" }}>
               <Box
                  sx={{
                     position: "absolute",
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50% , -50%)",
                     width: {
                        xs: "100%",
                        sm: 400,
                     },
                     bgcolor: "white",
                     border: "2px solid #000",
                     p: 4,
                  }}
               >
                  <Box
                     sx={{
                        display: "flex",
                        gap: "10px",
                        flexDirection: "column",
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: {
                              xs: "column",
                              sm: "row",
                           },
                           justifyContent: "end",
                           gap: "10px",
                        }}
                     >
                        <Button
                           variant="outlined"
                           onClick={() => {
                              setIsImg({
                                 value: false,
                                 type: "image",
                              });
                              setIsTitle({
                                 value: false,
                                 type: "title",
                              });
                              setIsText({
                                 value: true,
                                 type: "description",
                                 name: "desc",
                              });
                           }}
                        >
                           Текст
                        </Button>
                        <Button
                           variant="outlined"
                           onClick={() => {
                              setIsText({
                                 value: false,
                                 type: "description",
                                 name: "desc",
                              });
                              setIsTitle({
                                 value: false,
                                 type: "title",
                              });
                              setIsImg({
                                 value: true,
                                 type: "image",
                              });
                           }}
                        >
                           Картинка
                        </Button>
                        <Button
                           variant="outlined"
                           onClick={() => {
                              setIsImg({
                                 value: false,
                                 type: "image",
                              });
                              setIsText({
                                 value: false,
                                 type: "description",
                                 name: "desc",
                              });
                              setIsTitle({
                                 value: true,
                                 type: "title",
                              });
                           }}
                        >
                           Заголовок
                        </Button>
                     </Box>
                  </Box>

                  {isText.value || isImg.value || isTitle.value ? (
                     <Box
                        sx={{
                           mt: "30px",
                        }}
                     >
                        <TextField
                           sx={{
                              width: "100%",
                           }}
                           value={inputValue}
                           label="Введите сюда значение"
                           variant="outlined"
                           onChange={(e) => {
                              setInputValue(e.target.value);
                           }}
                        />

                        <Button
                           variant="outlined"
                           sx={{
                              display: "block",
                              margin: "10px auto",
                              width: "100%",
                           }}
                           onClick={() => {
                              let typeElement = "";
                              if (isText.value) typeElement = isText.type;
                              if (isImg.value) typeElement = isImg.type;
                              if (isTitle.value) typeElement = isTitle.type;
                              setId(id + 1);
                              setElements([
                                 ...elements,
                                 {
                                    value: inputValue,
                                    type: typeElement,
                                    id: id,
                                 },
                              ]);

                              setIsImg({
                                 value: false,
                                 type: "image",
                              });
                              setIsTitle({
                                 value: false,
                                 type: "title",
                              });
                              setIsText({
                                 value: false,
                                 type: "description",
                                 name: "desc",
                              });
                              setInputValue("");
                           }}
                        >
                           Потдвердить
                        </Button>
                     </Box>
                  ) : null}

                  {elements.length
                     ? elements.map((element, index) => {
                          return (
                             <>
                                <Box
                                   sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      mt: "20px",
                                   }}
                                   key={index}
                                >
                                   <TextField
                                      label={element.value}
                                      onFocus={() => {
                                         setIsEdit(true);
                                      }}
                                      value={editValue}
                                      onChange={(e) => {
                                         setEditValue(e.target.value);
                                      }}
                                   />
                                   {edit ? (
                                      <Button
                                         variant="outlined"
                                         onClick={() => {
                                            const newElements = elements.map(
                                               (el) => {
                                                  if (el.id === element.id) {
                                                     el = {
                                                        ...el,
                                                        value: editValue,
                                                     };
                                                     return el;
                                                  }
                                                  return el;
                                               }
                                            );
                                            setIsEdit(false);
                                            setElements(newElements);
                                         }}
                                      >
                                         Рек
                                      </Button>
                                   ) : (
                                      <Button
                                         variant="outlined"
                                         onClick={() => {
                                            console.log("hi");
                                            const newElements = elements.filter(
                                               (el) => {
                                                  return el.id !== element.id;
                                               }
                                            );
                                            setElements(newElements);
                                         }}
                                      >
                                         Удалить
                                      </Button>
                                   )}
                                </Box>
                             </>
                          );
                       })
                     : null}
                  <FormControl
                     onSubmit={handleSubmit(onSubmit)}
                     component="form"
                  >
                     <Button
                        type="submit"
                        sx={{ display: "flex", alignSelf: "center" }}
                     >
                        Потдвердить
                     </Button>
                  </FormControl>
               </Box>
            </Box>
         </Modal>
      </div>
   );
};
export default AdminModal;
