import React from 'react';
import styles from './QuoteLineBlock.module.css';
interface QuoteLineBlockProps {
  titleBlock: string;
  title: string;
  desc?: string;
}

const QuoteLineBlock: React.FC<QuoteLineBlockProps> = ({ titleBlock, title, desc }) => {
  const { line, blackBlock, titleClass, description, titleClassDesc } = styles;
  return (
    <div className="container">
      <hr className={line} />
      <div data-aos="zoom-in-up" data-aos-duration="1000" className={blackBlock}>
        <p>{titleBlock}</p>
      </div>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className={desc ? titleClassDesc : titleClass}
      >
        {title}
      </p>
      {desc ? (
        <p data-aos="zoom-in-up" data-aos-duration="1000" className={description}>
          {desc}
        </p>
      ) : (
        <></>
      )}
      <hr className={line} />
    </div>
  );
};

export default QuoteLineBlock;
