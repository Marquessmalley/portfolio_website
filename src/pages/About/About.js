import React from "react";
import { Grid } from "@mui/material";
import Header from "../../components/layouts/Header";
import ServiceCard from "../../components/Card/ServiceCard";
import ReviewsSlideShow from "../../components/SlideShow/ReviewsSlideShow";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
const About = () => {
  const serviceInfo = [
    {
      id: 0,
      title: "Web Design",
      desc: "The process of creating and designing the visual appearance and layout of websites. ",
      icon: <BrushIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
    },
    {
      id: 1,
      title: "Web Developement",
      desc: "The process of building, creating, and maintaining websites and web applications.",
      icon: <CodeIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
    },
    // {
    //   id: 2,
    //   title: "Mobile Application",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    //   icon: <PhoneIphoneIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />,
    // },
  ];

  return (
    <>
      <Grid container sx={{}}>
        {/* ABOUT ME */}
        <Header title={"ABOUT ME"} progressValue={50} />

        <Grid
          container
          sx={{
            display: "flex",
            color: "#a4acc4",
          }}
          mt={12}
        >
          <Grid
            xs={12}
            sm={12}
            item
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/avatar-1.svg"
              alt="avatar"
              height={250}
              width={250}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3 style={{ fontWeight: 600, fontSize: "1.85rem" }}>
              I am
              <span style={{ color: "rgb(0,127,252)" }}> Marques Smalley</span>
            </h3>
            <p style={{ fontSize: "18px", fontWeight: 300 }}>
              I am a full stack developer (MERN Stack) with a focus on frontend
              development, which I am responsible for creating and implementing
              the user interface and user experience of web applications
            </p>
            <p>
              <b>Full Name</b>: Marques James Smalley
            </p>
            <p>
              <b>Age</b>: 25 Years
            </p>
            <p>
              <b>Language</b>: English
            </p>
            <p>
              <b>Location</b>: Grand Rapids,MI
            </p>
          </Grid>
        </Grid>

        {/* SERVICES */}
        <Header title={"SERVICES"} progressValue={50} />
        <Grid container mt={12}>
          <Grid
            item
            mt={5}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {serviceInfo.map((info) => (
              <ServiceCard
                id={info.id}
                title={info.title}
                desc={info.desc}
                icon={info.icon}
              />
            ))}
          </Grid>
        </Grid>

        {/* REVIEWS */}
        <Header title={"REVIEWS"} progressValue={50} />
        <Grid container mt={12}>
          <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
            <ReviewsSlideShow />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
