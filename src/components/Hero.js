import "./HeroStyles.css";
import React, { useState, useEffect } from "react";

const images = [
  "https://www.meram.bel.tr/upload/medya/MRM5613.jpg",
  
  "https://www.meram.bel.tr/upload/medya/IMG-20240131-WA0006.jpg",
  "https://cdn.konyaninsesi.com.tr/other/2023/06/23/meram-bel.png",
  "https://www.meram.bel.tr/upload/medya/MRM_1035.jpg",
  "https://www.meram.bel.tr/upload/medya/847A8765_2_1.jpg",
  "https://www.meram.bel.tr/upload/medya/11_25_1.jpg",
  "https://www.meram.bel.tr/upload/medya/DJI_0700.jpg",
  "https://cdn.gokonya.com/other/meram-cay.jpg",
  
];

const Hero = (props) => {
  const [index, setIndex] = useState(0);

  const select = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      style={{
        position: "relative",
        width: "100wv",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      {images.map((image, i) => {
        return (
          <img
            key={i}
            src={image}
            alt="hero"
            style={{ display: index === i ? "block" : "none" }}
          />
        );
      })}
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnclass}>
          {props.buttontext}
        </a>
      </div>
      <div style={{ position: "absolute", bottom: "10px", left: "47%" }}>
        {images.map((_, i) => {
          return (
            <span
              key={i}
              onClick={() => select(i)}
              style={{
                display: "inline-block",
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor: index === i ? "black" : "white",
                margin: "0 5px",
                cursor: "pointer",
              }}
            ></span>
          );
        })}
        </div>
    </div>
  );
};

export default Hero;
