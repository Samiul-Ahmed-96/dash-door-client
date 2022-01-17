import { PersonOutline } from "@mui/icons-material";
import { Box, Grid, LinearProgress, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import "./Members.scss";

const Members = () => {
  function createData(name, date, amount, status) {
    return { name, date, amount, status };
  }
  //Table Data
  const rows = [
    createData("Steve", "12-12-12", "6700", "Approved"),
    createData("Elon", "4-12-12", "6790", "Pending"),
    createData("Maxx", "5-12-12", "6790", "Approved"),
    createData("Rimaz", "17-12-12", "2700", "Pending"),
    createData("Selvi", "22-12-12", "9700", "Pending"),
    createData("Daina", "23-12-12", "6700", "Approved"),
    createData("Modi", "13-12-12", "6733", "Pending"),
    createData("Raina", "11-12-12", "6110", "Pending"),
    createData("Emaz", "19-12-12", "6903", "Approved"),
    createData("Nais", "12-12-12", "2700", "Approved"),
    createData("Bill Gates", "09-12-12", "9044", "Pending"),
    createData("Yony Ana", "29-12-12", "1200", "Pending"),
    createData("Devross", "20-12-12", "8900", "Approved"),
  ];

  //State for user
  const [users, setUsers] = useState([]);
  //Dataload
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Grid
      sx={{ alignItems: "center" }}
      spacing={2}
      container
      padding={3}
      marginTop={6}
    >
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className="component-title">
          <h2>Our Members</h2>
        </Box>
        {users.length === 0 ? (
          <LinearProgress />
        ) : (
          <Grid container>
            {users.slice(0, 8).map((user) => (
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
      <Grid item lg={8} md={8} sm={12} xs={12} marginTop={1}>
        <Box className="component-title">
          <h2>Latest Transaction</h2>
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
                <TableCell>Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Members;
