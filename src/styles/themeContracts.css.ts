import { createThemeContract } from "@vanilla-extract/css";

const color = {
  light: null,
  lightTransparent: null,
  normal: null,
  normalTransparent: null,
  dark: null,
  darkTransparent: null,
};

const size = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

export const themeContract = createThemeContract({
  spacing: size,
  blur: size,
  borderRadius: size,
});

export const colorSchemeContract = createThemeContract({
  text: color,
  background: color,
  primary: color,
  secondary: color,
  success: color,
  error: color,
  warning: color,
});
