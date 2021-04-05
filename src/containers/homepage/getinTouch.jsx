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
justify-content: center;
align-items: center;
flex-direction: column;
`

const UpArrowContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
`

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

