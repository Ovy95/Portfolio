import React from 'react'
import styled from "styled-components"

import { UpArrow } from "../../components/ArrowsComponents/upArrow/index"
import {  Element, scroller } from 'react-scroll'
import { Marginer } from "../../components/marginer";



import ContactForm from '../../contact/index'

const GetInTouchContainer = styled.div`
width: auto;
height: 100vh;
position: relative;
background-color: --clr-grey-10;
display: flex;

align-items: center;
flex-direction: column;
`

// const UpArrowContainer = styled.div`
//   position: absolute;
//   top: 25px;
//   left: 50%;
//   transform: translateX(-50%);
// `
const UpArrowContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: top;
  top: -40px;
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

export function GetInTouch(props) {

  const scrollToProjectSection = () => {
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
  }

  return (
  
    <GetInTouchContainer>
      <Element name="getInTouch">
<SpacerContainer></SpacerContainer>


    <UpArrowContainer onClick={scrollToProjectSection}>

            <UpArrow/>

    </UpArrowContainer>
    
    <Marginer direction="vertical" margin="4em" />
    <ContactForm></ContactForm>
    </Element>
    <Marginer direction="vertical" margin="5em" />
    <DownArrowContainer></DownArrowContainer>
    </GetInTouchContainer>
  
  )
}

