import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Theme = createTheme({
    palette: {
      primary: {
        main: "#344f9d",
        light: "#6a83cd",
        dark:"#1b2850"
      },
      secondary:grey
    },
    typography:{
        fontFamily:'PlayfairDisplay',
        fontWeightLight:100,
        fontWeightRegular:300,
        fontWeightMedium:400,
        fontWeightBold:600
    }
  });
  