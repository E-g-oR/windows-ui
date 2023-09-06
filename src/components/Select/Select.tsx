import { ReactNode, useRef, useState } from "react";
import * as styles from "./Select.css";
import { Button } from "../Button/Button";
import { usePopoverPosition } from "@/utils/hooks/usePopoverPosition";

interface Props<T> {
  value: T;
  items: ReadonlyArray<T>;
  render: (item: T) => ReactNode;
}
export function Select<T>({ items, render, value }: Props<T>) {
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false);

  const a = usePopoverPosition(selectBoxRef, parentRef);

  return (
    <div className={styles.select} data-testid={"Select"} ref={parentRef}>
      <Button
        variant="clean"
        onClick={() => {
          a.checkWindowBorders();
          setIsOpen((prev) => !prev);
        }}
      >
        {render(value)}
      </Button>

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
            <Button variant="clean" key={index}>
              {render(item)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
