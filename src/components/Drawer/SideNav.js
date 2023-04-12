import { Box, Drawer, Avatar, Divider } from "@mui/material";
import { Link } from "react-router-dom";
const SideNav = ({
  homeActive,
  aboutActive,
  resumeActive,
  portfolioActive,
  blogsActive,
  contactActive,
  setHomeActive,
  setAboutActive,
  setResumeActive,
  setPortfolioActive,
  setBlogsActive,
  setContactActive,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const drawerWidth = 240;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          // display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "rgb(25,29,43)",
          },
        }}
        open
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "35vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 7,
            }}
          >
            <Avatar sx={{ width: 125, height: 125 }}>Ms</Avatar>
          </Box>

          <Divider sx={{ border: ".1px solid grey", width: "100%" }} />
          <ul
            style={{
              listStyle: "none",
              padding: "1rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            {/* HOME LINK */}
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
              exact="true"
              onClick={() => {
                setHomeActive(true);
                setAboutActive(false);
                setResumeActive(false);
                setPortfolioActive(false);
                setBlogsActive(false);
                setContactActive(false);
              }}
            >
              <Box
                sx={
                  homeActive
                    ? {
                        background: "rgb(0,127,252)",
                      }
                    : {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          width: 0,
                          height: "45px",
                          bottom: 0,
                          left: 0,
                          background: "rgb(26, 49, 84, 0.5)",
                          transition: "width 0.3s ease-in-out",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          width: "100%",
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                        },

                        background: "",
                        padding: 1,
                        position: "relative",
                      }
                }
              >
                <li
                  style={
                    homeActive
                      ? {
                          background: "rgb(0,127,252)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                          color: "#fff",
                        }
                      : {
                          color: "#a4acc4",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                        }
                  }
                >
                  Home
                </li>
              </Box>
            </Link>

            {/* ABOUT LINK */}
            <Link
              style={{ textDecoration: "none" }}
              to="/about"
              exact="true"
              onClick={() => {
                setHomeActive(false);
                setAboutActive(true);
                setResumeActive(false);
                setPortfolioActive(false);
                setBlogsActive(false);
                setContactActive(false);
              }}
            >
              <Box
                sx={
                  aboutActive
                    ? {
                        background: "rgb(0,127,252)",
                      }
                    : {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          width: 0,
                          height: "45px",
                          bottom: 0,
                          left: 0,
                          background: "rgb(26, 49, 84, 0.5)",
                          transition: "width 0.3s ease-in-out",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          width: "100%",
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                        },
                        background: "",
                        padding: 1,
                        position: "relative",
                      }
                }
              >
                <li
                  style={
                    aboutActive
                      ? {
                          background: "rgb(0,127,252)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                          color: "#fff",
                        }
                      : {
                          color: "#a4acc4",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "5px 0",
                        }
                  }
                >
                  About
                </li>
              </Box>
            </Link>

            {/* RESUME LINK */}
            <Link
              style={{ textDecoration: "none" }}
              to="/resume"
              exact="true"
              onClick={() => {
                setHomeActive(false);
                setAboutActive(false);
                setResumeActive(true);
                setPortfolioActive(false);
                setBlogsActive(false);
                setContactActive(false);
              }}
            >
              <Box
                sx={
                  resumeActive
                    ? {
                        background: "rgb(0,127,252)",
                      }
                    : {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          width: 0,
                          height: "45px",
                          bottom: 0,
                          left: 0,
                          background: "rgb(26, 49, 84, 0.5)",
                          transition: "width 0.3s ease-in-out",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          width: "100%",
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                        },
                        background: "",
                        padding: 1,
                        position: "relative",
                      }
                }
              >
                <li
                  style={
                    resumeActive
                      ? {
                          background: "rgb(0,127,252)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                          color: "#fff",
                        }
                      : {
                          color: "#a4acc4",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "5px 0",
                        }
                  }
                >
                  Resume
                </li>
              </Box>
            </Link>

            {/* PORTFOLIO LINK */}
            <Link
              style={{ textDecoration: "none" }}
              to="/portfolio"
              exact="true"
              onClick={() => {
                setHomeActive(false);
                setAboutActive(false);
                setResumeActive(false);
                setPortfolioActive(true);
                setBlogsActive(false);
                setContactActive(false);
              }}
            >
              <Box
                sx={
                  portfolioActive
                    ? {
                        background: "rgb(0,127,252)",
                      }
                    : {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          width: 0,
                          height: "45px",
                          bottom: 0,
                          left: 0,
                          background: "rgb(26, 49, 84, 0.5)",
                          transition: "width 0.3s ease-in-out",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          width: "100%",
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                        },
                        background: "",
                        padding: 1,
                        position: "relative",
                      }
                }
              >
                <li
                  style={
                    portfolioActive
                      ? {
                          background: "rgb(0,127,252)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                          color: "#fff",
                        }
                      : {
                          color: "#a4acc4",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "5px 0",
                        }
                  }
                >
                  Portfolio
                </li>
              </Box>
            </Link>

            {/* BLOGS LINK */}
            <Link
              style={{ textDecoration: "none" }}
              to="/blogs"
              exact="true"
              onClick={() => {
                setHomeActive(false);
                setAboutActive(false);
                setResumeActive(false);
                setPortfolioActive(false);
                setBlogsActive(true);
                setContactActive(false);
              }}
            >
              <Box
                sx={
                  blogsActive
                    ? {
                        background: "rgb(0,127,252)",
                      }
                    : {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          width: 0,
                          height: "45px",
                          bottom: 0,
                          left: 0,
                          background: "rgb(26, 49, 84, 0.5)",
                          transition: "width 0.3s ease-in-out",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          width: "100%",
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                        },
                        background: "",
                        padding: 1,
                        position: "relative",
                      }
                }
              >
                <li
                  style={
                    blogsActive
                      ? {
                          background: "rgb(0,127,252)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                          color: "#fff",
                        }
                      : {
                          color: "#a4acc4",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "5px 0",
                        }
                  }
                >
                  Blogs
                </li>
              </Box>
            </Link>

            {/* CONTACT LINK */}
            <Link
              style={{ textDecoration: "none" }}
              to="/contact"
              exact="true"
              onClick={() => {
                setHomeActive(false);
                setAboutActive(false);
                setResumeActive(false);
                setPortfolioActive(false);
                setBlogsActive(false);
                setContactActive(true);
              }}
            >
              <Box
                sx={
                  contactActive
                    ? {
                        background: "rgb(0,127,252)",
                      }
                    : {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          width: 0,
                          height: "45px",
                          bottom: 0,
                          left: 0,
                          background: "rgb(26, 49, 84, 0.5)",
                          transition: "width 0.3s ease-in-out",
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                        },
                        "&:hover::before": {
                          width: "100%",
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                        },
                        background: "",
                        padding: 1,
                        position: "relative",
                      }
                }
              >
                <li
                  style={
                    contactActive
                      ? {
                          background: "rgb(0,127,252)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "7px 0",
                          color: "#fff",
                        }
                      : {
                          color: "#a4acc4",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          padding: "5px 0",
                        }
                  }
                >
                  Contact
                </li>
              </Box>
            </Link>
          </ul>
          <Divider sx={{ border: ".7px solid grey", width: "100%" }} />
          <Box>
            <p style={{ color: "white" }}>© 2023 NuclearThemes</p>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideNav;
