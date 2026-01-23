import ProjectCard from '../../../components/projectCard/ProjectCard'
import { emailProjectList } from '../projectData'



const EmailTab = () => {
  return (
    <ProjectCard cardData={emailProjectList} />
  )
}

export default EmailTab