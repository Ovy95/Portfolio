import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'


import { DownArrow } from "../../components/ArrowsComponents/downArrow/index"
import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Marginer } from "../../components/marginer";
import { Experince } from "../../components/experince/index"



const ExperinceContainer = styled(Element)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
`;


const UpArrowContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: top;
  bottom: 0px;
`


const DownArrowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  bottom: 10px;

`

const SpacerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: bottom;
  height: 50px;
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
      
    <ExperinceContainer>
    <Element name="experinceSection">
      <SpacerContainer></SpacerContainer>
        <UpArrowContainer onClick={scrollToAboutMe} >
          <UpArrow/>
        </UpArrowContainer>
      <Experince/>
    </Element>

        <DownArrowContainer onClick={scrollToProjectSectionSection} >
           <DownArrow  />
        </DownArrowContainer>
     <Marginer direction="vertical" margin="2em"/>
       
   </ExperinceContainer>
    
    )
}
