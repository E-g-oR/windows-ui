import { sprinkles } from "@/styles/sprinkles.css";
import {
  colorSchemeContract,
  themeContract,
} from "@/styles/themeContracts.css";
import { sizeRelative } from "@/utils/etc";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { buttonColor } from "../Button/Button.css";

export const notifications = style([
  {
    position: "fixed",
    top: sizeRelative(20),
    left: sizeRelative(20),
    zIndex: 9999,
  },
  sprinkles({ display: "flex", flexDirection: "column", gap: "sm" }),
]);

export const notification = recipe({
  base: [
    sprinkles({ paddingX: "lg", paddingY: "md", borderRadius: "md" }),
    {
      backdropFilter: themeContract.blur.md,
    },
  ],
  variants: {
    color: buttonColor,
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      variants: {
        color: "primary",
      },
      style: {
        backgroundColor: colorSchemeContract.primary.lightTransparent,
        borderColor: colorSchemeContract.primary.lightTransparent,
      },
    },
    {
      variants: {
        color: "secondary",
      },
      style: {
        backgroundColor: colorSchemeContract.secondary.lightTransparent,
        borderColor: colorSchemeContract.secondary.lightTransparent,
      },
    },
    {
      variants: {
        color: "success",
      },
      style: {
        backgroundColor: colorSchemeContract.success.lightTransparent,
        borderColor: colorSchemeContract.success.lightTransparent,
      },
    },
    {
      variants: {
        color: "error",
      },
      style: {
        backgroundColor: colorSchemeContract.error.lightTransparent,
        borderColor: colorSchemeContract.error.lightTransparent,
      },
    },
    {
      variants: {
        color: "warning",
      },
      style: {
        backgroundColor: colorSchemeContract.warning.lightTransparent,
        borderColor: colorSchemeContract.warning.lightTransparent,
      },
    },
  ],
});
