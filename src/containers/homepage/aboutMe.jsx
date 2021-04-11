
import React from 'react'
import styled from "styled-components"

import { Logo } from "../../components/profilePic/picture"
import { DownArrow } from "../../components/ArrowsComponents/downArrow/index"
import { Element, scroller } from 'react-scroll'
import { Marginer } from "../../components/marginer";



// position: relative;
const AboutMeContainer = styled.div`
width: 100%;
height: 100vh;

background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const TextContainer = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;


const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`

export function AboutMe(props) {

  const scrollToExperinceSection = () => {
    scroller.scrollTo("experinceSection", { smooth: true, duration: 1500})
  }

  return (
  <Element name="aboutMe">
    <AboutMeContainer>
      
    <Marginer direction="vertical" margin="5em" />

            <h2>Welcome to my personal portfolio👋  </h2>
            <Marginer direction="vertical" margin="4em" />

            <Logo></Logo>
            <Marginer direction="vertical" margin="1em" />
            <h4>Crafting stone to Crafting Code</h4>
            <Marginer direction="vertical" margin="1em" />
            <TextContainer>
            <p> Hi, I'm Jack Overton Stonemason turned Software Developer. Makers Academy Graduate looking to land my first tech role. Check out my projects down below to see what I have been up to. Any questions check out the get in touch section.</p>
            </TextContainer>
            <Marginer direction="vertical" margin="6em" />
        <DownArrowContainer onClick={scrollToExperinceSection}>
            <DownArrow/>
        </DownArrowContainer>
    </AboutMeContainer>
  </Element>
  )
}

