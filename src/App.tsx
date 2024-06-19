import { CssBaseline, ThemeProvider} from "@mui/material";
import Login from "./pages/Login";
import Theme from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
