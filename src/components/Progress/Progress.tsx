import { FC, useMemo } from "react";
import { motion } from "framer-motion";
import { colorSchemeContract } from "@/styles/themeContracts.css";
import { Typography } from "../Typography/Typography";
import * as styles from "./Progress.css";

interface CircularProps {
  size?: number;
  color?: keyof typeof colorSchemeContract;
  max?: number;
  value?: number;
  isLoading?: boolean;
}
export const CircularProgress: FC<CircularProps> = ({
  size = 40,
  color = "success",
  max,
  value,
  isLoading = true,
}) => {
  const fill = useMemo(
    () => (value && max ? value / max : undefined),
    [value, max]
  );
  return (
    <motion.svg
      height={size}
      width={size}
      initial={!isLoading || fill ? undefined : { rotate: 0 }}
      animate={!isLoading || fill ? undefined : { rotate: 1080 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
      }}
    >
      <motion.circle
        r={size / 2 - 2}
        cx={size / 2}
        cy={size / 2}
        initial={{ pathLength: fill ?? 0.2 }}
        animate={{ pathLength: fill ?? 0.8 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3,
          duration: 1,
        }}
        fill={"none"}
        strokeWidth={3}
        stroke={colorSchemeContract[color].normal}
      />
    </motion.svg>
  );
};

interface LinearProps extends CircularProps {
  renderValue?: (value: number) => string;
}
export const LinearProgress: FC<LinearProps> = ({
  max,
  color = "primary",
  value,
  isLoading = false,
  renderValue,
}) => {
  return isLoading || (!max && !value) ? (
    <div
      className={styles.LinearProgressBg}
      style={{
        backgroundColor: colorSchemeContract[color].normalTransparent,
      }}
    >
      <div
        className={styles.line}
        style={{ backgroundColor: colorSchemeContract[color].normal }}
      />
    </div>
  ) : (
    <div className={styles.linearProgressWrapper}>
      <Typography>{renderValue && value ? renderValue(value) : `${value} / ${max}`}</Typography>
      <progress
        className={styles.linearProgress({ color })}
        max={max}
        value={value}
      />
    </div>
  );
};

interface Props {}
export const Progress: FC<Props> = () => {
  return <CircularProgress />;
};
