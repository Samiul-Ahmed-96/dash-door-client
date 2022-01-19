import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Card, Grid, Paper } from '@mui/material';
import React from 'react';
import './FeaturedInfo.scss';

const FeaturedInfo = () => {
    return (
       <Grid id="featuredInfo" spacing={2} container padding={3} marginTop={8}>
       <Grid item lg={4} md={4} sm={12} xs={12}>
           <Paper elevation={24}>
               <Card className="featured-item">
                   <h1>Revenue</h1>
                   <h2>Comapred to last month</h2>
                   <h1>$444,125</h1>
                   <div className="cost">
                   <h4>-3.3</h4>
                   <ArrowDownward/>
                   </div>
               </Card>
           </Paper>
       </Grid>
       <Grid item lg={4} md={4} sm={12} xs={12}>
           <Paper elevation={24}>
               <Card className="featured-item">
                   <h1>Sales</h1>
                   <h2>Comapred to last month</h2>
                   <h1>$223,125</h1>
                   <div className="cost">
                   <h4>-2.5</h4>
                   <ArrowDownward/>
                   </div>
               </Card>
           </Paper>
       </Grid>
       <Grid item lg={4} md={4} sm={12} xs={12}>
           <Paper elevation={24}>
               <Card className="featured-item">
                   <h1>Cost</h1>
                   <h2>Comapred to last month</h2>
                   <h1>$775,335</h1>
                   <div className="cost">
                   <h4>+4.5</h4>
                   <ArrowUpward/>
                   </div>
               </Card>
           </Paper>
       </Grid>
   </Grid>
    );
};

export default FeaturedInfo;