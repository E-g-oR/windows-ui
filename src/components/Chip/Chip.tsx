import { FC } from "react";
import * as styles from "./Chip.css";
import { Typography } from "../Typography/Typography";
import { buttonVariants } from "../Button/Button.css";

interface Props {
  label: string;
  variant?: keyof typeof buttonVariants;
  color?: keyof typeof styles.chipColors;
}
export const Chip: FC<Props> = ({
  color = "neutral",
  label = "chip",
  variant = "soft",
}) => (
  <div className={styles.chip({ color, variant })} data-testid={"Chip"}>
    <Typography
      color={
        variant === "solid"
          ? "background"
          : color === "neutral"
          ? "text"
          : "background"
      }
    >
      {label}
    </Typography>
  </div>
);
