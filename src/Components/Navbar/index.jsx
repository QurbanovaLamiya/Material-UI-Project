import { AppBar, styled, Toolbar, Box, InputBase, Badge } from "@mui/material";
import { Mail, Notifications, Animation } from "@mui/icons-material";
import AccountMenu from "./Menu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#4db6ac" }}>
      <StyledToolbar>
        <Toolbar
          variant="h6"
          component="h2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Navbar
        </Toolbar>
        <Animation sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <AccountMenu />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
