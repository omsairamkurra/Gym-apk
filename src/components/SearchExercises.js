import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const bodyPartsData = await response.json(); // Extract JSON data
          setBodyParts([...bodyPartsData]);
        } else {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    console.log(bodyParts);
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=${search}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const responseData = await response.json(); // Extract JSON data
          const searchedExercises = responseData.filter(
            (exercise) =>
              exercise.name.toLowerCase().includes(search.toLowerCase()) ||
              exercise.muscle.toLowerCase().includes(search.toLowerCase()) ||
              exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
              exercise.type.toLowerCase().includes(search.toLowerCase())
          );

          setSearch("");
          setExercises(searchedExercises);
          console.log(searchedExercises);
        } else {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
