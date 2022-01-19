import { Alert, Box, Grid, Paper } from "@mui/material";
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
  const [success,setSuccess] = useState(false);

  //Data load
  useEffect(() => {
    fetch(`http://localhost:5000/watchItems/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, []);


  //update Service
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedItem = {
      name: updatedName,
      img: singleItem.img,
      price: singleItem.price,
      rating: singleItem.rating,
      brand: singleItem.brand,
    };
    setSingleItem(updatedItem);
  };

  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedItem = {
        name: singleItem.name,
        img: singleItem.img,
        price: updatedPrice,
        rating: singleItem.rating,
        brand: singleItem.brand,
    };

    setSingleItem(updatedItem);
  };
  const handleBrandChange = (e) => {
    const updatedBrand = e.target.value;
    const updatedItem = {
        name: singleItem.name,
        img: singleItem.img,
        price: singleItem.price,
        rating: singleItem.rating,
        brand: updatedBrand,
    };

    setSingleItem(updatedItem);
  };
  //Update
  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/watchItems/${id}`
    fetch(url,{
        method : "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(singleItem)
    }) 
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount===1){
          setSuccess(true)
        }
        
    })
  };
  return (
    <Grid spacing={2} container padding={3} marginTop={6} >
     
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
      {
        success === true && <Alert className='update-alert' severity="success">Update Successfully</Alert> 
      }
        <Box className="component-title">
          <h2>Product Sales Analytics</h2>
         
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
      <Grid item lg={4} md={4} sm={12} xs={12} marginTop={1}>
      
        <Box className="component-title">
          <h2>Product Details</h2>
        </Box>
        <Paper elevation={24}>
          <Box className="single-item-info">
            <Box><img src={singleItem.img} alt="" /></Box>
            <Box> <h3>Model : {singleItem.name}</h3>
            <h4>Brand : {singleItem.brand}</h4>
            <h2>Price : {singleItem.price}</h2></Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={8} md={8} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>Edit Product</h2>
        </Box>
        <Paper elevation={24}>
        <form className="update-form" onSubmit={handleUpdate}>
        <input
          type="text"
          onChange={handleNameChange}
          value={singleItem?.name}
        ></input>
        <input
          type="text"
          onChange={handlePriceChange}
          value={singleItem?.price}
        ></input>
        <input
          type="text"
          onChange={handleBrandChange}
          value={singleItem?.brand}
        ></input>
        <input type="submit" value="Update"></input>
      </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductEdit;
