import { FC } from "react";
import * as styles from "./TemplateName.css";

interface Props {}
export const TemplateName: FC<Props> = () => {
  return (
    <div className={styles.templateName} data-testid={"TemplateName"}>
      TemplateName
    </div>
  );
};
