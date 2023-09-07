import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { colorSchemeContract, themeContract } from "@styles/themeContracts.css";

export const select = style({
  position: "relative",
});

export const selectBox = style({
  backgroundColor: colorSchemeContract.background.normal,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: 0,
  padding: themeContract.spacing.sm,
  gap: themeContract.spacing.xs,
  borderWidth: 1,
  borderColor: colorSchemeContract.background.light,
  borderStyle: "solid",
  borderRadius: themeContract.borderRadius.sm,
});

export const selectButton = recipe({
  base: [
    sprinkles({
      paddingY: "xs",
      paddingX: "lg",
      fontSize: "body",
      borderRadius: "xs",
    }),
    {
      backgroundColor: colorSchemeContract.background.normal,
      color: colorSchemeContract.text.normal,
      border: "none",
      cursor: "pointer",
      transition: "0.1s",
      selectors: {
        ["&:hover"]: {
          backgroundColor: colorSchemeContract.background.light,
        },
      },
    },
  ],
  variants: {
    active: {
      true: {
        backgroundColor: colorSchemeContract.background.light,
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});
