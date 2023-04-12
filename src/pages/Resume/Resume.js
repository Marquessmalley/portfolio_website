import React from "react";
import { Grid, Box, LinearProgress } from "@mui/material";
const Resume = () => {
  const appSkills = [
    { id: 0, skill: "HTML5", grade: 95 },
    { id: 1, skill: "CSS3", grade: 80 },
    { id: 2, skill: "Javascript", grade: 80 },
    { id: 3, skill: "Typescript", grade: 70 },
    { id: 4, skill: "MongoDB", grade: 70 },
  ];

  const frameworksTools = [
    {
      id: 0,
      skill: "React",
      grade: 90,
    },
    {
      id: 1,
      skill: "Node.js",
      grade: 75,
    },
    {
      id: 2,
      skill: "Git",
      grade: 85,
    },
    {
      id: 3,
      skill: "Github",
      grade: 85,
    },
    {
      id: 4,
      skill: "API",
      grade: 85,
    },
    {
      id: 5,
      skill: "AWS Ampify",
      grade: 75,
    },
  ];
  return (
    <Grid container>
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
            MY SKILLS
          </h2>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{ width: "10%" }}
          />
        </Box>
      </Grid>

      {/* LEFT COLUMN */}
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginTop: "35px" }}>
        <h3 style={{ color: "#fff", marginBottom: "50px", fontSize: "1.25" }}>
          Application Developement:
        </h3>
        {appSkills.map((skill) => (
          <Box>
            <p
              style={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {skill.skill}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#a4acc4",
                  lineHeight: 0,
                }}
              >
                {skill.grade}%
              </p>
              <LinearProgress
                variant="determinate"
                value={skill.grade}
                sx={{ width: "70%", marginLeft: "15px", padding: ".2rem" }}
              />
            </div>
          </Box>
        ))}
      </Grid>

      {/* RIGHT COLUMN */}
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginTop: "35px" }}>
        <h3 style={{ color: "#fff", marginBottom: "50px", fontSize: "1.25" }}>
          Frameworks & Tools:
        </h3>
        {frameworksTools.map((skill) => (
          <Box>
            <p
              style={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {skill.skill}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#a4acc4",
                  lineHeight: 0,
                }}
              >
                {skill.grade}%
              </p>
              <LinearProgress
                variant="determinate"
                value={skill.grade}
                sx={{ width: "70%", marginLeft: "15px", padding: ".2rem" }}
              />
            </div>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Resume;
