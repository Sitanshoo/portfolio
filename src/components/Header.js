import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import pageStyle from "./Home.module.scss";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ border: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            // variant="subtitle1"
            component="div"
            sx={[
              {
                flexGrow: 1,
                fontFamily: "Titillium Web",
                fontWeight: "700",
                cursor: "pointer",
                userSelect: "none",
                ml: -3,
                color: "#6DB0A7"
              },
              {
                "&:hover": {
                  color: "black",
                },
              },
            ]}
          >
            /home
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <Typography className={pageStyle.navBtn}>/projects</Typography>
            <Typography className={pageStyle.navBtn}>/about</Typography>
            <Typography className={pageStyle.navBtn}>/contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
