import { appClassName } from "@styles/main.css";
import { Typography } from "@components/Typography/Typography";
import { darkScheme } from "@styles/colorSchemes.css";
import { clsx } from "@utils/etc";
import { Button } from "./components/Button/Button";

function App() {

  return (
    <div className={clsx(appClassName, darkScheme)}>
      <Typography>
        hello from typography
      </Typography>
      <Button color="secondary">click me</Button>
      <Button size="sm" color="secondary">click me</Button>
      <Button size="xl" color="secondary">click me</Button>
    </div>
  );
}

export default App;
