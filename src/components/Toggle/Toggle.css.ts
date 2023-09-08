import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@styles/sprinkles.css";
import {
  colorSchemeContract,
  themeContract,
} from "@styles/themeContracts.css";
import { sizeRelative } from "@utils/etc";

export const label = recipe({
  base: sprinkles({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "md",
  }),
  variants: {
    position: {
      left: sprinkles({ flexDirection: "row" }),
      right: sprinkles({ flexDirection: "row-reverse" }),
    },
  },
  defaultVariants: {
    position: "left",
  },
});
export const toggle = recipe({
  base: [
    sprinkles({ display: "flex", borderRadius: "lg", alignItems: "center" }),
    {
      width: sizeRelative(40),
      height: sizeRelative(20),
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: colorSchemeContract.text.light,
      transition: "0.2s",
    },
  ],
  variants: {
    active: {
      true: {
        borderColor: colorSchemeContract.primary.normal,
        backgroundColor: colorSchemeContract.primary.normal,
        justifyContent: "flex-end",
      },
      false: {
        justifyContent: "flex-start",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
export const toggleDecorator = recipe({
  base: {
    width: sizeRelative(14),
    height: sizeRelative(14),
    marginLeft: sizeRelative(3),
    marginRight: sizeRelative(3),
    borderRadius: themeContract.borderRadius.lg,
    transitionDuration: "0.2s",
    transitionProperty: "background-color",
  },
  variants: {
    active: {
      true: {
        backgroundColor: colorSchemeContract.background.normal,
      },
      false: {
        backgroundColor: colorSchemeContract.text.light,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
