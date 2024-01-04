import { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import Header from "../../components/layouts/Header";
import PortfolioCard from "../../components/Card/PortfolioCard";

const Portfolio = () => {
  const [page, setPage] = useState(1);

  // define a function to handle page changes
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // create an array of cards to display on the current page
  const cards = [
    {
      id: 1,
      title: "Logrhythm Axon",
      description:
        "LogRhythm Axon is a cloud-native SaaS platform developer to help security teams more effectively mitigate cyber threats within their organization.",
      imageUrl: "images/logrhythm.png",
      link: null,
    },
    {
      id: 2,
      title: "Know Honesty",
      description:
        "Fullstack Certified EOS implementation software that helps oragnizations collect data on employee morale.",
      imageUrl: "images/knowhonesty.png",
      link: null,
    },
    {
      id: 3,
      title: "Mistore(Inprogress)",
      description:
        "An ecommerce website built with the MERN (MongoDB, Express, React, Node.js) stack, allowing users to browse products, add items to cart, and complete transactions securely.",
      imageUrl: "images/store.png",
      link: "https://mistrains.shop/",
    },

    {
      id: 4,
      title: "Coming soon..",
      description: "Inprogress",
      imageUrl: "https://via.placeholder.com/150",
      link: null,
    },
  ];

  // calculate the index of the first card to display on the current page
  const startIndex = (page - 1) * 3;

  // slice the array of cards to display only the cards for the current page
  const visibleCards = cards.slice(startIndex, startIndex + 3);
  return (
    <Grid container>
      <Header title={"PORTFOLIOS"} progressValue={50} />
      <Grid
        container
        spacing={3}
        mt={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {visibleCards.map((card) => (
          <PortfolioCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </Grid>
      <Grid item>
        <Pagination
          count={Math.ceil(cards.length / 3)}
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

export default Portfolio;
