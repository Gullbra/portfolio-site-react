import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'

import '../styles/views.projects.css'

interface IProject {
  imageUrl: string
  title: string
  desc: string
  githubLink: string
  liveLink: string

  languages: string[]
  toolsAndFrameWorks: string[]
}

interface IStateProject {
  projects: IProject[]
  languageKvp: {[key: string]: number}
  toolsKvp: {[key: string]: number}
}

const firstRender = true

const ProjectsSlide = () => {
  const [ projectState, setProjectState ] = useState<IStateProject>({} as IStateProject)

  useEffect(() => {
    if (firstRender) {
      const projects: IProject[] = [
        {  
          imageUrl: "",
          title: "this is project 1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe error inventore architecto molestias eius aspernatur?",
          githubLink: "",
          liveLink: "",
        
          languages: ["TS"],
          toolsAndFrameWorks: ["Node", "Express"]
        },
        {  
          imageUrl: "",
          title: "this is project 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe error inventore architecto molestias eius aspernatur?",
          githubLink: "",
          liveLink: "",
        
          languages: ["Python"],
          toolsAndFrameWorks: ["Flask", "NumPy"]
        },
        {  
          imageUrl: "",
          title: "this is project 3",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe error inventore architecto molestias eius aspernatur?",
          githubLink: "",
          liveLink: "",
        
          languages: ["C#", "TS"],
          toolsAndFrameWorks: [".NET", "ASP.NET core", "React"]
        },
      ]

      const languageKvp: {[key: string]: number} = {}
      const toolsKvp: {[key: string]: number} = {}

      for (let i=0; i < projects.length; i++) {
        projects[i].languages.forEach(lang => languageKvp[lang] ? languageKvp[lang] += 1 : languageKvp[lang] = 1)
        projects[i].toolsAndFrameWorks.forEach(tool => toolsKvp[tool] ? toolsKvp[tool] += 1 : toolsKvp[tool] = 1)
      }

      setProjectState({projects, languageKvp, toolsKvp})
    }
  }, [])

  return(
    <section className='main__slide --projects-slide' id='projects-slide'>
      
      <h2 className='projects-slide__title'> projects </h2>

      <div className='projects-slide__filter-bar'>
        {Object.keys(projectState).length && Object.keys(projectState.languageKvp).map(lang => (
          <FilterButton key={lang} objKey={lang} value={projectState.languageKvp[lang]}/>
        ))}
      </div>

      <div className='projects-slide__filter-bar'>
        {Object.keys(projectState).length && Object.keys(projectState.toolsKvp).map(tool => (
          <FilterButton key={tool} objKey={tool} value={projectState.toolsKvp[tool]}/>
        ))}
      </div>

      <div className='projects-slide__card-container'> 
        {projectState.projects?.map(project => (
          <ProjectCard key={project.title} project={project}/>
        ))}      
      </div>

    </section>
  )
}

const FilterButton = ({objKey, value}: {objKey: string, value: number}) => {
  return (
    <button className='filter-btn-btn'>
      {objKey}
      <div className='filter-btn-count'>{value}</div>
    </button>
  )
}

const ProjectCard = ({project}: {project: IProject}) => {
  return (
    <article className='card-container__project-card'>
      <div className='project-card__image'> imageplaceholder </div>
      <h3 className='project-card__title'>{project.title}</h3>
      <p className='project-card__desc'>{project.desc}</p>

      <div className='project-card__btn-container'>
        <button className='btn-container__project-buttons' title='Github Repo'> <FontAwesomeIcon icon={faGithub} className="fa-icon-overrides-projectcard"/> </button>
        <button className='btn-container__project-buttons' title='Deployed Site'> <FontAwesomeIcon icon={faMicrophoneLines} className="fa-icon-overrides-projectcard"/> </button>
      </div>
    </article>
  )
}

export default ProjectsSlide