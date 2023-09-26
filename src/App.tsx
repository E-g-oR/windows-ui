import { useContext, useState } from "react";

import { Toggle } from "@components/Toggle/Toggle";
import { NotificationsContext } from "./components/Notifications/Notifications";
import { Button } from "./components/Button/Button";
import { CircularProgress, LinearProgress } from "./components/Progress/Progress";

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
      <CircularProgress max={100} value={50} />
      <LinearProgress max={50} value={30}/>
      <Button 
      onClick={()=> showNotification({body: "hello"})}
      >Show notification</Button>
    </div>
  );
}

export default App;
