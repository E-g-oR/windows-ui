import { style, createTheme } from "@vanilla-extract/css";
import { themeContract } from "./themeContracts.css";
import { sizeRelative } from "../utils/etc";

export const theme = createTheme(themeContract, {
  spacing: {
    xs: sizeRelative(8),
    sm: sizeRelative(12),
    md: sizeRelative(16),
    lg: sizeRelative(24),
    xl: sizeRelative(32),
  },
  blur: {
    xs: sizeRelative(8),
    sm: sizeRelative(12),
    md: sizeRelative(16),
    lg: sizeRelative(24),
    xl: sizeRelative(32),
  },
  borderRadius: {
    xs: sizeRelative(3),
    sm: sizeRelative(5),
    md: sizeRelative(7),
    lg: sizeRelative(10),
    xl: sizeRelative(15),
  },
});

export const appClassName = style({
  fontFamily: "sans-serif",
});
