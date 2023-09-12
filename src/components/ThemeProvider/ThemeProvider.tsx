import { FC, ReactNode } from "react";
import { clsx } from "@utils/etc";
import { appClassName } from "@styles/main.css";
import { darkScheme, lightScheme } from "@styles/colorSchemes.css";

interface Props {
  colorScheme: "light" | "dark";
  children: ReactNode;
}
export const ThemeProvider: FC<Props> = ({ colorScheme, children }) => {
  return (
    <div
      className={clsx(
        appClassName,
        colorScheme === "dark" ? darkScheme : lightScheme
      )}
      data-testid={"ThemeProvider"}
    >
      {children}
    </div>
  );
};
