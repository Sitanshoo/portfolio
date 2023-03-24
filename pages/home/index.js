// import React from "react";

import {
  AppBar,
  Box,
  Button,
  Card,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Calendar } from "react-feather";
const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{ border: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Secular One",
              fontWeight: "600",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            sitanshuMustafi
          </Typography>
          <Button sx={{ textTransform: "none" }} color="inherit">
            Projects
          </Button>
          <Button sx={{ textTransform: "none" }} color="inherit">
            About
          </Button>
          <Button sx={{ textTransform: "none" }} color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LandingPage;
