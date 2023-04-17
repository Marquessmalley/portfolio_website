import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const PortfolioCard = ({ title, description, imageUrl }) => {
  return (
    <Grid lg={3} item>
      <Card>
        <CardHeader title={title} />
        <CardMedia component="img" image={imageUrl} />
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
