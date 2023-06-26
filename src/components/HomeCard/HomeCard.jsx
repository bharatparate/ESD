import React from 'react';
import { Link } from "react-router-dom";
import './HomeCard.scss'


const HomeCard = (props) => {
 
const id= 2;

  return (
    <>
        <div className="homepageTile"><Link to={`/detail/${id}`}><span>{props.title}</span></Link> </div>
    </>
  );
}
 
export default HomeCard;

