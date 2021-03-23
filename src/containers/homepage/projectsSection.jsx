import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'



import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Marginer } from "../../components/marginer";
import { Projects } from "../../components/projectComponents/index"


const ProjectContainer = styled(Element)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center
`;


const UpArrowContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`


export function ProjectSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("aboutMe", { smooth: true, duration: 1500})
  }

    return (
      <Element name="projectSection">
    <ProjectContainer>
      
      <UpArrowContainer onClick={scrollToNextSection} >
        <UpArrow/>
      </UpArrowContainer>
      


    <Marginer direction="vertical" margin="20em"/>
    <Marginer direction="vertical" margin="4em"/>
  
    <Marginer direction="vertical" margin="4em"/>

    <Projects/>
        
        
        
    </ProjectContainer>
    </Element>
    )
}
