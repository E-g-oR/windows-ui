import { FC, ReactNode, createElement } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { clsx } from "@utils/etc";
import { fontWeight } from "@utils/constants";

import { sprinkles } from "@styles/sprinkles.css";
import { colorSchemeContract, themeContract } from "@styles/themeContracts.css";
import * as styles from "./Typography.css";

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "em"
  | "small";

interface Props {
  className?: string;
  children: ReactNode;
  as?: TypographyElement;
  fontSize?: keyof typeof themeContract.text;
  color?: keyof typeof colorSchemeContract;
  tint?: keyof typeof colorSchemeContract.background;
  fontWeight?: (typeof fontWeight)[number];
}
export const Typography: FC<Props> = ({
  children,
  as = "p",
  fontSize = "body",
  className,
  color = "text",
  tint = "normal",
  fontWeight = 400,
}) =>
  createElement(as, {
    children,
    style: assignInlineVars({
      [styles.textColor]: colorSchemeContract[color][tint],
    }),
    className: clsx(
      styles.typography,
      sprinkles({ fontSize, fontWeight }),
      className
    ),
  });
