import React from "react";
import { Grid, Box, LinearProgress } from "@mui/material";
const Header = ({ title, progressValue }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box sx={{}}>
        <h2
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: "2.5rem",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h2>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          sx={{ width: "10%" }}
        />
      </Box>
    </Grid>
  );
};

export default Header;
