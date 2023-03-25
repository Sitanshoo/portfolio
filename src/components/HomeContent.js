import { Box, Button, Grid, Typography } from "@mui/material";
import { Linkedin } from "react-feather";
import Image from "next/image";

const HomeContent = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "35rem", mt: 6 }}>
      <Grid container spacing={0.5}>
        <Grid item xs={7} sx={{ height: "35rem", mt: 2 }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              fontWeight: "bold",
              fontSize: 70,
              mt: 7,
              userSelect: "none",
            }}
          >
            Sitanshu Mustafi
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              color: "dimgrey",
              fontSize: "1.2rem",
              ml: 0.5,
              userSelect: "none",
            }}
          >
            A web developer.
          </Typography>
          <Typography
            paragraph
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              fontSize: "0.9rem",
              fontWeight: "light",
              color: "grey",
              mt: 5.5,
              width: "75%",
              fontStyle: "italic",
              userSelect: "none",
            }}
          >
            As a frontend developer, I am passionate about creating beautiful
            and functional websites and web applications that enhance the user
            experience. My portfolio showcases some of my best work as a
            frontend developer, including websites, web applications, and user
            interfaces.
          </Typography>

          <Typography
            paragraph
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              fontSize: "0.9rem",
              fontWeight: "light",
              color: "grey",
              // mt: 5,
              width: "75%",
              fontStyle: "italic",
              userSelect: "none",
            }}
          >
            {`If you're looking for a frontend developer who is passionate about
            creating beautiful, functional websites and applications, please
            don't hesitate to get in touch.`}
          </Typography>
        </Grid>

        <Grid item xs={5}>
          <Box sx={{ ml: -30, mt: -15 }}>
            <Image
              src="/images/backgroundImg.png"
              alt="avatar"
              width={900}
              height={700}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeContent;
