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
          sx={{ marginTop: "64px", flexDirection: { xs: "column", md: "row" } }}
        >
          {/* Left Div Start */}
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "40px",
              flex: "1 1 0",
              minWidth: 0,
              alignItems: "center",
              marginX: { xs: "0", md: "54px" },
            }}
          >
            <Box
              sx={{
                overflowX: "clip",
                overflowY: "visible",
                maxWidth: "539px",
                width: "100%",
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
                sx={{ width: "max-content", paddingRight: "32px" }}
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
            </Box>
            <Box
              sx={{
                overflowX: "clip",
                overflowY: "visible",
                maxWidth: "539px",
                width: "100%",
              }}
            >
              <MotionStack
                flexDirection="row"
                gap="32px"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                sx={{ width: "max-content", paddingRight: "32px" }}
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
            </Box>
          </Stack>
          {/* Left Div End */}

          {/* Right Div Start */}
          <Box
            sx={{
              flex: "1 1 0",
              minWidth: 0,
              margin: "auto",
              borderLeft: { sm: "none", md: "1px solid #e0e0e0" },
            }}
          >
            <List
              disablePadding
              sx={{
                listStyleType: "disc",
                paddingLeft: "24px",
                marginX: { xs: "0", md: "45px" },
              }}
            >
              {techDesc.map((item) => (
                <ListItem
                  key={item.title}
                  sx={{ display: "list-item", paddingLeft: "4px" }}
                >
                  <ListItemText primaryTypographyProps={{ variant: "body2" }}>
                    <strong>{item.title}:</strong> {item.desc}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          {/* Right Div End */}
        </MotionStack>
      </Container>
    </Box>
  );
};

export default Tools;
