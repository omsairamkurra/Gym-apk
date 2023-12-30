import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.muscle}`}>
      <Stack direction="column">
        <Typography
          m="20px"
          color="#fff"
          textTransform="capitalize"
          textAlign="center"
          borderRadius="10px"
          backgroundColor="#000"
          fontWeight="bold"
        >
          {exercise.name}
        </Typography>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.equipment}
        </Button>
        <br />
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.type}
        </Button>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
