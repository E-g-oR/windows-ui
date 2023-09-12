import { FC, useLayoutEffect } from "react";
import {
  ClearNotification,
  Notification as NotificationType,
} from "./Notifications";
import { Typography } from "../Typography/Typography";
import * as styles from "./Notifications.css";

interface Props {
  notification: NotificationType;
  clearNotification: ClearNotification;
}
export const Notification: FC<Props> = ({
  clearNotification,
  notification,
}) => {
  useLayoutEffect(() => {
    const timeoutId = setTimeout(
      () => clearNotification(notification.id),
      notification.timeout
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [clearNotification, notification.id, notification.timeout]);

  return (
    <div className={styles.notification({ color: notification.color })}>
      <Typography color={notification.color ?? "primary"}>
        {notification.body}
      </Typography>
    </div>
  );
};
