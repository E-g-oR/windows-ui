import { ReactNode, useRef, useState } from "react";

import { usePopoverPosition } from "@utils/hooks/usePopoverPosition";

import * as styles from "./Select.css";

interface Props<T> {
  value: T;
  items: ReadonlyArray<T>;
  render: (item: T) => ReactNode;
  onChange: (value: T) => void;
}

export function Select<T>({ items, render, value, onChange }: Props<T>) {
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const a = usePopoverPosition(selectBoxRef, parentRef);

  return (
    <div className={styles.select} data-testid={"Select"} ref={parentRef}>
      <button
        // variant="clean"
        className={styles.selectButton()}
        onClick={() => {
          a.checkWindowBorders();
          setIsOpen((prev) => !prev);
        }}
      >
        {render(value)}
      </button>

      {isOpen && (
        <div
          ref={selectBoxRef}
          className={styles.selectBox}
          style={{
            top: !a.isCrossingBottom ? "100%" : "auto",
            bottom: a.isCrossingBottom ? "100%" : "auto",
          }}
        >
          {items.map((item, index) => (
            // TODO: active item indicator (using motion)
            <button
              key={index}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className={styles.selectButton({ active: item === value })}
            >
              {render(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
