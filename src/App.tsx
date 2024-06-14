import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Login from "./pages/Login";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#554400",
      },
      secondary: {
        main: "#224545",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
