import { Box, Grid } from '@mui/material';
import React from 'react';
import {
    Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from 'recharts';
  

const ChannelChart = () => {
    const data = [
        {
          name: 'Organic',
          visitor: 2200,
        },
        {
          name: 'Search',
          visitor: 5200,
        },
        {
          name: 'Tv Ads',
          visitor: 3200,
        },
        {
          name: 'Social',
          visitor: 4200,
        },
        {
          name: 'Video',
          visitor:5000,
        },
      ];
    return (


        <Grid id="salesReport" spacing={2} container padding={3} marginTop={6} >
     <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}> 
        <Box className="component-title">
          <h2>By Channel</h2>
        </Box>
        <ResponsiveContainer width="100%" height="80%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />

          <Bar dataKey="visitor" barSize={20} fill="#82ca9d" />

        </ComposedChart>
      </ResponsiveContainer>
      </Grid>

    </Grid>
       
    );
};

export default ChannelChart;