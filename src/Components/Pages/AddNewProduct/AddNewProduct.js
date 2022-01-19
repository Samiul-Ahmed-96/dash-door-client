import { Box, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import './AddNewProduct.scss';

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  //Handle Submit
  const onSubmit = (data) => {
    fetch("http://localhost:5000/watchItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Added Successfully");
        reset();
      });
  };
  return (
    <Grid spacing={2} container padding={3} marginTop={6}>
     
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
      <Box className="component-title">
      <h2>Added New Product</h2>
    </Box>
        <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
          <input
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          <input
            placeholder="Image Link"
            {...register("img", { required: true })}
          />
          <input
            placeholder="Brand"
            {...register("brand", { required: true })}
          />
         
          <input
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <input
            placeholder="rating"
            {...register("rating", { required: true })}
          />
          <input type="submit" value="Add Product" />
        </form>
      </Grid>
    </Grid>
  );
};

export default AddNewProduct;
