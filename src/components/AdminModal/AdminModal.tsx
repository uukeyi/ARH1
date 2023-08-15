import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
interface AdminModalProps {
   open: boolean;
   setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IElement {
   value: string;
   type: string;
   id: number;
}

const AdminModal: React.FC<AdminModalProps> = ({ open, setOpen }) => {
   const [isText, setIsText] = useState({
      value: false,
      type: "description",
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
   const [editValue, setEditValue] = useState("");
   useEffect(() => {
      console.log(elements);
   }, [elements]);
   return (
      <div>
         <Modal
            open={open}
            onClose={() => {
               setOpen(false);
            }}
         >
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
            </Box>
         </Modal>
      </div>
   );
};
export default AdminModal;
