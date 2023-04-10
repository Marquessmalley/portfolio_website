import { Box, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route } from "react-router-dom";
import SideDrawer from "./components/Drawer/SideDrawer";
import Home from "./pages/Home/Home";
function App() {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          background: "rgb(15,18,26)",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          <MenuIcon sx={{ color: "#fff" }} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideDrawer />
      </Box>

      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          mt: 2,
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
