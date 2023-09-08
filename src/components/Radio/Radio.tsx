import { FC, Fragment } from "react";
import { motion } from "framer-motion";
import { Typography } from "../Typography/Typography";
import { checkbox, label } from "../Checkbox/Checkbox.css";
import { clsx } from "@utils/etc";
import { sprinkles } from "@styles/sprinkles.css";
import * as styles from "./Radio.css";

interface Props {
  item: { title: string; value: number | string };
  name: string;
  checked: boolean;
  onChange: (item: { title: string; value: number | string }) => void;
}
export const Radio: FC<Props> = ({ item, name, checked, onChange }) => {
  return (
    <label className={label} data-testid={item.title}>
      <input
        className={styles.inputRadio}
        type="radio"
        value={item.value}
        name={name}
        onChange={() => onChange(item)}
      />
      <div
        className={clsx(
          checkbox({ checked }),
          sprinkles({ borderRadius: "lg" })
        )}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={styles.decorator}
          />
        )}
      </div>
      <Typography>{item.title}</Typography>
    </label>
  );
};

interface PropsGroup {
  items: ReadonlyArray<{ title: string; value: number | string }>;
  value: { title: string; value: number | string };
  onChange: (a: { title: string; value: number | string }) => void;
  name: string;
}

export const RadioGroup: FC<PropsGroup> = ({
  items,
  onChange,
  value,
  name,
}) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
        gap: "sm",
      })}
    >
      {items.map((item) => (
        <Fragment key={item.value}>
          <Radio
            item={item}
            name={name}
            checked={value.value === item.value}
            onChange={onChange}
          />
        </Fragment>
      ))}
    </div>
  );
};
