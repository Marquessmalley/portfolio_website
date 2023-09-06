import React from "react";
import { Grid, Box, LinearProgress } from "@mui/material";
import Header from "../../components/layouts/Header";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

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
      skill: "Material-UI",
      grade: 80,
    },
    {
      id: 3,
      skill: "Git",
      grade: 85,
    },
    {
      id: 4,
      skill: "Github",
      grade: 85,
    },
    {
      id: 5,
      skill: "AWS(Amplify, S3, EC2, Lambda etc..)",
      grade: 75,
    },
  ];

  const workHistory = [
    {
      id: 0,
      year: "Jan 2023 - Present",
      position: "Freelance",
      company: "Self",
      description:
        "Design and develop websites and web applications for clients, using various programming languages and frameworks.",
    },
    {
      id: 1,
      year: "Jan 2022-2023",
      position: "Full Stack Software Developer",
      company: "Creative Mines",
      description: [
        "Collaborated with cross-functional teams in fast-paced Agile environment to develop and deliver multiple projects.",
        "Translated business requirements into technical solutions, working closely with clients to ensure their needs were met effectively.",
        "Participated in daily stand-up meetings, engaged in pair programming sessions, collaborated with fellow developers to improve quality code.",
      ],
    },
  ];

  const education = [
    {
      id: 0,
      school: "Ottawa Hills Highschool",
      year: "2012-2016",
      accoladeOne: "National Honor Society (Sept 2014 - June 2016)",
      accoladeTwo: "Academic Hall of Fame (Sept 2015 - June 2016)",
    },
    {
      id: 1,
      school: "Western Michigan University",
      year: "2016-2020",
      major: "Computer Information Systems",
      degree: "Bachelors of Business Administration ",
    },
  ];

  return (
    <Grid container>
      <Header title={"MY SKILLS"} progressValue={50} />

      {/* LEFT COLUMN */}
      <Grid item xs={12} sm={12} md={6} lg={6} sx={{ marginTop: "35px" }}>
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
      <Grid item xs={12} sm={12} md={6} lg={6} sx={{ marginTop: "35px" }}>
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

      {/* RESUME SECTION */}

      <Header title={"RESUME"} progressValue={50} />

      <Grid>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BusinessCenterOutlinedIcon
            sx={{ color: "#a4acc4", fontSize: "2rem", mr: 2 }}
          />
          <p style={{ color: "#fff", fontSize: "27px", fontWeight: 600 }}>
            Working Experience
          </p>
        </Box>
      </Grid>

      {workHistory.map((work) => (
        <Grid
          lg={12}
          item
          sx={{
            marginTop: "35px",
            display: "flex",
          }}
        >
          <Grid xs={3} sm={3} md={3} lg={3} item>
            <Box>
              <p style={{ color: "#a4acc4", fontSize: "18px" }}>{work.year}</p>
            </Box>
          </Grid>

          <Grid xs={8} sm={9} md={8}>
            <h2 style={{ color: "#037fff", fontWeight: 700 }}>
              {work.position}
            </h2>
            <p style={{ color: "#fff", fontSize: "18px" }}>{work.company}</p>
            <p
              style={{ color: "#a4acc4", fontSize: "18px", lineHeight: "30px" }}
            >
              {typeof work.description === "string" && work.description}
              {typeof work.description === "object" &&
                work.description.map((history) => {
                  return (
                    <>
                      - {history}
                      <br />
                    </>
                  );
                })}
            </p>
          </Grid>
        </Grid>
      ))}

      <Grid>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LibraryBooksOutlinedIcon
            sx={{ color: "#a4acc4", fontSize: "2rem", mr: 2 }}
          />
          <p style={{ color: "#fff", fontSize: "27px", fontWeight: 600 }}>
            Education Qualifications
          </p>
        </Box>
      </Grid>

      {education.map((education) => (
        <Grid
          lg={12}
          item
          sx={{
            marginTop: "35px",
            display: "flex",
          }}
        >
          <Grid xs={3} sm={3} md={3} lg={3} item>
            <Box>
              <p style={{ color: "#a4acc4", fontSize: "18px" }}>
                {education.year}
              </p>
            </Box>
          </Grid>

          <Grid xs={8} sm={9} md={8}>
            <h2 style={{ color: "#037fff", fontWeight: 700 }}>
              {education.school}
            </h2>
            <p style={{ color: "#fff", fontSize: "18px" }}>
              {education.accoladeOne || education.major}
            </p>
            <p
              style={{ color: "#a4acc4", fontSize: "18px", lineHeight: "30px" }}
            >
              {education.accoladeTwo || education.degree}
            </p>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Resume;
