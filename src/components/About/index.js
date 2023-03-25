import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "35rem",
        mt: 3,
        width: 1,
      }}
    >
      <Grid container spacing={0.5}>
        <Grid item xs={6} sx={{ height: "35rem", alignItems: "center" }}>
          <Paper
            sx={{
              width: "80%",
              height: "80%",
              overflow: "hidden",
              borderRadius: "50%",
              mt: 5,
            }}
            elevation={12}
          >
            <Image
              src="/images/sitanshu.jpg"
              alt=""
              style={{
                // width: "100%",
                // height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                marginLeft: "20px",
              }}
              width={450}
              height={450}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              textAlign: "justify",
              fontFamily: "Titillium Web",
              fontWeight: "light",
              userSelect: "none",
            }}
          >
            {`Hey there! My name is Sitanshu Mustafi, and I'm a Web Developer
            based in Bangalore. I specialize in UI design, Javascript, various
            JS Frameworks, and I'm always looking for ways to push the
            boundaries of what's possible in Frontend Development.`}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              fontWeight: "light",
              userSelect: "none",
              mt: 1,
            }}
          >
            {`Throughout my career, I've had the opportunity to work with some
            amazing clients, including Apollo Vahaan, Marketware, and UNA
            Brands. I'm passionate about creating interactive, and responsive
            web designs with generic components, and I'm always looking for new
            challenges to tackle.`}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              fontWeight: "light",
              userSelect: "none",
              mt: 1,
            }}
          >
            {`When I'm not working, I enjoy playing competetive online multiplayer
            games , doodling, and watching content. I find that taking time to
            recharge and do things I enjoy helps me stay focused and creative in
            my work.`}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Titillium Web",
              fontWeight: "light",
              userSelect: "none",
              mt: 2,
              color: "#6BAEA6",
            }}
          >
            Thanks for stopping by my portfolio! If you have any questions or
            would like to collaborate on a project, feel free to reach out to me
            at sitanshumustafi95035@gmail.com or +91-9503563418.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
