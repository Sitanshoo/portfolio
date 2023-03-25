import { createTheme } from "@material-ui/core";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6DAFA5",
    },
    secondary: {
      main: "#6DAFA5",
    },
  },
  typography: {
    fontFamily: "Titillium Web",
  },
  overrides: {
    MuiInput: {
      input: {
        fontFamily: "Your custom font family",
      },
    },
  },
});
