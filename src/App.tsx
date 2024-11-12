import React from "react";
import "./App.css";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid2,
  Box,
  Stack,
  Paper,
} from "@mui/material";

const centerContent = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  return (
    <>
      <Stack spacing={5}>
        <Box padding={10}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: ["sans-serif", "Ubuntu"],
              fontWeight: "bold",
            }}
          >
            ShortrURL
          </Typography>
          <Typography variant="overline">Made by ghxstling</Typography>
        </Box>
        <Box>
          <Paper
            elevation={10}
            sx={{
              height: "10em",
              bgcolor: "white",
              color: "black",
              borderRadius: 3,
              ...centerContent,
            }}
          >
            <Grid2 container spacing={1}>
              <Grid2 size={20}>
                <Typography variant="body1">Paste your URL Here:</Typography>
              </Grid2>
              <Grid2 size={10}>
                <TextField
                  variant="outlined"
                  placeholder="www.example.com"
                  sx={{
                    width: "30em",
                  }}
                />
              </Grid2>
              <Grid2 size={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#3d6ecf",
                    color: "white",
                  }}
                >
                  Shorten URL!
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={10}
            sx={{
              width: "60em",
              height: "30em",
              bgcolor: "white",
              color: "black",
              padding: 1,
              borderRadius: 3,
            }}
          >
            INFORMATION
          </Paper>
        </Box>
      </Stack>
    </>
  );
}

export default App;
