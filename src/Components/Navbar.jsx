import { AppBar, styled, Toolbar } from "@mui/material";
import AnimationIcon from "@mui/icons-material/Animation";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Toolbar variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Toolbar>
        <AnimationIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
