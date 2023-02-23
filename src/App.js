import { Box, Stack } from "@mui/material";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <Box>
      {/* Navbar */}
      <Stack>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
