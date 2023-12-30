import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";
import { Link } from "react-router-dom";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "2px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "30px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Link to={`/exercise/${item.muscle}`}>
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: "30px", height: "30px" }}
        />
        <Typography
          fontSize="20px"
          fontWeight="bold"
          color="#3A1212"
          textTransform="capitalize"
        >
          {item.muscle}
        </Typography>
      </Link>
    </Stack>
  );
};

export default BodyPart;
