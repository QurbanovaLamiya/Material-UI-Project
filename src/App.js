import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/Sidebar";
import Add from "./Components/Sidebar/AddButton";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode} />
          <Main />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
