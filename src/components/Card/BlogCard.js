import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const BlogCard = ({ title, author, date, content, image }) => {
  const formatDate = (isoDate) => {
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    const date = new Date(isoDate);
    return date.toLocaleString("en-US", options);
  };

  const formattedDate = formatDate(date);

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={`By ${author.first_name} ${author.last_name} on ${formattedDate}`}
      />
      <CardMedia component="img" alt={title} height="200" image={image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
