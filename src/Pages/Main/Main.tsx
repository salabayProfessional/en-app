import React from "react";
import Proposition from "../../component/Proposition/Proposition";
import Carousel from "../../component/Carusel/Carousel";
import "./Main.scss";

const Main: React.FC = () => {

  return (
    <div className="page">
      <Carousel />
      <Proposition />
    </div>
  );
};

export default Main;
