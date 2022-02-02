import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Box className="footer">
          <h3>
            Copyright 2022 © All Rights Reserved. Design & Developed By Md
            Samiul Ahmed
          </h3>
        </Box>
      </Container>   
    </div>
  );
};

export default Footer;
