
import React from 'react'
import styled from "styled-components"

import { Logo } from "../../components/profilePic/picture"


const AboutMeContainer = styled.div`
margin-top 40px;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


export function AboutMe(props) {
  return <AboutMeContainer>
  

    <h1>Hi there 👋  </h1>
    <h3>Welcome to my personal portfolio</h3>
    <Logo></Logo>

  </AboutMeContainer>
}

