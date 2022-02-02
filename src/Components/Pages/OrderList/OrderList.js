import { ArrowCircleLeftOutlined, DeleteOutlined } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderList.scss";

const OrderList = () => {
  //State
  const [allOrders, setAllOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  const [updatedOrder, setUpdatedOrder] = useState({});
  //Data Load
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  //handle Delete
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Want to delete?");
    if (deleteConfirm) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setSuccess(true);
            const remaining = allOrders.filter((order) => order._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };

  return (
    <Grid spacing={2} container padding={3} marginTop={6}>
      <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
        {success === true && (
          <Alert className="update-alert" severity="success">
            Delete Successfully
          </Alert>
        )}
        <Box className="component-title">
          <h2>Order List</h2>
          <div className="added-item">
            <Link to="/home">
              <Button variant="outlined">
                <ArrowCircleLeftOutlined /> Back To Home
              </Button>
            </Link>
          </div>
        </Box>
        {allOrders.length === 0 ? (
          <LinearProgress />
        ) : (
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
                  <TableCell align="left">Product</TableCell>
                  <TableCell>Order By</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrders.map((order) => (
                  <TableRow
                    key={order._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <img className="product-img" src={order.image} alt="" />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.name}
                    </TableCell>
                    <TableCell align="right">{order.email}</TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                    <TableCell align="right">{order.phone}</TableCell>
                    <TableCell align="right">
                      <div className="product-action">
                        <Link to={`/editStatus/${order._id}`}>
                          <Button variant="outlined" className="edit-btn">
                            Update Status
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleDelete(order._id)}
                          variant="contained"
                          className="delete-btn"
                        >
                          <DeleteOutlined />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
};

export default OrderList;
