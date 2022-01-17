import { DeleteOutlined, ModeEdit } from '@mui/icons-material';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';

const Products = () => {
      const [products,setProducts] = useState([]);
      useEffect(()=>{
          fetch('http://localhost:5000/watchItems')
          .then(res => res.json())
          .then(data => setProducts(data))
      },[])
    return (
        <Grid
        spacing={2}
        container
        padding={3}
        marginTop={6}
      >
          
        <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
            <h2>Manage All Products</h2>
          </Box>
        <TableContainer component={Paper} elevation={24}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                marginTop: "20px",
                background: "#303e67",
                color: "#fff !important",
              }}
            >
              
              <TableCell align="left">Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >

                <TableCell align="left"><img className='product-img' src={product.img} alt="" /></TableCell>
                <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.rating}</TableCell>
                <TableCell align="right">{product.brand}</TableCell>
                <TableCell align="right">
                <div className="product-action">
                <Link to={`/editProduct/${product._id}`}>
                    <button className="edit-btn"><ModeEdit/>  Edit</button>
                </Link> 
                <button className="delete-btn">Delete <DeleteOutlined/></button>
                </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Grid>
      </Grid>
    );
};

export default Products;