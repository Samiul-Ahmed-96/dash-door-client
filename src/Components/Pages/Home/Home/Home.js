import { Grid } from "@mui/material";
import React from "react";
import ChannelChart from "../../../ChannerlChart/ChannelChart";
import Chart from "../../../Chart/Chart";
import CountryChart from "../../../CountryChart/CountryChart";
import DeviceChart from "../../../DeviceChart/DeviceChart";
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";

const Home = () => {
  return (
    <Grid  container padding={3}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <FeaturedInfo />
      </Grid>
      <Grid container paddinX={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <ChannelChart />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <CountryChart />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <DeviceChart />
        </Grid>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Chart />
      </Grid>
    </Grid>
  );
};

export default Home;
