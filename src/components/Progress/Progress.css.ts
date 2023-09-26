import { sprinkles } from "@/styles/sprinkles.css";
import {
  colorSchemeContract,
  themeContract,
} from "@/styles/themeContracts.css";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const circle = style({
  stroke: colorSchemeContract.primary.normal,
  strokeWidth: 3,
  fill: "transparent",
});

export const lineAnimation = keyframes({
  "0%": { width: "20%", left: 0 },
  "50%": { width: "60%", left: "20%" },
  "100%": { width: "20%", left: "80%" },
});

export const line = style({
  position: "absolute",
  height: "100%",
  top: 0,
  left: 0,
  animation: lineAnimation,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationPlayState: "running",
  animationDirection: "alternate",
});

export const LinearProgressBg = style({
  position: "relative",
  width: "100%",
  height: 7,
  overflow: "hidden",
  borderRadius: themeContract.borderRadius.md,
});

export const linearProgress = recipe({
  base: {
    height: 6,
    width: "100%",
    appearance: "none",
    borderRadius: themeContract.borderRadius.md,
    overflow: "hidden",
  },
  variants: {
    color: {
      primary: {
        selectors: {
          ["&::-webkit-progress-bar"]: {
            backgroundColor: colorSchemeContract.primary.normalTransparent,
          },
          ["&::-webkit-progress-value"]: {
            backgroundColor: colorSchemeContract.primary.normal,
          },
        },
      },
      secondary: {
        selectors: {
          ["&::-webkit-progress-bar"]: {
            backgroundColor: colorSchemeContract.secondary.normalTransparent,
          },
          ["&::-webkit-progress-value"]: {
            backgroundColor: colorSchemeContract.secondary.normal,
          },
        },
      },
      error: {
        selectors: {
          ["&::-webkit-progress-bar"]: {
            backgroundColor: colorSchemeContract.error.normalTransparent,
          },
          ["&::-webkit-progress-value"]: {
            backgroundColor: colorSchemeContract.error.normal,
          },
        },
      },
      success: {
        selectors: {
          ["&::-webkit-progress-bar"]: {
            backgroundColor: colorSchemeContract.success.normalTransparent,
          },
          ["&::-webkit-progress-value"]: {
            backgroundColor: colorSchemeContract.success.normal,
          },
        },
      },
      warning: {
        selectors: {
          ["&::-webkit-progress-bar"]: {
            backgroundColor: colorSchemeContract.warning.normalTransparent,
          },
          ["&::-webkit-progress-value"]: {
            backgroundColor: colorSchemeContract.warning.normal,
          },
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const linearProgressWrapper = sprinkles({display: "flex", alignItems: "center", flexDirection: "column"})