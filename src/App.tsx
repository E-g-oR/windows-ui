import { appClassName } from "@styles/main.css";
import { Typography } from "@components/Typography/Typography";
import { darkScheme } from "@styles/colorSchemes.css";
import { clsx } from "@utils/etc";
import { Button } from "./components/Button/Button";
import { Select } from "./components/Select/Select";

function App() {
  return (
    <div className={clsx(appClassName, darkScheme)}>
      <Typography>
        hello from typography
      </Typography>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Button>click me</Button>
      <Select items={["hello", "good bye", "welcome", "see you", "im tired"]} render={item=>item} value={"hello"} />
    </div>
  );
}

export default App;
