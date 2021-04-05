import React from 'react'
import styled from "styled-components"

import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import {  Element, scroller } from 'react-scroll'
import { Marginer } from "../../components/marginer";

import { FaGithub,FaLinkedin,FaEnvelope, } from "react-icons/fa";

import ContactForm from '../../contact/index'

const GetInTouchContainer = styled.div`
width: auto;
height: 100vh;
position: relative;
background-color: --clr-grey-10;
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
const Icons = styled.div`

color : red;
padding: 0.375rem 0.75rem;
`

const linkedin ="https://www.linkedin.com/in/jack-overton-40b7931a2/"
const gitHub = "https://github.com/Ovy95"

export function GetInTouch(props) {

  const scrollToProjectSection = () => {
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
  }

  return (
  <Element name="getInTouch">
    <GetInTouchContainer>
    <Marginer direction="vertical" margin="6em" />
    <UpArrowContainer onClick={scrollToProjectSection}>
    <Marginer direction="vertical" margin="1em" />
            <UpArrow/>

    </UpArrowContainer>
    <Marginer direction="vertical" margin="4em" />
    <ContactForm></ContactForm>
    
    </GetInTouchContainer>
  </Element>
  )
}

