import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sizeRelative } from "@utils/etc";
import { sprinkles } from "@styles/sprinkles.css";
import { colorSchemeContract } from "@styles/themeContracts.css";

export const checkbox = recipe({
  base: [
    sprinkles({ borderRadius: "xs", display: "flex", placeItems: "center" }),
    {
      width: sizeRelative(20),
      height: sizeRelative(20),
      borderWidth: 1,
      borderStyle: "solid",
      transition: "0.2s",
    },
  ],
  variants: {
    checked: {
      true: {
        backgroundColor: colorSchemeContract.primary.normal,
        borderColor: colorSchemeContract.primary.normal,
      },
      false: {
        borderColor: colorSchemeContract.text.light,
      },
    },
  },
});
export const input = style({
  position: "absolute",
  clip: "rect(0 0 0 0)",
  overflow: "hidden",
});
export const label = sprinkles({
  display: "flex",
  gap: "sm",
  alignItems: "center",
  cursor: "pointer",
});
