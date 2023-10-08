import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, author, date, content, image, excerpt }) => {
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
    <Card sx={{ borderRadius: "12px", cursor: "pointer" }}>
      <CardMedia component="img" alt={title} height="150" image={image} />
      <Link
        to={`/portfolio_website/blogs/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardHeader
          title={title}
          subheader={`By ${author.first_name} ${author.last_name} on ${formattedDate}`}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
