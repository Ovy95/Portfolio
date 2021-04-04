import React from 'react'
import { FaGithub,FaLinkedin,FaFilePdf } from "react-icons/fa";
import { scroller } from 'react-scroll';
import { Marginer } from '../../marginer';

import './SideDrawer.css'

const linkedin ="https://www.linkedin.com/in/jack-overton-40b7931a2/"
const gitHub = "https://github.com/Ovy95"
const Resume = "https://drive.google.com/file/d/1DrDYlk7VQ0FsRzFDc2hIao6t8v1jaXkK/view?usp=sharing"
export function SideDrawer( {setShow} ) {

  const scrollToAboutMeSection = () => {
    scroller.scrollTo("aboutMe", { smooth: true, duration: 1500})
    setShow(false)
  }

  const scrollToExperinceSection = () => {
    scroller.scrollTo("experinceSection", { smooth: true, duration: 1500})
    setShow(false)
  }

  const scrollToProjectSection = () => {
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
    setShow(false)
  }

  const scrollToGetInTouchSection = () => {
    scroller.scrollTo("getInTouch", { smooth: true, duration: 1500})
    setShow(false)
  }



  return (
    <div className="side-drawer">
      <div className ="exit-side-drawer">
      <button className='filter-btn' onClick={()=>setShow(false)}>X</button>
      </div>
      <ul>

          <button className='filter-btn' onClick={scrollToAboutMeSection}>About Me</button>
          

          
          
          <button className='filter-btn' onClick ={scrollToExperinceSection} >experience </button>
          <button className='filter-btn' onClick ={scrollToProjectSection}>Projects</button>
          <button className='filter-btn' onClick = {scrollToGetInTouchSection}>Contact Me</button>
          
          <button className='filter-btn' a href={gitHub} target="_blank" > <FaGithub margin-top = "1rem" /> Github </button>
          
          <button className='filter-btn' href={linkedin} target="_blank" className='filter-btn'><FaLinkedin size="1rem" padding="1px"/> Linkedin</button>
          <button className='filter-btn' href={Resume} target="_blank"><FaFilePdf size=".8rem"/> Resume</button> 
          <Marginer direction="vertical" margin="15em" />

     
      </ul>
    </div>
  )
}

