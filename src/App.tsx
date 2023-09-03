import { appClassName } from "@styles/main.css";
import { Typography } from "@components/Typography/Typography";
import { lightScheme } from "@styles/colorSchemes.css";
import { clsx } from "@utils/etc";

function App() {

  return (
    <div className={clsx(appClassName, lightScheme)}>
      <Typography>
        hello from typography
      </Typography>
    </div>
  );
}

export default App;
