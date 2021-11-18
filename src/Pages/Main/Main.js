import React, { useEffect, useState } from "react";
import Carousel from "../../component/Carusel/Carousel";
import "./Main.scss";

class Block extends React.Component {

  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>Just Block</h1>
      </div>
    )
  }
}

const Main = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  });

  console.log(count);

  return (
    <div className="page">
      <Carousel />
      <Block />
    </div>
  );
};

export default Main;
