import { FC, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Button.css";

interface Props {
  children: ReactNode;
  variant?: keyof typeof styles.buttonVariants;
  size?: keyof typeof styles.buttonSize;
  color?: keyof typeof styles.buttonColor;
}
export const Button: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  size,
  variant,
  color,
  ...props
}) => {
  return (
    <button
      className={styles.button({ size, variant, color })}
      data-testid={"Button"}
      {...props}
    >
      {children}
    </button>
  );
};
