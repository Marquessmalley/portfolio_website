import { Grid, Box, IconButton, Link } from "@mui/material";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import "./styles.css";
const Home = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        md={12}
        sm={12}
      >
        <Grid
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Waddup Doe,
            <span style={{ color: "rgb(0,127,252)" }}>I'm Marques Smalley</span>
          </h1>
          <p
            style={{
              width: "75%",
              textAlign: "justify",
              color: "#a4acc4",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            I am a software developer.I design, develop, and maintain software
            applications, systems, and tools. This involves writing and testing
            code, debugging programs, and ensuring that the software is
            user-friendly, efficient, and meets the requirements of the
            end-users.
          </p>
          <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
            <Link href="https://www.linkedin.com/in/m-smalley2120/">
              <IconButton
                variant="outlined"
                sx={{ "&:hover": { border: "1px solid rgb(0,127,252)" } }}
              >
                <AiOutlineLinkedin
                  class="icon"
                  style={{
                    fontSize: "2rem",
                    color: "#a4acc4",
                    "&:hover": {
                      color: "red !important",
                    },
                  }}
                />
              </IconButton>
            </Link>
            <Link href="https://github.com/Marquessmalley">
              <IconButton
                sx={{ "&:hover": { border: "1px solid rgb(0,127,252)" } }}
              >
                <AiOutlineGithub
                  style={{
                    fontSize: "2rem",
                    color: "#a4acc4",
                    "&:hover": { color: "blue" },
                  }}
                />
              </IconButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
