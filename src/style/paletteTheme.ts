import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    bluePurple?: string;
    black?: string;
    white?: string;
    darkGrey?: string;
    lightGrey?: string;
    lightBlue?: string;
    mediumGrey?: string;
    lightRed?: string;
    normalGrey?: string;
  }

  interface SimplePaletteColorOptions {
    bluePurple?: string;
    black?: string;
    white?: string;
    darkGrey?: string;
    lightGrey?: string;
    lightBlue?: string;
    mediumGrey?: string;
    lightRed?: string;
    normalGrey?: string;
  }
}

export const palette = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      bluePurple: "#6F47EB",
      black: "#000000",
      white: "#FFFFFF",
      darkGrey: "#5C5F62",
      lightGrey: "#F9F9F9",
      lightBlue: "#EEE9FD",
      mediumGrey: "#EDEDED",
      lightRed: "#FBE4E1",
      normalGrey: "#C5CC5C5",
    },
  },
});
