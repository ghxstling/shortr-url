import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid2,
  Box,
  Stack,
  Paper,
  ThemeProvider,
  Link,
} from "@mui/material";
import "./theme.tsx";
import { boxStyle, centerContent, theme } from "./theme.tsx";

const shortenUrl = async (url: string) => {
  const res = await fetch(`https://ulvis.net/api/write/post?url=${url}`).then(
    (res) => res.json()
  );
};

function Header() {
  return (
    <>
      <Box pt={5}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
          }}
        >
          ShortrURL
        </Typography>
        <Typography
          variant="overline"
          sx={{
            fontSize: "1rem",
          }}
        >
          A free URL shortening website
        </Typography>
      </Box>
    </>
  );
}

function URL() {
  return (
    <>
      <Box>
        <Paper
          elevation={10}
          sx={{
            ...boxStyle,
            ...centerContent,
            height: "10rem",
          }}
        >
          <Grid2>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
              }}
            >
              Paste your URL Here:
            </Typography>
            <Grid2 container spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="https://www.example.com/"
                sx={{
                  width: "30rem",
                }}
              />
              <Button
                variant="contained"
                onClick={() => shortenUrl("www.google.com")}
                sx={{
                  bgcolor: "#096bb1",
                  color: "white",
                }}
              >
                Shorten URL!
              </Button>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </>
  );
}

function Information() {
  return (
    <>
      <Box>
        <Paper
          elevation={10}
          sx={{
            width: "60rem",
            height: "20rem",
            bgcolor: "white",
            color: "black",
            padding: 1,
            // mt: 10,
            borderRadius: 3,
          }}
        >
          <Container>
            <Typography>
              ShortrURL is a free service that allows you to shorten your URL
              links - quick and easy!
            </Typography>
          </Container>
        </Paper>
      </Box>
    </>
  );
}

function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          p: "1rem",
          width: "100%",
        }}
      >
        <Typography variant="body1" color="white">
          {"Copyright © "}
          {new Date().getFullYear()}{" "}
          <Link href="https://ghxstling.info/" target="_blank" color="inherit">
            {"Dylan Choy"}
          </Link>
        </Typography>
      </Box>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={5} sx={centerContent}>
        <Header />
        <URL />
        <Information />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
