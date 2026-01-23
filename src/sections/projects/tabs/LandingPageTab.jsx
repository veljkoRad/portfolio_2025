import ProjectCard from "../../../components/projectCard/ProjectCard"
import { landingPageList } from "../projectData"


const LandingPageTab = () => {
  return (
    <ProjectCard cardData={landingPageList} />
  )
}

export default LandingPageTab