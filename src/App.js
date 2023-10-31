import React from "react"
import githubLogo from "./assets/github.png"
import linkedinLogo from "./assets/linkedin.png"
import TypeAnimation from "./components/TypeAnimation"
import Projects from "./assets/projects.json"

export default function App() {
  const techThemeMap = { 'react': 'cyan black', 'html': 'orange', 'css': 'blue', 'js': 'yellow black' }
  return (
    <div className="App">
      <nav>
        <a href="." className="logo"><h1>Osher.Dev</h1></a>
        <div className="menu">
          <a href="https://github.com/osherasfa" target="_blank" rel="noreferrer"><img src={githubLogo} alt="github" /></a>
          <a href="https://www.linkedin.com/in/osher-asefa-b919b020b/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="linkedin" /></a>
          <a className="CV" href="https://docs.google.com/document/d/1rZVyA2B9IYODjbo-Hn1_M-o_6TneyaiqM3_4EFmwrqQ/edit?usp=sharing" target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>
      <main>
        <h1 className="intro">Hello, I am Osher :) <br/>
        A <TypeAnimation 
          words={["Frontend", "Backend", "Fullstack", "Web"]} 
          time={2000}
          after={"developer"}/>
        </h1>
        <section id="aboutme">
          <h5>- About me -</h5>
          <p>I am a self-taught programmer with a strong aptitude for technology.<br/>I am curious and explorative, and I enjoy solving unfamiliar problems that make me thing outside of the box.<br/>I am also enjoy reading books 📚, working out 💪, and running 🏃‍️.</p>
        </section>
        <section id="projects">
          <h5>- Projects -</h5>
          <div className="projects-container">
            {Object.values(Projects).map((item, index) => {
              const projectImage = require(`./assets/${item.snapshot}`)
              return(
                <a href={item.link} target="_blank" rel="noreferrer" key={index} className="project">
                  <img src={projectImage} alt="project snapshot"/>
                  <div>
                    <p>{item.description}</p>
                    <div className="filters">
                      {item.technologies.map((tech, index) => <span key={index} className={`${techThemeMap[tech]}`}>{tech}</span>)}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
        <section id="skills">
          <h5>- Skills -</h5>
          <div>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
          </div>
        </section>
      </main>
      <footer>
        <h3>COPYRIGHT © 2023 OsherDev <br/> All Rights Reserved</h3>
      </footer>
    </div>
  );
}
