import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const PortfolioCard = ({ title, description, imageUrl, link }) => {
  return (
    <Grid xs={7} sm={6} md={4} lg={3} item>
      <Card>
        <CardHeader title={title} />
        {link !== null ? (
          <a href={link}>
            <CardMedia component="img" image={imageUrl} />
          </a>
        ) : (
          <>
            <CardMedia component="img" image={imageUrl} />
          </>
        )}

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PortfolioCard;
