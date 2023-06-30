import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import BlackBanner from "../components/BlackBanner/BlackBanner";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import "../css/carousel.scss";
// import collabrateData from "../data/collabrate.json";
import TextComponent from "../components/Text/TextComponent";
import axios from "axios";

const Collaborate = () => {
  const [collabrateData, setCollabrateData] = useState();
  const baseUrl = "https://ergosumdeus.luckistore.in/api/collaborateData";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCollabrateData(response);
    });
  }, []);

  return (
    <>
      {JSON.stringify(collabrateData)}
      {
        <div className="detailPage">
          <div className="detailPage__left">
            <Navigation />
          </div>
          <div className="detailPage__right">
            <BlackBanner title={collabrateData.data.heading} />
            <div></div>
            <div className="detailPage__right-content">
              <h2 className="sectionTitle">01 / proofed </h2>
              <div className="accordionCustom">
                <Accordion defaultActiveKey="0">
                  {collabrateData.data.portfolioData.map((carousel, index) => {
                    // carousel images
                    const carousalData = carousel.images.map((item, index) => {
                      return (
                        <Carousel.Item key={index}>
                          {" "}
                          <img
                            key={index}
                            src={item}
                            alt={carousel.status}
                          />{" "}
                        </Carousel.Item>
                      );
                    });

                    // Features secton content from api
                    const featuresData = carousel.features.map(
                      (item, index) => {
                        return (
                          <li key={index}>
                            <a href="">{item}</a>
                          </li>
                        );
                      }
                    );

                    return (
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{carousel.title}</Accordion.Header>
                        <Accordion.Body>
                          <Carousel>{carousalData}</Carousel>
                          <div className="links links--styled">
                            <ul>{featuresData}</ul>
                          </div>
                          <TextComponent key={index} text={carousel.content} />
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
              <div className="projectLinks">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Collaborate;
