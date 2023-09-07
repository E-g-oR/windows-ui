import { useState } from "react";

import { clsx } from "@utils/etc";
import { appClassName } from "@styles/main.css";
import { darkScheme } from "@styles/colorSchemes.css";
import { Checkbox } from "@components/Checkbox/Checkbox";

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={clsx(appClassName, darkScheme)}>

      <Checkbox checked={isDark} onChange={setIsDark} label={"Dark theme"} />
    </div>
  );
}

export default App;
