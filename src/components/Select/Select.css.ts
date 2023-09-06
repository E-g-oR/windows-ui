import {
  colorSchemeContract,
  themeContract,
} from "@/styles/themeContracts.css";
import { style } from "@vanilla-extract/css";

export const select = style({
  position: "relative",
});
export const selectBox = style({
  backgroundColor: colorSchemeContract.background.light,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: 0,
  //   top: "100%",
  padding: themeContract.spacing.sm,
  gap: themeContract.spacing.xs,
});
