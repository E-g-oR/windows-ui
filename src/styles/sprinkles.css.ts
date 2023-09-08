import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { themeContract } from "./themeContracts.css";
import { alignItems, fontWeight, justifyContent } from "@utils/constants";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline", "grid"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    justifyContent,
    alignItems,

    paddingTop: themeContract.spacing,
    paddingBottom: themeContract.spacing,
    paddingLeft: themeContract.spacing,
    paddingRight: themeContract.spacing,
    marginTop: themeContract.spacing,
    marginBottom: themeContract.spacing,
    marginLeft: themeContract.spacing,
    marginRight: themeContract.spacing,

    fontSize: themeContract.text,

    fontWeight,

    cursor: ["pointer", "not-allowed"],

    gap: themeContract.spacing,

    borderTopLeftRadius: themeContract.borderRadius,
    borderTopRightRadius: themeContract.borderRadius,
    borderBottomRightRadius: themeContract.borderRadius,
    borderBottomLeftRadius: themeContract.borderRadius,
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],

    placeItems: ["justifyContent", "alignItems"],

    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    borderRightRadius: ["borderBottomRightRadius", "borderTopRightRadius"],
    borderLeftRadius: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    borderRadius: [
      "borderTopLeftRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
      "borderTopRightRadius",
    ],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
