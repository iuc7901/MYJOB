import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#268AFF",
    },
    secondary: {
      main: "#4BBF74",
    },
    error: {
      main: "#F85049",
    },
    background: {
      main: "#F4F4F4",
    },
    text: {
      primary: "#2F415E",
      secondary: "#A5A9BA",
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
});

export default theme;
