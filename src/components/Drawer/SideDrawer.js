import { Box, Drawer, Avatar, Divider } from "@mui/material";
const SideDrawer = () => {
  const drawerWidth = 240;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
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
          <Divider sx={{ border: ".7px solid grey", width: "100%" }} />
          <ul style={{ listStyle: "none", padding: "2rem" }}>
            <li
              style={{
                color: "#a4acc4",
                fontSize: "1.5rem",
                fontWeight: 300,
                padding: "7px 0",
              }}
            >
              Home
            </li>
            <li
              style={{
                color: "#a4acc4",
                fontSize: "1.5rem",
                fontWeight: 300,
                padding: "5px 0",
              }}
            >
              About
            </li>
            <li
              style={{
                color: "#a4acc4",
                fontSize: "1.5rem",
                fontWeight: 300,
                padding: "5px 0",
              }}
            >
              Resume
            </li>
            <li
              style={{
                color: "#a4acc4",
                fontSize: "1.5rem",
                fontWeight: 300,
                padding: "5px 0",
              }}
            >
              Portfolio
            </li>
            <li
              style={{
                color: "#a4acc4",
                fontSize: "1.5rem",
                fontWeight: 300,
                padding: "5px 0",
              }}
            >
              Blogs
            </li>
            <li
              style={{
                color: "#a4acc4",
                fontSize: "1.5rem",
                fontWeight: 300,
                padding: "5px 0",
              }}
            >
              Contact
            </li>
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

export default SideDrawer;
