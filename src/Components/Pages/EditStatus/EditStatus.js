import { Alert, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditStatus.scss";
const EditStatus = () => {
  const { id } = useParams();
  //State
  const [updateOrder, setUpdateOrder] = useState({});
  const [success, setSuccess] = useState(false);

  console.log(updateOrder);

  //Data load
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateOrder(data));
  }, [id]);
  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    const updatedItem = {
      name: updateOrder.name,
      email: updateOrder.email,
      image: updateOrder.image,
      watchName: updateOrder.watchName,
      watchId: updateOrder.watchId,
      phone: updateOrder.phone,
      address: updateOrder.address,
      singleWatchPrice: updateOrder.singleWatchPrice,
      status: updatedStatus,
    };

    setUpdateOrder(updatedItem);
  };
  //Update
  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          setSuccess(true);
          alert("updated");
        }
      });
  };

  return (
    <Grid spacing={2} container padding={3} marginTop={6}>
        <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        {success === true && (
            <Alert className="update-alert" severity="success">
              Update Successfully
            </Alert>
          )}
        </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
     
        <Box className="component-title">
          <h2>Order Details</h2>
        </Box>
        <Paper elevation={24}>
          <Box className="order-item-info">
            <Box>
              <img src={updateOrder.image} alt="" />
            </Box>
            <Box>
              <h2>Order By : {updateOrder.name}</h2>
              <span>Email : {updateOrder.email}</span>
              <h4>Phone : {updateOrder.phone}</h4>
              <h3>Status : {updateOrder.status}</h3>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>Edit Status</h2>
        </Box>
        <Paper elevation={24}>
          <form className="order-form" onSubmit={handleUpdate}>
            <label for="Status">Choose a status:</label>
            <select
              name="Status"
              onChange={handleStatusChange}
              defaultValue={updateOrder?.status}
            >
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Cancel">Cancel</option>
            </select>
            <input type="submit" value="Update"></input>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditStatus;
