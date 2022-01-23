import { Box, Grid } from "@mui/material";
import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const DeviceChart = () => {
  const data = [
    { name: "Desktop", value: 15000 },
    { name: "Tablet", value: 45000 },
    { name: "Mobile", value: 60000 },
  ];
  return (
    <Grid id="salesReport" spacing={2} container padding={3} marginTop={6}>
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>By Device</h2>
        </Box>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#6e47fb" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Grid>
    </Grid>
  );
};

export default DeviceChart;
