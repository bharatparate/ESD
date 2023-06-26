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
        <HomeCard title={"COLLAB\nO\nRATE"} />
        <HomeCard title={"con\nverge"} />
        <HomeCard title={"ERGOSUMDEUS"} />
        <HomeCard title={"COMM\nUNI\nCATE"} />
        <HomeCard title={"COG\nI\nTATE"} />

      </div>
    </>
  );
};

export default Homepage;
