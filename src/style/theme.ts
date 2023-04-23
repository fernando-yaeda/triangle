import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { palette } from "./paletteTheme";
import { typography } from "./typographyTheme";

export const theme = createTheme(deepmerge(palette, typography));
