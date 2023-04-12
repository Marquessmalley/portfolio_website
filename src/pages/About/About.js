import React from "react";
import { Grid, Box, LinearProgress } from "@mui/material";
import ServiceCard from "../../components/Card/ServiceCard";
import ReviewsSlideShow from "../../components/SlideShow/ReviewsSlideShow";
const About = () => {
  const serviceInfo = [
    {
      id: 0,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      id: 1,
      title: "Web Developement",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      id: 2,
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ];

  return (
    <>
      <Grid container sx={{}}>
        {/* ABOUT ME */}
        <Grid xs={12} sm={12} md={12} lg={12}>
          <Box sx={{}}>
            <h2
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: "2.5rem",
                textTransform: "uppercase",
              }}
            >
              About me
            </h2>
            <LinearProgress
              variant="determinate"
              value={50}
              sx={{ width: "15%" }}
            />
          </Box>
        </Grid>

        <Grid mt={12}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              color: "#a4acc4",
            }}
          >
            <Grid xs={12} sm={12} md={12} lg={6}>
              <h1>IMAGE</h1>
            </Grid>

            <Grid lg={6}>
              <h3 style={{ fontWeight: 600, fontSize: "1.85rem" }}>
                I am{" "}
                <span style={{ color: "rgb(0,127,252)" }}>Marques Smalley</span>
              </h3>
              <p style={{ fontSize: "18px", fontWeight: 300 }}>
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more & more
                interactive with web animations.
              </p>
              <p>
                <b>Full Name</b>: Marques James Smalley
              </p>
              <p>
                <b>Age</b>: 24 Years
              </p>
              <p>
                <b>Language</b>: English
              </p>
              <p>
                <b>Location</b>: Grand Rapids,MI
              </p>
            </Grid>
          </Grid>
        </Grid>

        {/* SERVICES */}
        <Grid xs={12} sm={12} md={12} lg={12} mt={12}>
          <Box sx={{}}>
            <h2
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: "2.5rem",
                textTransform: "uppercase",
              }}
            >
              Services
            </h2>
            <LinearProgress
              variant="determinate"
              value={50}
              sx={{ width: "15%" }}
            />
          </Box>
          <Grid
            mt={5}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {serviceInfo.map((info) => (
              <ServiceCard id={info.id} title={info.title} desc={info.desc} />
            ))}
          </Grid>
        </Grid>

        {/* REVIEWS */}
        <Grid xs={12} sm={12} md={12} lg={12} mt={12}>
          <Box sx={{}}>
            <h2
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: "2.5rem",
                textTransform: "uppercase",
              }}
            >
              Reviews
            </h2>
            <LinearProgress
              variant="determinate"
              value={50}
              sx={{ width: "15%" }}
            />
          </Box>
          <Grid mt={5}>
            <ReviewsSlideShow />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
