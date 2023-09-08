import { useState } from "react";

import { clsx } from "@utils/etc";
import { appClassName } from "@styles/main.css";
import { darkScheme } from "@styles/colorSchemes.css";
import { Toggle } from "@components/Toggle/Toggle";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={clsx(appClassName, darkScheme)}>
      <Toggle 
      checked={isDark} 
      onChange={setIsDark} 
      position="right" 
      label="Toggle"
      textOn="Is on."
      textOff="Is off."
      />
    </div>
  );
}

export default App;
