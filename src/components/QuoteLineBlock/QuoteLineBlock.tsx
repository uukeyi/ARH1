import React from "react";
import styles from "./QuoteLineBlock.module.css";
interface QuoteLineBlockProps {
   titleBlock: string;
   title: string;
   desc?: string;
}

const QuoteLineBlock: React.FC<QuoteLineBlockProps> = ({
   titleBlock,
   title,
   desc,
}) => {
   const { line, blackBlock , titleClass } = styles;
   return (
      <>
         <hr className={line} />
         <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className={blackBlock}
         >
            <p>{titleBlock}</p>
         </div>
         <p data-aos="zoom-in-up" data-aos-duration="1000" className={titleClass}>
            {title}
         </p>
         <hr className={line} />
      </>
   );
};

export default QuoteLineBlock;
