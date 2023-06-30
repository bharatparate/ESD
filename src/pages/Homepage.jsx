import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard/HomeCard";


const Homepage = () => {

    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
      // 👇️ get number between min (inclusive) and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        setNum(randomNumberInRange(1, 3));
     }, []); 

  return (
    <>
      <div className={`randomNum randomNum${num}`}>
        <HomeCard url={'/collaborate'} title={"COLLAB\nO\nRATE"} />
        <HomeCard url={'converge'} title={"con\nverge"} />
        <HomeCard url={'/'} title={"ERGOSUMDEUS"} />
        <HomeCard url={'/'} title={"COMM\nUNI\nCATE"} />
        <HomeCard url={'/'} title={"COG\nI\nTATE"} />

      </div>
    </>
  );
};

export default Homepage;
