
import React from 'react'
import styled from "styled-components"



import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import {  Element, scroller } from 'react-scroll'
import { Marginer } from "../../components/marginer";

//Style icons
import { FaGithub,FaLinkedin,FaEnvelope,FaFilePdf } from "react-icons/fa";







const GetInTouchContainer = styled.div`
width: auto;
height: 100vh;
position: relative;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(55, 55, 55, 0.89);
display: flex;
flex-direction: column;
align-items: center;
`;

const CvContainerButton = styled.div`
height: auto;
display: flex;
flex-direction: row;

`;

const UpArrowContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
`
const GithubIcon = styled.div`
margin-top: 3px;
color : red;
font-size: 30px;
`
const Icons = styled.div`

color : red;
padding: 0.375rem 0.75rem;
`


const Resume = "https://drive.google.com/file/d/1DrDYlk7VQ0FsRzFDc2hIao6t8v1jaXkK/view?usp=sharing"
const linkedin ="https://www.linkedin.com/in/jack-overton-40b7931a2/"
const gitHub = "https://github.com/Ovy95"

export function GetInTouch(props) {

  const scrollToProjectSection = () => {
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
  }

  return (
  <Element name="getInTouch">
    <GetInTouchContainer>
    <Marginer direction="vertical" margin="2em" />
    <UpArrowContainer onClick={scrollToProjectSection}>
            <UpArrow/>
    </UpArrowContainer>
    <Marginer direction="vertical" margin="1em" />
    <h2>Let's make something awesome together</h2>
    
    <h4>Get in touch down below by click on the links </h4>
    <Marginer direction="vertical" margin="5em" />

    <CvContainerButton>
    <a href={gitHub} target="_blank" className='filter-btn'> <FaGithub size=".8rem" style={{Icons}} /> Github</a>
    <a href={linkedin} target="_blank" className='filter-btn'><FaLinkedin size=".8rem" padding="1px"/>Linkedin</a>
    <a href={Resume} target="_blank" className='filter-btn'> <FaFilePdf size=".8rem"/> Resume</a> 
    < a href="mailto:jackoverton21@hotmail.com" className='filter-btn' > <FaEnvelope size=".8rem"/> Email me here</a>
    </CvContainerButton>
    <Marginer direction="vertical" margin="3em" />
    <p>Thank you for visiting</p>
    </GetInTouchContainer>
  </Element>
  )
}

