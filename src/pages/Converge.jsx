import React from "react";
import Navigation from "../components/Navigation/Navigation";
import BlackBanner from "../components/BlackBanner/BlackBanner";
import { Link } from "react-router-dom";
import TextComponent from "../components/Text/TextComponent";
import convergeData from "../data/converge.json";

const Converge = () => {
  return (
    <>
   
      <div className="detailPage">
        <div className="detailPage__left">
          <Navigation />
        </div>
        <div className="detailPage__right">
          <BlackBanner
            title={convergeData.data.heading}
          />

          <div className="detailPage__right-content">
          {convergeData.data.topic_data.map((topic, index) => {
                  return (
                    <TextComponent key={topic.topic_id} title={topic.title} text={topic.description}  />
                  );
                })}
          
          

            <div className={`links`}>
              <ul>
                {convergeData.data.link_data.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link>{link.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Converge;
