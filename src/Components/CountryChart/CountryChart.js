import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const CountryChart = () => {
  const data = [
    { name: "USA", overAllSales: 20000 },
    { name: "Canada", overAllSales: 40000 },
    { name: "India", overAllSales: 35000 },
    { name: "Bd", overAllSales: 44000 },
    { name: "UK", overAllSales: 50000 },
  ];
  return (
    <Grid id="salesReport" spacing={2} container padding={3} marginTop={6}>
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>By Country</h2>
        </Box>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />

            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="overAllSales"
              fill="#303e67"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default CountryChart;
