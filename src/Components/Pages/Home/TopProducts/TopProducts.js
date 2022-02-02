import { Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './TopProducts.scss';

const TopProducts = () => {
    //State
  const [topProducts, setTopProducts] = useState([]);

  //Data Load
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setTopProducts(data));
  }, []);
    return (
        <section className='top-products'>
            <Grid container>
                {
                    topProducts.slice(6,14).map(product => <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Paper elevation={8} sx={{margin:'10px'}}>
                            <div className="top-products">
                                <img src={product.img} alt="" />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <span>{product.brand}</span>
                                    <h4>{product.price} $</h4>
                                </div>
                            </div>
                        </Paper>
                      </Grid>)
                }
            </Grid>
        </section>
    );
};

export default TopProducts;