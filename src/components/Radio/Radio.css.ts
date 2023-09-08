import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sizeRelative } from "@utils/etc";
import { sprinkles } from "@styles/sprinkles.css";
import { colorSchemeContract, themeContract } from "@styles/themeContracts.css";

export const radio = sprinkles({
  display: "flex",
  alignItems: "baseline",
  gap: "sm",
});

export const inputRadio = style({
  position: "absolute",
  clip: "rect(0 0 0 0)",
  overflow: "hidden",
});

export const radioStyled = recipe({
    base: {
        width: sizeRelative(20),
        height: sizeRelative(20),
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: themeContract.borderRadius.lg,
        overflow: "hidden"
    }
})

export const decorator = style([sprinkles({borderRadius: "md"}), {
  width: sizeRelative(12),
  height: sizeRelative(12),
  backgroundColor: colorSchemeContract.background.normal
}])
