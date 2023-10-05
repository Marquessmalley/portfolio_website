import { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import Header from "../../components/layouts/Header";
import BlogCard from "../../components/Card/BlogCard";

const Blogs = () => {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);

  // define a function to handle page changes
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const apiUrl =
      "https://public-api.wordpress.com/rest/v1/sites/lionnoodleselektra704539.wordpress.com/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  // calculate the index of the first card to display on the current page
  const startIndex = (page - 1) * 3;

  // slice the array of cards to display only the cards for the current page
  const visibleCards = posts && posts.slice(startIndex, startIndex + 3);

  return (
    <Grid container>
      <Header title={"BLOGS"} progressValue={50} />

      {visibleCards &&
        visibleCards.map((card) => (
          <>
            <Grid
              item
              m={3}
              xs={10}
              sm={8}
              md={5}
              lg={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <BlogCard
                key={card.id}
                title={card.title}
                author={card.author}
                image={card.featured_image}
                content={card.content}
                date={card.date}
              />
            </Grid>
          </>
        ))}
      <Grid item lg={12}>
        <Pagination
          count={Math.ceil(posts && posts.length / 3)}
          page={page}
          onChange={handlePageChange}
          sx={{
            padding: "1rem",
            "& .MuiPaginationItem-root": {
              padding: "1.24rem",
              color: "rgb(0,127,252)",
              "&.Mui-selected": {
                color: "white",
                background: "rgb(0,127,252)",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Blogs;
