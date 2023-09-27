import { useContext, useState } from "react";

import { Toggle } from "@components/Toggle/Toggle";
import { NotificationsContext } from "./components/Notifications/Notifications";
import { Button } from "./components/Button/Button";
import {
  CircularProgress,
  LinearProgress,
} from "./components/Progress/Progress";
import Tabs from "./components/Tabs";

const tabs = ["transactions", "chart", "settings"];

function App() {
  const [isDark, setIsDark] = useState(false);
  const { showNotification } = useContext(NotificationsContext);
  const [tab, setTab] = useState(tabs[0]);
  
  return (
    <div>
      <Toggle
        checked={isDark}
        onChange={setIsDark}
        position="right"
        label="Toggle"
        textOn="Is on."
        textOff="Is off."
      />
      <Tabs onChange={setTab} tabs={tabs} value={tab} render={(tab) => tab} />
      <CircularProgress max={100} value={50} />
      <LinearProgress max={50} value={30} />
      <Button onClick={() => showNotification({ body: "hello" })}>
        Show notification
      </Button>
    </div>
  );
}

export default App;
