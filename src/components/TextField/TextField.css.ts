import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import { colorSchemeContract } from "@styles/themeContracts.css";

export const textField = style([
  sprinkles({ display: "flex", flexDirection: "column" }),
  {},
]);

export const field = recipe({
  base: [
    sprinkles({
      fontSize: "body",
      paddingY: "xs",
      paddingX: "md",
      borderRadius: "sm",
    }),
    {
      borderStyle: "solid",
      borderWidth: 1,

      //   maxWidth: 200,

      transition: "0.1s",
      outline: "none",
      selectors: {
        ["&:focus"]: {
          borderBottomWidth: 2,
        },
      },
    },
  ],
  variants: {
    isError: {
      true: {
        borderColor: colorSchemeContract.error.lightTransparent,
        backgroundColor: colorSchemeContract.error.lightTransparent,
        color: colorSchemeContract.error.light,
        selectors: {
          ["&:focus"]: {
            borderBottomColor: colorSchemeContract.error.normal,
            color: colorSchemeContract.error.normal,
          },
        },
      },
      false: {
        borderColor: colorSchemeContract.background.light,
        borderBottomColor: colorSchemeContract.primary.light,
        backgroundColor: colorSchemeContract.background.normal,
        color: colorSchemeContract.text.normal,
        selectors: {
          ["&:focus"]: {
            borderBottomColor: colorSchemeContract.primary.normal,
            backgroundColor: colorSchemeContract.background.light,
          },
        },
      },
    },
  },
  defaultVariants: {
    isError: true,
  },
});
