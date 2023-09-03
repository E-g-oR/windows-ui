import { createVar, style } from "@vanilla-extract/css";

export const textColor = createVar();

export const typography = style({
  lineHeight: "130%",
  color: textColor,
});
