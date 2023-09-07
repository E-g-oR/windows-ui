import { FC } from "react";
import * as styles from "./Checkbox.css";
import { Typography } from "../Typography/Typography";
import { motion } from "framer-motion";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}
export const Checkbox: FC<Props> = ({ checked, onChange, label }) => {
  return (
    <label className={styles.label} data-testid={"Checkbox"}>
      <input
        className={styles.input}
        type={"checkbox"}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className={styles.checkbox({ checked })}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
        >
          {checked && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              d="M0.5 5.25L4 8.75L11.5 1.25"
              stroke="#EBEDEF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
        </svg>
      </div>
      <Typography as={"span"}>{label}</Typography>
    </label>
  );
};
