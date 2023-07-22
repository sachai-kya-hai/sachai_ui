import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#253529",
      light: "#FFF4E0",
      dark: "#1b2850"
    },
    secondary: { main: "#4D4D4D" }
  },
  typography: {
    fontFamily: "PlayfairDisplay",
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600
  }
});
