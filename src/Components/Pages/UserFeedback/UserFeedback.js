import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './UserFeedback.scss';

const UserFeedback = () => {
    const [userFeedback ,setUserFeedback] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setUserFeedback(data))
    },[])
    return (
        <Grid  spacing={2} container padding={3} marginTop={6} >
     <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}> 
        <Box className="component-title">
          <h2>User Feedback</h2>
        </Box>
        <div className="feedback-container">
        {
            userFeedback.map(singleFeedback => 
                        <div key={singleFeedback._id} className="single-feedback">
                            <h1>{singleFeedback.name}</h1>
                            <h3>{singleFeedback.massage}</h3>
                            <h2>User Rating : {singleFeedback.rating}</h2>
                        </div>
                 )
        }
        </div>
      </Grid>

    </Grid>
    );
};

export default UserFeedback;