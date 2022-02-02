import { GradeRounded, StarBorderRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./HomeFeedback.scss";

const HomeFeedback = () => {
  const [homeUserFeedback, setHomeUserFeedback] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((res) => res.json())
      .then((data) => setHomeUserFeedback(data));
  }, []);
  return (
    <section className="home-feedback">
      <Box sx={{ marginLeft: "20px" }} className="component-title">
        <h2>Top Feedback</h2>
      </Box>
      <Grid container>
        {homeUserFeedback.slice(0, 8).map((singleFeedback) => (
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="home-single-feedback">
              <h1>{singleFeedback.name}</h1>
              <h3>
                {singleFeedback.massage.slice(0, 20)}...
                <Link to="/userFeedback">See More</Link>
              </h3>
              <Rating
                emptySymbol={<StarBorderRounded />}
                fullSymbol={<GradeRounded />}
                initialRating={singleFeedback.rating}
                readonly
              ></Rating>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default HomeFeedback;
