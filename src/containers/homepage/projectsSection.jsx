import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'


import { DownArrow } from "../../components/ArrowsComponents/downArrow/index"
import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Marginer } from "../../components/marginer";
import { Projects } from "../../components/projectComponents/index"


const ProjectContainer = styled(Element)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: white;
`;


const UpArrowContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`


const DownArrowContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
`


export function ProjectSection(props) {

  const scrollToExperinceSection = () => {
    scroller.scrollTo("experinceSection", { smooth: true, duration: 1500})
  }
  //This is the next page when created
  const scrollToGetInTouchSection = () => {
    scroller.scrollTo("getInTouch", { smooth: true, duration: 1500})
  }

    return (
      
    <ProjectContainer>

      <UpArrowContainer onClick={scrollToExperinceSection} >
      <Marginer direction="vertical" margin="1em"/>
        <UpArrow/>
      </UpArrowContainer>
      

    <Marginer direction="vertical" margin="4em"/>
    <Element name="projectSection">
    <Marginer direction="vertical" margin="2.5em"/>
    <Projects/> 
        

    <Marginer direction="vertical" margin="4em"/>
        <DownArrowContainer onClick={scrollToGetInTouchSection} >
        <DownArrow  />
        </DownArrowContainer>
        </Element>

    <Marginer direction="vertical" margin="2em"/>
    </ProjectContainer>
   
    )
}
