import { createTheme } from "@mui/system";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      100: "#00274A",
      900: "#000D22",
    },
    yellow: {
      100: "#FFCF45",
    },
    orange: {
      100: "#FFA500",
      200: "#FFAE42",
    },
    header: {
      900: "#000D22DE",
    },
    grey,
  },
  spacing: (factor) => `${4 * factor}px`,
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face{
        font-family: 'Poppins';
        font-style: regular;
        font-weight: 400;
        src: url('../../../public/assets/fonts/Poppins/Poppins-Regular.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
  
      @font-face{
        font-family: 'Poppins';
        font-style: medium;
        font-weight: 500;
        src: url('../../../public/assets/fonts/Poppins/Poppins-Medium.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
  
      @font-face{
        font-family: 'Poppins';
        font-style: semi-bold;
        font-weight: 600;
        src: url('../../../public/assets/fonts/Poppins/Poppins-SemiBold.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
  
      @font-face{
        font-family: 'Poppins';
        font-style: bold;
        font-weight: 700;
        src: url('../../../public/assets/fonts/Poppins/Poppins-Bold.ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `,
    },
  },
});

export default theme;
