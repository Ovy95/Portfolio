import React from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'


import { DownArrow } from "../../components/ArrowsComponents/downArrow/index"
import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import { Marginer } from "../../components/marginer";
import { Experince } from "../../components/experince/index"



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
  display: flex;
  flex-direction: column;
  align-items:center;
  
  // position: bottom;
  bottom: 100px;

`
// const DownArrowContainer = styled.div`
//   position: absolute;
//   bottom: 25px;
//   left: 50%;
//   transform: translateX(-50%);
// `

export function ExperinceSection(props) {

  const scrollToAboutMe = () => {
    scroller.scrollTo("aboutMe", { smooth: true, duration: 1500})
  }
  //This is the next page when created
  const scrollToProjectSectionSection = () => {
    console.log("EXperince CLCIKING")
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
  }

    return (
      
    <ExperinceContainer>

      <UpArrowContainer onClick={scrollToAboutMe} >
      <Marginer direction="vertical" margin="1em"/>
        <UpArrow/>
      </UpArrowContainer>

     
      <Marginer direction="vertical" margin="2em"/>

      <Element name="experinceSection">
    
    
      <Experince/>

    </Element>
    
        <DownArrowContainer onClick={scrollToProjectSectionSection} >
        <DownArrow  />
        </DownArrowContainer>
        <Marginer direction="vertical" margin="2em"/>
       
    </ExperinceContainer>
    
    )
}
