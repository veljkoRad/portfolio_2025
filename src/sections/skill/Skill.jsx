import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import { skills } from "./skillData";
import * as style from "./skillStyle";

const MotionStack = motion(Stack);

const Skill = () => {
  const skillRef = useRef(null);
  const skillInView = useInView(skillRef, { once: true, margin: "-300px" });

  return (
    <Box sx={{ paddingY: "120px" }}>
      <Container fixed sx={style.container}>
        <Typography
          variant="h3"
          color="text.blue"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          Skill
        </Typography>
        <MotionStack
          ref={skillRef}
          initial="hidden"
          animate={skillInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="30px"
          sx={{ marginTop: "50px" }}
        >
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              <Box sx={style.cardContainer}>
                {item.icon}
                <Typography
                  className="titleHover"
                  variant="subtitle1"
                  sx={(theme) => ({
                    color: { xs: "#fff", sm: theme.palette.text.primary },
                  })}
                >
                  {item.title}
                </Typography>
                <Typography
                  className="descHover"
                  sx={(theme) => ({
                    color: { xs: "#fff", sm: theme.palette.text.secondary },
                    letterSpacing: 1,
                    "& strong": {
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                    },
                  })}
                >
                  {item.desc}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </MotionStack>
      </Container>
    </Box>
  );
};

export default Skill;
