import { createTheme } from "@mui/material";

export const centerContent = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
};

export const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  },
});

export const boxStyle = {
  width: "60rem",
  minWidth: "700px",
  borderRadius: 3,
  bgcolor: "white",
  color: "black",
};
