import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css";
import { colorSchemeContract, themeContract } from "./themeContracts.css";
import { sizeRelative } from "@utils/etc";

export const theme = createGlobalTheme(":root", themeContract, {
  spacing: {
    xs: sizeRelative(4),
    sm: sizeRelative(8),
    md: sizeRelative(12),
    lg: sizeRelative(24),
    xl: sizeRelative(32),
  },
  blur: {
    xs: `blur(${sizeRelative(8)})`,
    sm: `blur(${sizeRelative(12)})`,
    md: `blur(${sizeRelative(16)})`,
    lg: `blur(${sizeRelative(24)})`,
    xl: `blur(${sizeRelative(32)})`,
  },
  borderRadius: {
    xs: sizeRelative(3),
    sm: sizeRelative(5),
    md: sizeRelative(7),
    lg: sizeRelative(10),
    xl: sizeRelative(15),
  },
  text: {
    h1: sizeRelative(66),
    h2: sizeRelative(56),
    h3: sizeRelative(46),
    h4: sizeRelative(36),
    h5: sizeRelative(26),
    h6: sizeRelative(16),
    body: sizeRelative(16),
    small: sizeRelative(13),
  },
});

export const appClassName = style({
  fontFamily: "sans-serif",
  backgroundColor: colorSchemeContract.background.normal,
  width: "100vw",
  height: "100vh",
});

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});
