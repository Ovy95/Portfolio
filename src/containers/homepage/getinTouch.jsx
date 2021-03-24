
import React from 'react'
import styled from "styled-components"


import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Button, Element, scroller } from 'react-scroll'
import { Marginer } from "../../components/marginer";

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
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
`;

const UpArrowContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
`
const link = "https://drive.google.com/file/d/1DrDYlk7VQ0FsRzFDc2hIao6t8v1jaXkK/view?usp=sharing"
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
    <Marginer direction="vertical" margin="12em" />
    <h2>Get in touch</h2>

    
    

   


    <CvContainerButton>
          <a href={link} target="_blank" className='filter-btn'>Resume</a>
    </CvContainerButton>
    </GetInTouchContainer>
  </Element>
  )
}

