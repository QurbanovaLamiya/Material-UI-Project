import { Box, Stack } from "@mui/material";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
