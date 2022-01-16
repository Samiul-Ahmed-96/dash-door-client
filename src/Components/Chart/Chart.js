import { Box, Grid } from "@mui/material";
import React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,

        },
        {
          name: 'Feb',
          "Active User": 2500,

        },
        {
          name: 'Mar',
          "Active User": 4500,
          uv: 2400,

        },
        {
          name: 'Apr',
          "Active User": 1500,
          uv: 2400,

        },
        {
          name: 'May',
          "Active User": 5600,

        },
        
        {
          name: 'Jun',
          "Active User": 6600,

        },
        {
          name: 'Jul',
          "Active User": 7610,

        },
        {
          name: 'Aug',
          "Active User": 4650,

        },
        {
          name: 'Sep',
          "Active User": 7650,

        },
        {
          name: 'Oct',
          "Active User": 7250,

        },
        {
          name: 'Nov',
          "Active User": 8250,

        },
        {
          name: 'Dec',
          "Active User": 9250,

        },
        
        
      ];
  return (
    <Grid spacing={2} container padding={3}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box className="component-title">
            <h2>User Analytics</h2>
        </Box>
        <ResponsiveContainer sx={{width:"100%" , padding : "10px"}} aspect={4/1}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke='#303e67'/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Active User" stroke="#303e67" activeDot={{ r: 12 }} />
          </LineChart>
      </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default Chart;
