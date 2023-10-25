import React from "react"
import githubLogo from "./assets/github.png"
import linkedinLogo from "./assets/linkedin.png"
import projectOne from "./assets/project1.jpg"
import projectTwo from "./assets/project2.jpg"
import TypeAnimation from "./components/TypeAnimation"

export default function App() {
  return (
    <div className="App">
      <nav>
        <a href="."><h1>Osher.Dev</h1></a>
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
          <div className="showcase">
            <img src={projectOne} alt="projectOne"/>
            <img src={projectTwo} alt="projectTwo"/>
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
