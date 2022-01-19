import { Grid } from '@mui/material';
import React from 'react';
import Chart from '../../../Chart/Chart';
import SalesReport from '../../SalesReport/SalesReport';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';

const Home = () => {
    return (
        <Grid spacing={2} container padding={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
        <FeaturedInfo/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} marginTop={9} >
        <Chart/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
        <SalesReport/>
        </Grid>
        </Grid>
    );
};

export default Home;