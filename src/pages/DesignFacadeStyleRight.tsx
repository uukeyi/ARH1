import React from "react";
import SingleProjectPageImgCover from "../components/SingleProjectPageSection/SingleProjectPageSection";

const DesignFacadeStyleRight: React.FC = () => {
   return (
      <div style={{ height: "100%" }}>
         <SingleProjectPageImgCover
            titleText="Дизайн фасада дома в стиле Райта (прерий)"
            city="г. Пушкин, д. Александровская"
            houseSquare="320 м2"
            facadeSquare="410 м2"
            floors="2 этажа"
            date="Январь 2021"
         />
      </div>
   );
};

export default DesignFacadeStyleRight;
