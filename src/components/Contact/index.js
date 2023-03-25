import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { GitHub, Linkedin, Send, Twitter } from "react-feather";
import pageStyle from "./Contact.module.scss";
const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "35rem", mt: 6 }}>
      <Grid container spacing={0.5}>
        <Grid
          item
          xs={7}
          sx={{
            userSelect: "none",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "left",
            height: "35rem",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontFamily: "Titillium Web",
                fontWeight: "bold",
                // mt: 8,
                userSelect: "none",
              }}
            >
              Get in touch
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              width: "80%",
            }}
          >
            <Input
              className={pageStyle.inputText}
              fullWidth
              placeholder="Full Name"
            />
            <Input
              className={pageStyle.inputText}
              fullWidth
              type="email"
              placeholder="Email Address"
            />
            <Input
              className={pageStyle.inputText}
              fullWidth
              placeholder="Subject"
            />{" "}
            <Input
              className={pageStyle.inputText}
              multiline
              fullWidth
              placeholder="How can I help you?"
              sx={{ maxHeight: "100px" }}
            />
          </Box>
          <Button
            className={pageStyle.sendBtn}
            sx={{
              fontFamily: "Titillium Web",
              width: "80%",
              color: "white",
              background: "#6DAFA5",
            }}
          >
            Send Message
          </Button>
        </Grid>
        <Grid item xs={5} sx={{ minHeight: "35rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "3rem",
              alignItems: "center",
              mt: 21,
              ml: 18,
              mr: 5,
            }}
          >
            <Button
              sx={[
                { width: 1 / 2, height: "120px", background: "#097BA8" },
                {
                  "&:hover": {
                    background: "#0071AE",
                  },
                },
              ]}
              className={pageStyle.socialHandle}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sitanshu-mustafi-31734a155/",
                  "_blank"
                )
              }
            >
              <Linkedin size={60} style={{ color: "white" }} />
            </Button>
            <Button
              variant="filled"
              sx={[
                { width: 1 / 2, height: "120px", background: "#545556" },
                {
                  "&:hover": {
                    background: "black",
                    color: "white",
                  },
                },
              ]}
              className={pageStyle.socialHandle}
              onClick={() =>
                window.open("https://github.com/Sitanshoo", "_blank")
              }
            >
              <GitHub size={60} style={{ color: "white" }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
