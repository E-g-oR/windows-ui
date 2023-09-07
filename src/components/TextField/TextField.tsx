import { FC } from "react";

import { clsx } from "@utils/etc";
import { Typography } from "../Typography/Typography";

import * as styles from "./TextField.css";

interface Props {
  label?: string;
  value: string;
  onChange: (newValue: string) => void;
  isError?: boolean;
  element?: "input" | "textarea";
  className?: string;
}
export const TextField: FC<Props> = ({
  label,
  onChange,
  value,
  isError,
  element = "input",
  className
}) => {
  return (
    <label className={clsx(styles.textField, className)} data-testid={"TextField"}>
      <Typography as="span">{label}</Typography>
      {element === "input" ? (
        <input
          className={styles.field({ isError })}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <textarea
          className={styles.field({ isError })}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
};
