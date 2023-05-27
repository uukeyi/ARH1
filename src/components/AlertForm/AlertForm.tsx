import React from "react";
import { Alert as AlertMUI, AlertTitle } from "@mui/material";

interface AlertFormProps {
   text: string | undefined;
   type: "success" | "info" | "warning" | "error";
   fullWidth? : boolean
}

const AlertForm: React.FC<AlertFormProps> = ({ text, type , fullWidth }) => {
   return (
      <AlertMUI style={{ padding : "7px 10px 0px 10px" ,  width : fullWidth ? '100%' : 'calc(100% - 16px)' , marginLeft : fullWidth ? '0px' : "16px" ,  marginTop : '10px'}} severity={type}>
         <AlertTitle>{text}</AlertTitle>
      </AlertMUI>
   );
};

export default AlertForm;
