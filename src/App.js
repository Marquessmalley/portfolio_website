import { useState } from "react";
import { Box, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route, useLocation } from "react-router-dom";
import SideDrawer from "./components/Drawer/SideDrawer";
import SideNav from "./components/Drawer/SideNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";

function App() {
  const drawerWidth = 240;
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [homeActive, setHomeActive] = useState(location.pathname === "/");
  const [aboutActive, setAboutActive] = useState(
    location.pathname === "/about"
  );
  const [resumeActive, setResumeActive] = useState(
    location.pathname === "/resume"
  );
  const [portfolioActive, setPortfolioActive] = useState(
    location.pathname === "/portfolio"
  );
  const [blogsActive, setBlogsActive] = useState(
    location.pathname === "/blogs"
  );
  const [contactActive, setContactActive] = useState(
    location.pathname === "/contact"
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
          <MenuIcon sx={{ color: "#fff" }} onClick={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SideDrawer
          homeActive={homeActive}
          aboutActive={aboutActive}
          resumeActive={resumeActive}
          portfolioActive={portfolioActive}
          blogsActive={blogsActive}
          contactActive={contactActive}
          setHomeActive={setHomeActive}
          setAboutActive={setAboutActive}
          setResumeActive={setResumeActive}
          setPortfolioActive={setPortfolioActive}
          setBlogsActive={setBlogsActive}
          setContactActive={setContactActive}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <SideNav
          homeActive={homeActive}
          aboutActive={aboutActive}
          resumeActive={resumeActive}
          portfolioActive={portfolioActive}
          blogsActive={blogsActive}
          contactActive={contactActive}
          setHomeActive={setHomeActive}
          setAboutActive={setAboutActive}
          setResumeActive={setResumeActive}
          setPortfolioActive={setPortfolioActive}
          setBlogsActive={setBlogsActive}
          setContactActive={setContactActive}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>

      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          mt: 6,
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Routes>
          <Route path="/portfolio_website/" element={<Home />} />
          <Route path="/portfolio_website/about" element={<About />} />
          <Route path="/portfolio_website/resume" element={<Resume />} />
          <Route path="/portfolio_website/portfolio" element={<Portfolio />} />
          <Route path="/portfolio_website/blogs" element={<Blogs />} />
          <Route path="/portfolio_website/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
