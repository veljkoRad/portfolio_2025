import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, CircularProgress } from "@mui/material";
import Navbar from './components/navbar/Navbar'
import Hero from './sections/hero/Hero'
import About from "./sections/about/About";
import Skill from "./sections/skill/Skill";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

function App({ mode, toggleMode }) {


// Loading Screen and curtain Start 
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

const startCurtain = useCallback(() => {
  controls.start({
    transform: 'translate3d(0, -120%, 0) skew(-10deg, -10deg)',
    transition: { duration: 0.6, ease: [0.3, 0, 0.3, 1] }
  });
}, [controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // hide loader
      startCurtain(); // trigger curtain animation
    }, 500);

    return () => clearTimeout(timer);
  }, [startCurtain]);


// Loading Screen and curtain End

// ScrollY Active Section Start

  const [activeSection, setActiveSection] = useState("Hero");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

const navSections = useMemo(() => ([
  { id: 'hero', label:'Home', ref: heroRef },
  { id: 'about', label:'About', ref: aboutRef },
  { id: 'skill', label:'Skills', ref: skillRef },
  { id: 'projects', label:'Projects', ref: projectRef },
  { id: 'contact', label:'Contact', ref: contactRef },
]), []);

useEffect(() => {
  const handleScroll = () => {
    for (const s of navSections) {
      const rect = s.ref.current.getBoundingClientRect();
      const trigger = window.innerHeight * 0.2;
      if (rect.top <= trigger && rect.bottom >= trigger) {
        setActiveSection(s.id);
        break;
      }
    }
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [navSections]);
// ScrollY Active Section End




  return (
    <div style={{ position: "relative" }}>
      <Box
        component={motion.div}
        initial={{ transform: 'translate3d(0, 0, 0) skew(0deg, 0deg)' }}
        animate={controls}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: 'text.loader',
          zIndex: 9999,
        }}
      >

        {isLoading && (
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "text.loader",
            }}
          >
            <CircularProgress size={80} color="secondary" />
          </Box>
        )}
      </Box>
      <Navbar mode={mode} toggleMode={toggleMode} active={activeSection} sections={navSections} />
      <Box component="main">
        <div ref={heroRef} id='hero'><Hero projectRef={projectRef} /></div>
        <div ref={aboutRef} id='about'><About /></div>
        <div ref={skillRef} id='skill'><Skill /></div>
        <div ref={projectRef} id='projects'><Projects /></div>
        <div ref={contactRef} id='contact'><Contact contactRef={contactRef} /></div>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
