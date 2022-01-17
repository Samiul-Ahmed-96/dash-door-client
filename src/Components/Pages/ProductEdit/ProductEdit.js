import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./ProductEdit.scss";

const ProductEdit = () => {
  const data = [
    {
      name: "Jan",
      Sales: 300,
    },
    {
      name: "Feb",
      Sales: 600,
    },
    {
      name: "Mar",
      Sales: 700,
    },
    {
      name: "Apr",
      Sales: 900,
    },
    {
      name: "May",
      Sales: 500,
    },

    {
      name: "Jun",
      Sales: 400,
    },
    {
      name: "Jul",
      Sales: 800,
    },
    {
      name: "Aug",
      Sales: 450,
    },
    {
      name: "Sep",
      Sales: 870,
    },
    {
      name: "Oct",
      Sales: 300,
    },
    {
      name: "Nov",
      Sales: 670,
    },
    {
      name: "Dec",
      Sales: 1000,
    },
  ];
  const { id } = useParams();
  //State
  const [singleItem, setSingleItem] = useState({});

  //Data load
  useEffect(() => {
    fetch(`http://localhost:5000/watchItems/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, []);
  return (
    <Grid spacing={2} container padding={3} marginTop={6}>
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>Product Sales</h2>
        </Box>
        <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="Sales" stackId="a" fill="#303e67" />
          <Bar dataKey="name" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>Product Details</h2>
        </Box>
        <Paper elevation={24}>
          <Box className="single-item-info">
            <img src={singleItem.img} alt="" />
            <h3>Model : {singleItem.name}</h3>
            <h4>Brand : {singleItem.brand}</h4>
            <h2>Price : {singleItem.price}</h2>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={9} md={9} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>Edit Product</h2>
        </Box>
        <Paper elevation={24}>
         
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductEdit;
