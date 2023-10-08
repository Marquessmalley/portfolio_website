import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Avatar, Box, Typography, IconButton } from "@mui/material";
import Header from "../../components/layouts/Header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState();

  useEffect(() => {
    const apiUrl = `https://public-api.wordpress.com/rest/v1.1/sites/lionnoodleselektra704539.wordpress.com/posts/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [id]);

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

  const formattedDate = formatDate(post?.date);

  const handleBackClick = () => {
    navigate("/portfolio_website/blogs");
  };

  return (
    <Grid container>
      <Header title={"BLOG"} progressValue={50} />
      <Grid item m={3}>
        <IconButton aria-label="Back" onClick={handleBackClick}>
          <ArrowBackIosIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }} m={3}>
        {/* Display the image */}
        {post && (
          <img
            src={post.featured_image}
            alt="Post"
            style={{ width: "60%", height: "auto" }}
          />
        )}
      </Grid>
      <Grid item md={12} lg={12} sx={{ textAlign: "center" }}>
        <h1 style={{ color: "#fff" }}>{post && post.title}</h1>
      </Grid>
      <Grid
        item
        lg={7}
        sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        {post && (
          <Avatar
            alt="Post Image"
            src={post.author.avatar_URL}
            sx={{ background: "red" }}
          />
        )}
        <Box sx={{ marginLeft: "1rem" }}>
          {post && (
            <>
              <Typography
                sx={{ color: "#fff" }}
              >{`${post.author.first_name} ${post.author.last_name}`}</Typography>
              <Typography sx={{ color: "#fff" }}>{formattedDate}</Typography>
            </>
          )}
        </Box>
      </Grid>

      {post && (
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item lg={8}>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: "#fff",
                lineHeight: "1.5rem",
              }}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Blog;
