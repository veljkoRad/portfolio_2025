import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState, useRef } from "react";
import ReactTab from "./tabs/ReactTab";
import LandingPageTab from "./tabs/LandingPageTab";
import EmailTab from "./tabs/EmailTab";
import { AnimatePresence, motion, useInView } from "framer-motion";
import * as style from "./projectsStyle";

const ProjectMotionStack = motion(Stack);

const tabs = [
  { label: "REACT", component: <ReactTab /> },
  { label: "LANDING PAGES", component: <LandingPageTab /> },
  { label: "EMAIL TEMPLATES", component: <EmailTab /> },
];

const Projects = () => {
  const projectRef = useRef(null);
  const [value, setValue] = useState(0);
  const handleChange = (item, index) => setValue(index);
  const projectInView = useInView(projectRef, { once: true, margin: "-100px" });

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
      <Container fixed sx={{ paddingY: "120px", paddingX: "12px" }}>
        <Typography
          variant="h3"
          color="text.blue"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          My Projects
        </Typography>
        <ProjectMotionStack
          ref={projectRef}
          initial="hidden"
          animate={projectInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <Tabs
            ref={projectRef}
            textColor="text"
            value={value}
            onChange={handleChange}
            sx={style.projectTabs}
          >
            {tabs.map((item) => (
              <Tab key={item.label} label={item.label} />
            ))}
          </Tabs>
          {/* Preload all tabs so images stay cached */}
          <Box sx={{ display: "none" }}>
            {tabs.map((tab) => (
              <Box key={`preload-${tab.label}`}>{tab.component}</Box>
            ))}
          </Box>
          {/* Animated active tab */}
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {tabs[value].component}
            </motion.div>
          </AnimatePresence>
        </ProjectMotionStack>
      </Container>
    </Box>
  );
};

export default Projects;
