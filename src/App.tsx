import { useContext, useEffect, useState } from "react";

import { Toggle } from "@components/Toggle/Toggle";
import { NotificationsContext } from "./components/Notifications/Notifications";
import { Button } from "./components/Button/Button";

function App() {
  const [isDark, setIsDark] = useState(false);
  const { showNotification } = useContext(NotificationsContext);

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
      <Button onClick={()=> showNotification({body: "hello"})}>Show notification</Button>
    </div>
  );
}

export default App;
