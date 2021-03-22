import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'

import {SectionTitle} from '../../components/sectionTitle/index'
import { DownArrow } from "../../components/downArrow/index"
import { UpArrow } from "../../components/upArrow/index"
import { Marginer } from "../../components/marginer";


const ProjectContainer = styled(Element)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
    <Marginer direction="vertical" margin="4em" />


       
      
      <SectionTitle>Here are some of my projects</SectionTitle>
      <UpArrowContainer onClick={scrollToNextSection} >
      <UpArrow/>
        </UpArrowContainer>
        
        
        
    </ProjectContainer>
    </Element>
    )
}
