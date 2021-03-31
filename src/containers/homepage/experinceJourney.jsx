import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'


import { DownArrow } from "../../components/ArrowsComponents/downArrow/index"
import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Marginer } from "../../components/marginer";
import { Projects } from "../../components/projectComponents/index"


const ExperinceContainer = styled(Element)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
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


export function ExperinceSection(props) {

  const scrollToAboutMe = () => {
    scroller.scrollTo("aboutMe", { smooth: true, duration: 1500})
  }
  //This is the next page when created
  const scrollToProjectSectionSection = () => {
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
  }

    return (
      <Element name="experinceSection">
    <ExperinceContainer>
      
      <UpArrowContainer onClick={scrollToAboutMe} >
        <UpArrow/>
      </UpArrowContainer>
      
    <Marginer direction="vertical" margin="4em"/>
      <h1>Experince Page</h1>
    {/* <Projects/> */}
        

    <Marginer direction="vertical" margin="4em"/>
        <DownArrowContainer onClick={scrollToProjectSectionSection} >
        <DownArrow  />
        </DownArrowContainer>


    <Marginer direction="vertical" margin="2em"/>
    </ExperinceContainer>
    </Element>
    )
}
