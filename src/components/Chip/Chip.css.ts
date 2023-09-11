import { sprinkles } from "@/styles/sprinkles.css";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { buttonVariants } from "../Button/Button.css";
import { colorSchemeContract } from "@/styles/themeContracts.css";

export const chipColors = styleVariants({
  primary: {},
  secondary: {},
  success: {},
  error: {},
  warning: {},
  neutral: {},
});

export const chip = recipe({
  base: [
    sprinkles({
      display: "flex",
      placeItems: "center",
      paddingX: "md",
      paddingY: "xs",
      borderRadius: "xl",
    }),
    {
      borderStyle: "solid",
      borderWidth: 1,
      width: "fit-content",
    },
  ],
  variants: {
    color: chipColors,
    variant: buttonVariants,
  },
  defaultVariants: {
    color: "neutral",
    variant: "solid",
  },
  compoundVariants: [
    // neutral outline
    {
      variants: {
        color: "neutral",
        variant: "outline",
      },
      style: {
        borderColor: colorSchemeContract.background.light,
      },
    },
    // neutral solid
    {
      variants: {
        color: "neutral",
        variant: "solid",
      },
      style: {
        borderColor: colorSchemeContract.background.light,
        backgroundColor: colorSchemeContract.background.light,
      },
    },
    // neutral solid
    {
      variants: {
        color: "neutral",
        variant: "soft",
      },
      style: {
        borderColor: colorSchemeContract.background.lightTransparent,
        backgroundColor: colorSchemeContract.background.lightTransparent,
      },
    },
    // primary soft
    {
      variants: {
        color: "primary",
        variant: "soft",
      },
      style: {
        borderColor: colorSchemeContract.primary.lightTransparent,
        backgroundColor: colorSchemeContract.primary.lightTransparent,
      },
    },
    // primary solid
    {
      variants: {
        color: "primary",
        variant: "solid",
      },
      style: {
        borderColor: colorSchemeContract.primary.normal,
        backgroundColor: colorSchemeContract.primary.normal,
      },
    },
    // primary outline
    {
      variants: {
        color: "primary",
        variant: "outline",
      },
      style: {
        borderColor: colorSchemeContract.primary.normal,
        backgroundColor: colorSchemeContract.background.normal,
      },
    },
    // secondary outline
    {
      variants: {
        color: "secondary",
        variant: "outline",
      },
      style: {
        borderColor: colorSchemeContract.secondary.normal,
        backgroundColor: colorSchemeContract.background.normal,
      },
    },
    // secondary soft
    {
      variants: {
        color: "secondary",
        variant: "soft",
      },
      style: {
        borderColor: colorSchemeContract.secondary.normalTransparent,
        backgroundColor: colorSchemeContract.secondary.normalTransparent,
      },
    },
    // secondary solid
    {
      variants: {
        color: "secondary",
        variant: "solid",
      },
      style: {
        borderColor: colorSchemeContract.secondary.normal,
        backgroundColor: colorSchemeContract.secondary.normal,
      },
    },
    // success solid
    {
      variants: {
        color: "success",
        variant: "solid",
      },
      style: {
        borderColor: colorSchemeContract.success.normal,
        backgroundColor: colorSchemeContract.success.normal,
      },
    },
    // success soft
    {
      variants: {
        color: "success",
        variant: "soft",
      },
      style: {
        borderColor: colorSchemeContract.success.lightTransparent,
        backgroundColor: colorSchemeContract.success.lightTransparent,
      },
    },
    // success outline
    {
      variants: {
        color: "success",
        variant: "outline",
      },
      style: {
        borderColor: colorSchemeContract.success.normal,
        backgroundColor: colorSchemeContract.background.normal,
      },
    },
    // TODO: add warning & error styles
  ],
});
