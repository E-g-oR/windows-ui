import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AnimatePresence } from "framer-motion";
import { NotificationsContainer } from "./components/Notifications/Notifications.tsx";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatePresence >
      <ThemeProvider colorScheme="light">
        <NotificationsContainer>
          <App />
        </NotificationsContainer>
      </ThemeProvider>
    </AnimatePresence>
  </React.StrictMode>
);
