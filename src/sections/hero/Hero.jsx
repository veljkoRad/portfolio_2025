import { Box, Button, Container, Stack, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as style from "./heroStyle";

const Hero = ({ projectRef }) => {
  return (
    <Box component="section" sx={{ marginTop: "78px" }}>
      <Box sx={style.heroBg}>
        <Container
          fixed
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Stack
            justifyContent="center"
            sx={{
              position: "relative",
              zIndex: "2",
              maxWidth: { xs: "560px", sm: "620px" },
            }}
          >
            <Typography variant="h1" color="text.primary">
              Hi, I'm Veljko
            </Typography>
            <Typography variant="h2" color="text.blue">
              Web Developer
            </Typography>
            <Typography
              textTransform="none"
              color="text.secondary"
              sx={{ marginTop: "16px" }}
            >
              I make websites and apps that are easy to use, responsive, and
              built to solve real problems, from creating landing pages to React
              projects that help people and brands get results.
            </Typography>
            <Stack
              direction="row"
              gap="15px"
              sx={{ marginTop: "40px", flexWrap: { xs: "wrap", s: "nowrap" } }}
            >
              <Button
                component="a"
                href="/cv.pdf"
                download
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                  textTransform: "none",
                }}
              >
                Download CV <GetAppIcon sx={{ marginLeft: "10px" }} />
              </Button>
              <Button
                variant="outlined"
                sx={style.buttonWork}
                onClick={() =>
                  projectRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                My Work <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
              </Button>
            </Stack>
          </Stack>
          <Stack sx={style.heroStack}>
            <Box component="img" src="/images/gear.svg" sx={style.heroImg} />
            <img
              src="/images/man-cv.png"
              style={{ width: "100%" }}
              alt="profile contact veljko"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
