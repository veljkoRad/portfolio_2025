import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Container, Stack, Typography, Tabs, Tab } from "@mui/material";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import { skills } from "./aboutData";
import { aboutTabContent } from "./aboutData";

const MotionStack = motion(Stack);

const aboutTabs = ["About", "Experience", "Education"];

const About = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-150px" });

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      component="section"
      sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
    >
      <Container fixed sx={{ paddingY: "120px" }}>
        <Stack
          alignItems="flex-start"
          justifyContent="space-between"
          gap="50px"
          sx={{
            marginTop: "50px",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          {/* Percentage Cards */}
          <Stack
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
            gap="30px"
            sx={{ minWidth: { xs: "100%", md: "550px", lg: "590px" } }}
          >
            {skills.map((item, index) => (
              <AnimatedCircularProgress
                key={index}
                value={item.value}
                label={item.label}
                description={item.description}
              />
            ))}
          </Stack>

          {/* About me */}
          <MotionStack
            ref={aboutRef}
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            alignItems="flex-start"
            gap="10px"
            justifyContent="center"
          >
            <Typography
              variant="h3"
              color="text.blue"
              sx={{ textAlign: { xs: "center", md: "start" } }}
            >
              About me
            </Typography>
            <Typography sx={{ letterSpacing: "1px" }} color="text.secondary">
              I’m a frontend developer who started in PPC marketing and spent
              three years building landing pages and newsletters (150+ and
              counting). I enjoy coding, learning, and solving problems, and
              I’ve also built several React projects. Self-taught, curious, and
              always working on getting better.
            </Typography>
            <Tabs textColor="text" value={value} onChange={handleChange}>
              {aboutTabs.map((item) => (
                <Tab
                  sx={{
                    fontSize: "18px",
                    textTransform: "none",
                    marginTop: "20px",
                  }}
                  label={item}
                  key={item}
                />
              ))}
            </Tabs>
            {aboutTabContent.map((item, i) => (
              <Box key={item.title} hidden={value !== i}>
                <Typography color="text.secondary" lineHeight="2rem">
                  {item.content}
                </Typography>
              </Box>
            ))}
          </MotionStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
