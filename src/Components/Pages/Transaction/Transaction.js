import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const Transaction = () => {
    function createData(name, date, amount, status) {
        return { name, date, amount, status };
      }
      //Table Data
      const rows = [
        createData("Steve Shawn", "12-12-22", "6700", "Approved"),
        createData("Elon Mask", "14-02-22", "6790", "Pending"),
        createData("Maxx Rio", "15-05-12", "6790", "Approved"),
        createData("Rimaz Ali", "17-12-22", "2700", "Pending"),
        createData("Selvi Ed", "22-09-22", "9700", "Pending"),
        createData("Daina Pluto", "23-11-22", "6700", "Approved"),
        createData("Edward Ad", "13-11-22", "6733", "Pending"),
        createData("Raina Suresh", "11-12-22", "6110", "Pending"),
        createData("Emaz Uddin", "19-10-22", "6903", "Approved"),
        createData("Nafiz Alam", "12-07-22", "2700", "Approved"),
        createData("Bill Gates", "09-09-22", "9044", "Pending"),
        createData("Yony Ana", "29-12-22", "1200", "Pending"),
        createData("Mostafiz Alam", "20-12-12", "8900", "Approved"),
      ];
    
    return (
        <div>
        <Grid
      sx={{ alignItems: "center" }}
      spacing={2}
      container
      padding={3}
      marginTop={6}
    >
    <Grid item lg={12} md={12} sm={12} xs={12} marginTop={1}>
    <Box className="component-title">
      <h2>Latest Transaction</h2>
    </Box>
    <TableContainer id="transaction" component={Paper} elevation={24}>
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
              <TableCell align="right">$ {row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
        
      </Grid>
              
        </div>
    );
};

export default Transaction;