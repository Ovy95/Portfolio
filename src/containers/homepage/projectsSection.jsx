import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'


import { DownArrow } from "../../components/ArrowsComponents/downArrow/index"
import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Marginer } from "../../components/marginer";
import { Projects } from "../../components/projectComponents/index"


const ProjectContainer = styled(Element)`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: white;

`;

const UpArrowContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: top;
  bottom: 0px;
`
const SpacerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: bottom;
  height: 50px;
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

  const scrollToGetInTouchSection = () => {
    scroller.scrollTo("getInTouch", { smooth: true, duration: 1500})
  }

    return (
      
    <ProjectContainer>
      <Element name="projectSection">
<SpacerContainer></SpacerContainer>





      <UpArrowContainer onClick={scrollToExperinceSection} >
        <UpArrow/>
      </UpArrowContainer>
      <Marginer direction="vertical" margin="4em"/>


    

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
