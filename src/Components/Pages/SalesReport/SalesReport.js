import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis
} from 'recharts';
  

const SalesReport = () => {
    const data = [
        {
          name: "Jan",
          "revenue": 7000,
          "netProfit" : 2500,
        },
        {
          name: "Feb",
          "revenue": 10000,
          "netProfit" : 5000,
        },
        {
          name: "Mar",
          "revenue": 11000,
          "netProfit" : 7500,
        },
        {
          name: "Apr",
          "revenue": 14000,
          "netProfit" : 6800,
        },
        {
          name: "May",
          "revenue": 14400,
          "netProfit" : 12400,
        },
    
        {
          name: "Jun",
          "revenue": 16000,
          "netProfit" : 3500,
        },
        {
          name: "Jul",
          "revenue": 12000,
          "netProfit" : 6500,
        },
        {
          name: "Aug",
          "revenue": 20000,
          "netProfit" : 7500,
        },
        {
          name: "Sep",
          "revenue": 14050,
          "netProfit" : 9500,
        },
        {
          name: "Oct",
          "revenue": 19000,
          "netProfit" : 12500,
        },
        {
          name: "Nov",
          "revenue": 20000,
          "netProfit" : 15000,
        },
        {
          name: "Dec",
          "revenue": 22000,
          "netProfit" : 10500,
        },
      ];
    return (
    <Grid id="salesReport" spacing={2} container padding={3} marginTop={6} >
     <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}> 
        <Box className="component-title">
          <h2>Sales Report</h2>
        </Box>
        <ResponsiveContainer width="100%" height="90%">
        <ComposedChart
          width={600}
          height={400}
          data={data}
          
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />

          <Tooltip />

          <Bar dataKey="revenue" barSize={20} fill="#303e67" />
          <Line type="monotone" dataKey="netProfit" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </Grid>

    </Grid>
    );
};

export default SalesReport;