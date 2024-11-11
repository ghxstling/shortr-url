import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid2,
  Box,
  Stack,
} from "@mui/material";

function App() {
  return (
    <>
      <Stack spacing={5}>
        <Box>
          <Typography variant="h1">Shortr</Typography>
          <Typography variant="overline">Made by ghxstling</Typography>
        </Box>
        <Box>
          <Grid2
            container
            direction={"row"}
            spacing={5}
            sx={{ justifyContent: "center" }}
          >
            <TextField
              variant="outlined"
              placeholder="www.example.com"
              sx={{
                width: "50vh",
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "black",
              }}
            >
              Shorten URL!
            </Button>
          </Grid2>
        </Box>
        <Box
          sx={{
            width: "85vh",
            height: "40vh",
            bgcolor: "white",
            color: "black",
            padding: 1,
            borderRadius: 5,
          }}
        >
          dsaddasdsad
        </Box>
      </Stack>
    </>
  );
}

export default App;
