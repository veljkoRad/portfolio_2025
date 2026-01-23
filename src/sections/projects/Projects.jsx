import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useState, useRef } from 'react'
import ReactTab from './tabs/ReactTab';
import LandingPageTab from './tabs/LandingPageTab';
import EmailTab from './tabs/EmailTab';
import { motion, useInView } from 'framer-motion';
import * as style from './projectsStyle'

const ProjectMotionStack = motion(Stack)



const tabs = [
  { label: 'REACT', component: <ReactTab /> },
  { label: 'LANDING PAGES', component: <LandingPageTab /> },
  { label: 'EMAIL TEMPLATES', component: <EmailTab /> }]

const Projects = () => {

  const projectRef = useRef(null);
  const [value, setValue] = useState(0);
  const handleChange = (item, index) => setValue(index);
  const projectInView = useInView(projectRef, { once: true, margin: '-500px' })

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
      <Container fixed sx={{ paddingY: '120px' }}>
        <Typography variant='h3' color='text.blue' sx={{ textAlign: { xs: 'center', md: 'start' } }}>My Projects</Typography>
        <ProjectMotionStack
          ref={projectRef}
          initial="hidden"
          animate={projectInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" }
            }
          }} >
          <Tabs
            ref={projectRef}
            textColor='text'
            value={value}
            onChange={handleChange}
            sx={style.projectTabs}>
            {tabs.map((item) => <Tab key={item.label} label={item.label} />)}
          </Tabs>
          {tabs[value].component}
        </ProjectMotionStack>
      </Container>
    </Box >
  )
}

export default Projects