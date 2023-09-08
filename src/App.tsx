import { useState } from "react";

import { clsx } from "@utils/etc";
import { appClassName } from "@styles/main.css";
import { darkScheme } from "@styles/colorSchemes.css";
import { Checkbox } from "@components/Checkbox/Checkbox";
import { Radio, RadioGroup } from "./components/Radio/Radio";

const items = [
  {
  title: "US", 
  value: "US"
},
  {
  title: "United kingdom", 
  value: "United kingdom"
},
  {
  title: "Russian Federation", 
  value: "Russian Federation"
},
  {
  title: "Poland", 
  value: "Poland"
},
  {
  title: "Belarus", 
  value: "Belarus"
},

]

function App() {
  const [isDark, setIsDark] = useState(false);
  const [value, setValue] = useState(items[0])
  return (
    <div className={clsx(appClassName, darkScheme)}>
      <Checkbox checked={isDark} onChange={setIsDark} label={"Dark theme"} />
      <RadioGroup name="country" value={value} onChange={setValue} items={items} />
    </div>
  );
}

export default App;
