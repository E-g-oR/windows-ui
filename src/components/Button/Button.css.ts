import { sprinkles } from "@/styles/sprinkles.css";
import { colorSchemeContract } from "@/styles/themeContracts.css";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonSize = styleVariants({
  sm: [sprinkles({ paddingY: "xs", paddingX: "md", borderRadius: "xs" })],
  md: [sprinkles({ paddingY: "xs", paddingX: "lg", borderRadius: "xs" })],
  xl: [sprinkles({ paddingY: "sm", paddingX: "xl", borderRadius: "xs" })],
});

export const buttonColor = styleVariants({
  primary: {},
  secondary: {},
  success: {},
  error: {},
  warning: {},
});

export const buttonVariants = styleVariants({
  outline: {
    backgroundColor: colorSchemeContract.background.normal,
  },
  solid: {
    color: colorSchemeContract.background.normal,
  },
  soft: {},
  clean: {
    backgroundColor: colorSchemeContract.background.normal,
  },
});

export const button = recipe({
  base: [
    {
      textTransform: "uppercase",
      borderStyle: "solid",
      borderWidth: 1,
      transition: "0.2s",
      cursor: "pointer",
      selectors: {
        ["&:hover"]: {
          scale: 1.02,
        },
        ["&:active"]: {
          scale: 0.98,
        },
      },
    },
    sprinkles({ display: "flex", placeItems: "center" }),
  ],
  variants: {
    variant: buttonVariants,
    size: buttonSize,
    color: buttonColor,
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    color: "primary",
  },

  compoundVariants: [
    // solid primary
    {
      variants: {
        color: "primary",
        variant: "solid",
      },
      style: {
        backgroundColor: colorSchemeContract.primary.normal,
        borderColor: colorSchemeContract.primary.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.primary.light,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.primary.dark,
          },
        },
      },
    },
    // solid secondary
    {
      variants: {
        color: "secondary",
        variant: "solid",
      },
      style: {
        backgroundColor: colorSchemeContract.secondary.normal,
        borderColor: colorSchemeContract.secondary.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.secondary.light,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.secondary.dark,
          },
        },
      },
    },
    // solid success
    {
      variants: {
        color: "success",
        variant: "solid",
      },
      style: {
        backgroundColor: colorSchemeContract.success.normal,
        borderColor: colorSchemeContract.success.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.success.light,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.success.dark,
          },
        },
      },
    },
    // solid error
    {
      variants: {
        color: "error",
        variant: "solid",
      },
      style: {
        backgroundColor: colorSchemeContract.error.normal,
        borderColor: colorSchemeContract.error.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.error.light,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.error.dark,
          },
        },
      },
    },
    // solid warning
    {
      variants: {
        color: "warning",
        variant: "solid",
      },
      style: {
        backgroundColor: colorSchemeContract.warning.normal,
        borderColor: colorSchemeContract.warning.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.warning.light,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.warning.dark,
          },
        },
      },
    },
    // outline primary
    {
      variants: {
        color: "primary",
        variant: "outline",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.primary.normal,
        color: colorSchemeContract.primary.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.primary.normalTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.primary.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "secondary",
        variant: "outline",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.secondary.normal,
        color: colorSchemeContract.secondary.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.secondary.normalTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.secondary.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "success",
        variant: "outline",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.success.normal,
        color: colorSchemeContract.success.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.success.normalTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.success.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "error",
        variant: "outline",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.error.normal,
        color: colorSchemeContract.error.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.error.normalTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.error.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "warning",
        variant: "outline",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.warning.normal,
        color: colorSchemeContract.warning.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.warning.normalTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.warning.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "primary",
        variant: "soft",
      },
      style: {
        backgroundColor: colorSchemeContract.primary.normalTransparent,
        borderColor: colorSchemeContract.primary.darkTransparent,
        color: colorSchemeContract.primary.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.primary.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.primary.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "success",
        variant: "soft",
      },
      style: {
        backgroundColor: colorSchemeContract.success.normalTransparent,
        borderColor: colorSchemeContract.success.darkTransparent,
        color: colorSchemeContract.success.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.success.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.success.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "error",
        variant: "soft",
      },
      style: {
        backgroundColor: colorSchemeContract.error.normalTransparent,
        borderColor: colorSchemeContract.error.darkTransparent,
        color: colorSchemeContract.error.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.error.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.error.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "secondary",
        variant: "soft",
      },
      style: {
        backgroundColor: colorSchemeContract.secondary.normalTransparent,
        borderColor: colorSchemeContract.secondary.darkTransparent,
        color: colorSchemeContract.secondary.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.secondary.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.secondary.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "warning",
        variant: "soft",
      },
      style: {
        backgroundColor: colorSchemeContract.warning.normalTransparent,
        borderColor: colorSchemeContract.warning.darkTransparent,
        color: colorSchemeContract.warning.dark,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.warning.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.warning.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "primary",
        variant: "clean",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.background.normal,
        color: colorSchemeContract.primary.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.primary.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.primary.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "secondary",
        variant: "clean",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.background.normal,
        color: colorSchemeContract.secondary.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.secondary.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.secondary.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "success",
        variant: "clean",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.background.normal,
        color: colorSchemeContract.success.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.success.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.success.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "error",
        variant: "clean",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.background.normal,
        color: colorSchemeContract.error.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.error.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.error.darkTransparent,
          },
        },
      },
    },
    {
      variants: {
        color: "warning",
        variant: "clean",
      },
      style: {
        backgroundColor: colorSchemeContract.background.normal,
        borderColor: colorSchemeContract.background.normal,
        color: colorSchemeContract.warning.normal,
        selectors: {
          ["&:hover"]: {
            backgroundColor: colorSchemeContract.warning.lightTransparent,
          },
          ["&:active"]: {
            backgroundColor: colorSchemeContract.warning.darkTransparent,
          },
        },
      },
    },
  ],
});
