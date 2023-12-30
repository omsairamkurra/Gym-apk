import React, { useRef } from "react";
import BodyPart from "./BodyPart";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust scroll distance as needed
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={LeftArrowIcon}
        alt="left-arrow"
        onClick={scrollLeft}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1, // Ensure the icon stays on top
        }}
      />
      <div
        style={{
          width: "calc(100% - 40px)",
          overflowX: "auto",
          marginLeft: "20px",
          display: "flex",
          position: "relative",
        }}
        ref={scrollRef}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 5px",
          }}
        >
          {data.map((item, index) => (
            <div key={item.id || index}>
              <BodyPart
                item={item} // Pass the entire 'item' object to the BodyPart component
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </div>
          ))}
        </div>
      </div>
      <img
        src={RightArrowIcon}
        alt="right-arrow"
        onClick={scrollRight}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default HorizontalScrollbar;
