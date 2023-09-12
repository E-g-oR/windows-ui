import { FC, ReactNode, createContext, useCallback, useState } from "react";
import * as styles from "./Notifications.css";
import { v4 as getId } from "uuid";
import { Notification } from "./Notification";
import { AnimatePresence, motion } from "framer-motion";
import { buttonColor } from "../Button/Button.css";

interface NotificationPayload {
  color?: keyof typeof buttonColor;
  title?: string;
  body: string;
}

export interface Notification extends NotificationPayload {
  id: string;
  timeout: number;
}

const createNotification = (payload: NotificationPayload): Notification => ({
  ...payload,
  id: getId(),
  timeout: 5000,
});

type ShowNotification = (payload: NotificationPayload) => void;

export type ClearNotification = (id: string) => void;

interface NotificationContext {
  showNotification: ShowNotification;
  clearNotification: ClearNotification;
  notifications: ReadonlyArray<Notification>;
}
const defaultValue: NotificationContext = {
  showNotification: () => {},
  clearNotification: () => {},
  notifications: [],
};

export const NotificationsContext = createContext(defaultValue);

interface Props {
  children: ReactNode;
}
export const NotificationsContainer: FC<Props> = ({ children }) => {
  const [notifications, setNotifications] = useState<
    ReadonlyArray<Notification>
  >([]);

  const showNotification: ShowNotification = useCallback(
    (payload: NotificationPayload) => {
      const newNotification = createNotification(payload);
      setNotifications((prev) => prev.concat(newNotification));
    },
    [setNotifications]
  );

  const clearNotification: ClearNotification = useCallback(
    (id: string) =>
      setNotifications((prev) => prev.filter((item) => item.id !== id)),
    [setNotifications]
  );

  return (
    <NotificationsContext.Provider
      value={{ notifications, showNotification, clearNotification }}
    >
      <motion.div
        layout
        className={styles.notifications}
        data-testid={"Notifications"}
      >
        <AnimatePresence initial={false}>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              layout
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: -50,
              }}
            >
              <Notification
                clearNotification={clearNotification}
                notification={notification}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {children}
    </NotificationsContext.Provider>
  );
};
