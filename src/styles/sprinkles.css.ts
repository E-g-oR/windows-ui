import { defineProperties } from "@vanilla-extract/sprinkles";
import { themeContract } from "./themeContracts.css";
import { createSprinkles } from "@vanilla-extract/sprinkles/createRuntimeSprinkles";

export const alignItems = [
  "stretch",
  "flex-start",
  "center",
  "flex-end",
] as const;
export const justifyContent = [
  "stretch",
  "flex-start",
  "center",
  "flex-end",
  "space-around",
  "space-between",
] as const;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline", "grid"],
    flexDirection: ["row", "column"],
    justifyContent,
    alignItems,
    paddingTop: themeContract.spacing,
    paddingBottom: themeContract.spacing,
    paddingLeft: themeContract.spacing,
    paddingRight: themeContract.spacing,
    fontSize: themeContract.text,
    borderTopLeftRadius: themeContract.borderRadius,
    borderTopRightRadius: themeContract.borderRadius,
    borderBottomRightRadius: themeContract.borderRadius,
    borderBottomLeftRadius: themeContract.borderRadius,
    borderRadius: themeContract.borderRadius,
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    borderRightRadius: ["borderBottomRightRadius", "borderTopRightRadius"],
    borderLeftRadius: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
