import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Grid } from "@mui/material";
const ReviewsSlideShow = () => {
  const slides = [
    {
      id: 0,
      name: "Marques Smalley",
      title: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      id: 1,
      name: "John Doe",
      title: "CEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      id: 2,
      name: "Alex Davis",
      title: "Ux designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ];
  return (
    <Slider autoplay={1} infinite={true}>
      {slides.map((slide, id, index) => (
        <Grid
          key={id}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid
            md={8}
            lg={5}
            sx={{
              textAlign: "center",
            }}
            mt={8}
          >
            <div
              key={index}
              style={{
                background: "rgb(25,29,43)",
                padding: "2rem",
                borderRadius: ".5rem",
                borderLeft: "8px solid grey",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: "#a4acc4" }}>
                {slide.description}
              </p>
            </div>
            <div style={{ textAlign: "left" }}>
              <h2 style={{ fontSize: "22px", color: "white" }}>{slide.name}</h2>
              <p style={{ fontSize: "18px", color: "#a4acc4" }}>
                {slide.title}
              </p>
            </div>
          </Grid>
        </Grid>
      ))}
    </Slider>
  );
};

export default ReviewsSlideShow;
