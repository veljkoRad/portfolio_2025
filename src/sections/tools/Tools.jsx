import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { techStack, techDesc } from "./toolsData";
import * as style from "./toolsStyle";

const MotionStack = motion(Stack);

const Tools = () => {
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: "-300px" });

  return (
    <Box sx={{ paddingY: "120px" }}>
      <Container fixed>
        <Typography variant="h3" color="text.blue" textAlign="center">
          Tech Stack
        </Typography>
        <MotionStack
          ref={toolsRef}
          initial="hidden"
          animate={toolsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          flexDirection="row"
          sx={{ marginTop: "64px" }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "40px",
              overflow: "hidden",
              maxWidth: "528px",
            }}
          >
            <MotionStack
              flexDirection="row"
              gap="32px"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...techStack.slice(0, 5), ...techStack.slice(0, 5)].map(
                (item, i) => (
                  <Box sx={style.badgeWrapper} key={`${item.name}-${i}`}>
                    <Box className="cloudTooltip" sx={style.cloudTooltip}>
                      {item.name}
                    </Box>
                    <Box sx={style.badge}>
                      <Box
                        component="img"
                        alt={item.name}
                        src={item.icon}
                        sx={{ height: "40px" }}
                      />
                    </Box>
                  </Box>
                ),
              )}
            </MotionStack>
            <MotionStack
              flexDirection="row"
              gap="32px"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...techStack.slice(5, 10), ...techStack.slice(5, 10)].map(
                (item, i) => (
                  <Box sx={style.badgeWrapper} key={`${item.name}-${i}`}>
                    <Box className="cloudTooltip" sx={style.cloudTooltip}>
                      {item.name}
                    </Box>
                    <Box sx={style.badge}>
                      <Box
                        component="img"
                        alt={item.name}
                        src={item.icon}
                        sx={{ height: "40px" }}
                      />
                    </Box>
                  </Box>
                ),
              )}
            </MotionStack>
          </Stack>
          <Box
            sx={{
              margin: "auto",
              borderLeft: { sm: "none", md: "1px solid #e0e0e0" },
            }}
          >
            <List
              disablePadding
              sx={{
                listStyleType: "disc",
                maxWidth: "400px",
                margin: "auto",
              }}
            >
              {techDesc.map((item) => (
                <ListItem key={item.title} sx={{ display: "list-item" }}>
                  <ListItemText>
                    <strong>{item.title}:</strong> {item.desc}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </MotionStack>
      </Container>
    </Box>
  );
};

export default Tools;
