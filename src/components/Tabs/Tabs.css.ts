import { sprinkles } from "@/styles/sprinkles.css";
import { colorSchemeContract } from "@/styles/themeContracts.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tabs = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "md",
});

export const tab = recipe({
  base: [
    {
      backgroundColor: "transparent",
      border: "none",
      position: "relative",
      transition: "0.2s",
      selectors: {
        ["&:hover"]: {
          backgroundColor: colorSchemeContract.background.light,
        },
      },
    },
    sprinkles({
      fontSize: "body",
      paddingY: "sm",
      paddingX: "md",
      borderRadius: "sm",
      cursor: "pointer",
    }),
  ],
  variants: {
    active: {
      true: {
        backgroundColor: colorSchemeContract.background.light,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const activeTabDecorator = style([
  {
    position: "absolute",
    width: "70%",
    left: "15%",
    bottom: 0,
    height: 3,
    backgroundColor: colorSchemeContract.primary.normal,
  },
  sprinkles({ borderRadius: "sm" }),
]);
