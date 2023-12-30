import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [exercises, setExercises] = useState([]);
  const { muscle } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const bodyPartsData = await response.json();
          setExercises([...bodyPartsData]);
        } else {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchExerciseData();
  }, [muscle]);

  return (
    <Box>
      <Stack>
        <h3
          style={{
            color: "#152244",
            margin: "10px 0px 10px ",
            textAlign: "center",
          }}
        >
          {muscle}
        </h3>
        <table className="exercise-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Equipment</th>
              <th>Type</th>
              <th>Instructions</th>
              <th>Muscle</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.equipment}</td>
                <td>{item.type}</td>
                <td>{item.instructions}</td>
                <td>{item.muscle}</td>
                <td>{item.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
    </Box>
  );
};

export default ExerciseDetail;
