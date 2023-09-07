
import { useState } from "react";

import { clsx } from "@utils/etc";
import { appClassName } from "@styles/main.css";
import { darkScheme } from "@styles/colorSchemes.css";
import { Typography } from "@components/Typography/Typography";
import { Button } from "@components/Button/Button";
import { Select } from "@components/Select/Select";

const items =["hello", "good bye", "welcome", "see you", "im tired"]

function App() {
  const [value, setValue] = useState(items[0])
  return (
    <div className={clsx(appClassName, darkScheme)}>
      <Typography>hello from typography</Typography>
      <Button variant="clean">click me</Button>

      <Select
        items={items}
        render={(item) => item}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default App;
