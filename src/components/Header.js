import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import pageStyle from "./Home.module.scss";

const Header = () => {
  const router = useRouter();

  const navLinkHandler = (path) => {
    if (typeof window !== "undefined") {
      router?.push(`/${path}`);
    }
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ border: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            onClick={() => navLinkHandler("")}
            component="span"
            sx={[
              {
                flexGrow: 1,
                fontFamily: "Titillium Web",
                fontWeight: "700",
                cursor: "pointer",
                userSelect: "none",
                ml: -3,
                color: "black",
              },
              // {
              //   "&:hover": {
              //     color: "black",
              //   },
              // },
            ]}
          >
            /home
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <Typography
              className={pageStyle.navBtn}
              onClick={() => navLinkHandler("projects")}
            >
              /projects
            </Typography>
            <Typography
              className={pageStyle.navBtn}
              onClick={() => navLinkHandler("about")}
            >
              /about
            </Typography>
            <Typography
              className={pageStyle.navBtn}
              onClick={() => navLinkHandler("contact")}
            >
              /contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
