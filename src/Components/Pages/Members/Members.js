import { PersonOutline } from "@mui/icons-material";
import { Box, Card, Grid, LinearProgress, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Members.scss";

const Members = () => {
  //State
  const [users, setUsers] = useState([]);
  //Dataload
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Grid spacing={2} container padding={3} marginTop={6}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className="component-title">
          <h2>Our Members</h2>
        </Box>
        {users.length === 0 ? (
            <LinearProgress />
        ) : (
          <Grid container>
            {users.map((user) => (
              <Grid key={user._id} item lg={12} md={12} sm={12} xs={12}>
                <Paper elevation={8}>
                  <Box className="user-info">
                    <div className="user-details">
                      <h3>{user.displayName}</h3>
                      <span>{user.email}</span>
                    </div>
                    <div className="user-act">
                      <PersonOutline /> <h4>Display</h4>
                    </div>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Paper elevation={24}>
          <Card className="featured-item">
            <h1>Revenue</h1>
            <h2>Comapred to last month</h2>
            <h1>$4,125</h1>
            <div className="cost">
              <h4>-3.3</h4>
            </div>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Members;
