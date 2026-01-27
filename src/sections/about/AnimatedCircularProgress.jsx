import { Stack, Typography } from "@mui/material";
import { motion, useInView, useAnimation, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AnimatedCircularProgress = ({ value, label, description }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        controls.start({ opacity: 1, y: 0 });

        animate(0, value, {
            duration: 0.5,
            onUpdate(latest) {
                setProgress(Math.round(latest));
            }
        });
    }, [isInView, value, controls]);

    return (
        <Stack
            ref={ref}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
            alignItems="center"
            gap="12px"
            position="relative"
            sx={{
                background: (theme) => theme.palette.background.default,
                borderRadius: "16px",
                padding: { xs: '24px', md: '12px', lg: '24px' },
                width: '100%',
                maxWidth: { xs: '100%', sm: '330px', md: '260px', lg: '280px' }
            }}
        >
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    padding: '10px'
                }}
            >

                <CircularProgressbar
                    value={progress}
                    text={`${value}%`}
                    strokeWidth={14}
                    styles={buildStyles({
                        textSize: "24px",
                        textColor: "#3b82f6",
                        pathColor: "#3b82f6",
                        strokeLinecap: "butt"
                    })}
                />

            </div>

            <Typography color="text.primary" variant="body2" fontWeight="600">
                {label}
            </Typography>
            <Typography
                color="text.secondary"
                sx={{ fontSize: "14px", textAlign: "center" }}
            >
                {description}
            </Typography>
        </Stack>
    );
};

export default AnimatedCircularProgress;
