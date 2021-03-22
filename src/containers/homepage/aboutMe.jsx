
import React from 'react'
import styled from "styled-components"

import { Logo } from "../../components/profilePic/picture"
import { DownArrow } from "../../components/downArrow/index"
import { Element, scroller } from 'react-scroll'
import { Marginer } from "../../components/marginer";

const AboutMeContainer = styled.div`
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

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`

export function AboutMe(props) {

  const scrollToNextSection = () => {
    scroller.scrollTo("projectSection", { smooth: true, duration: 1500})
  }

  return (
  <Element name="aboutMe">
    <AboutMeContainer>

            <h1>Hi there 👋  </h1>
            <Marginer direction="vertical" margin="2em" />
            <Marginer direction="vertical" margin="2em" />

            <h3>Welcome to my personal portfolio</h3>
            <Marginer direction="vertical" margin="4em" />

            <Logo></Logo>
            <Marginer direction="vertical" margin="6em" />
        <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow/>
        </DownArrowContainer>

    </AboutMeContainer>
  </Element>
  )
}

