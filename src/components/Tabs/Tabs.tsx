import { FC, ReactNode } from "react";
import * as styles from "./Tabs.css";
import { motion } from "framer-motion";

interface Props {
  value: string;
  onChange: (value: string) => void;
  tabs: ReadonlyArray<string>;
  render: (value: string) => ReactNode;
}
export function Tabs({ onChange, value, tabs, render }: Props) {
  return (
    <div className={styles.tabs} data-testid={"Tabs"}>
      {tabs.map((tab: string, index) => (
        <button
          className={styles.tab({ active: value === tab })}
          key={index}
          onClick={() => onChange(tab)}
        >
          {value === tab && (
            <motion.div
              layoutId="active"
              className={styles.activeTabDecorator}
            />
          )}
          {render(tab)}
        </button>
      ))}
    </div>
  );
}
