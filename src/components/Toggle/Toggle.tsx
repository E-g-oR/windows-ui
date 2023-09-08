import { FC } from "react";
import { motion } from "framer-motion";
import { Typography } from "../Typography/Typography";
import { input } from "../Checkbox/Checkbox.css";
import * as styles from "./Toggle.css";

interface Props {
  position?: "left" | "right";
  checked: boolean;
  onChange: (checked: boolean) => void;
  textOn?: string;
  textOff?: string;
  label: string;
}
export const Toggle: FC<Props> = ({
  position = "left",
  checked,
  onChange,
  textOff,
  textOn,
  label,
}) => {
  return (
    <label className={styles.label({ position })} data-testid={"Toggle"}>
      <input
        className={input}
        type={"checkbox"}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className={styles.toggle({ active: checked })}>
        <motion.div
          layout
          className={styles.toggleDecorator({ active: checked })}
        />
      </div>
      <Typography>
        {checked && textOn ? textOn : !checked && textOff ? textOff : label}
      </Typography>
    </label>
  );
};
