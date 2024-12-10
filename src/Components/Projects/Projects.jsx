import { useState } from "react"
import SingleProject from "../SingleProject/SingleProject"
import "./Projects.css"

// RealEstate images 
import RealEstateOne from "../../assets/images/RealEstate/1.png"
import RealEstateTwo from "../../assets/images/RealEstate/2.png"
import RealEstateThree from "../../assets/images/RealEstate/3.png"
import RealEstateFour from "../../assets/images/RealEstate/4.png"

//socialMedia
import socialMediaOne from "../../assets/images/socialMedia/5.png"
import socialMediaTwo from "../../assets/images/socialMedia/6.png"

//CodeEditor
import CodeEditorOne from "../../assets/images/CodeEditor/7.png"
import CodeEditorTwo from "../../assets/images/CodeEditor/8.png"
import CodeEditorThree from "../../assets/images/CodeEditor/9.png"

//ResumeCraft
import ResumeCraftOne from "../../assets/images/ResumeCraft/10.png"
import ResumeCraftTwo from "../../assets/images/ResumeCraft/11.png"

import arrow from "../../assets/icons/view-more-arrow.svg"


function Projects() {
  const [projects, setProjects] = useState([{
    name : "Real Estate Application",
    description : "Developed a responsive real estate platform using the MERN stack, featuring user authentication, property management, and secure backend integration. The frontend, designed with React.js, includes property listings, search filters, and user dashboards, while the backend, built with Node.js and Express.js, ensures seamless functionality and security.",
    stack : ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    images: [RealEstateOne,RealEstateTwo,RealEstateThree,RealEstateFour ],
    links : ["https://mern-real-estate-s6wc.onrender.com/", "https://github.com/Mayuresh308/MERN-Real-Estate.git"]
  },
  {
    name : " Social Media Application",
    description : `Social Media Application Created a dynamic social media platform using the MERN stack, allowing users to connect, share stories, and interact through likes and comments. The application features login/logout functionality, dark mode, media uploads, and user management. The frontend was built with React.js, the backend with Node.js, and MongoDB was used for data storage.`,
    stack : ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    images: [socialMediaOne,socialMediaTwo ],
    links : ["https://social-media-frontend-virid.vercel.app/", "https://github.com/Mayuresh308/social-media.git"]
  },
  {
    name : "CodeEditor",
    description : `A lightweight code editor designed with React and Vite, offering a real-time, interactive coding experience. The editor incorporates Monaco Editor for robust code-editing capabilities and Chakra UI for a sleek, responsive design. Smooth animations powered by Framer Motion enhance the dynamic user interface, creating an engaging development tool.`,
    stack : ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    images: [CodeEditorOne, CodeEditorTwo, CodeEditorThree ],
    links : ["https://remarkable-hotteok-0981c4.netlify.app/", "https://github.com/Mayuresh308/React-Vite-CodeEditor.git"]
  },
  {
    name : "Resume Craft",
    description : "A user-friendly platform for creating professional resumes with customizable templates. Features include dynamic editing, live previews, and the ability to download resumes seamlessly. Designed with separate frontend and backend architectures, it ensures smooth data management and an enhanced user experience.",
    stack : ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    images: [ResumeCraftOne, ResumeCraftTwo],
    links : ["https://resume-craft-frontend.vercel.app/", "https://github.com/Mayuresh308/Resume-Craft-Frontend.git"]
  }])

  const mappedProjects = projects.map(({name, description, stack, images, links})=>{
    return <SingleProject key={name} name={name} description={description} stack={stack} images={images} links={links} />
  })
  return (
    <section className="projects">
        <div className="projects-inner">
            <h1 id="projects">PROJECTS</h1>
            
            <div className="projects-container">
            {mappedProjects}
            </div>

            <a href="https://github.com/Mayuresh308" target="_blank" >
              <button className="view-more">
              View more on Github 
              <img src={arrow} alt="" />
            </button>
            </a>
            
        </div>
    </section>
  )
}

export default Projects