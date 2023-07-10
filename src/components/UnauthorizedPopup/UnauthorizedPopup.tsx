import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./UnauthorizedPopup.module.css";
interface UnauthorizedPopupProps {
   isOpen: boolean;
   className?: string;
   isTimeout?: boolean;
   setIsOpen?: any;

}

const UnauthorizedPopup: React.FC<UnauthorizedPopupProps> = ({
   isOpen,
   className,
   isTimeout,
   setIsOpen,

}) => {
   const [seconds, setSeconds] = useState(5);
   const timeout = setTimeout(() => {
      setSeconds(seconds - 1);
   }, 1000);
   if (!isTimeout || seconds === 0) {
      clearTimeout(timeout);
   }
   useEffect(() => {
      if (seconds === 0) {
         setIsOpen(false);
      }
   }, [seconds]);
   return (
      <div
         className={
            isOpen
               ? `${styles.window} ${className} ${styles.windowActive} `
               : `${styles.window} ${className}`
         }
      >
         <p className={styles.text}>Вы не авторизованы на нашем сайте !</p>
      </div>
   );
};

export default UnauthorizedPopup;
