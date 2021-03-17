import React from "react";
import styled from "styled-components";

import ProfilePic from "../profilePic/ProfilePic.png"

const LogoContainer = styled.div`
display: inline-block;
  position: relative;
  width: 200 px;
  height: 200 px;
  overflow: hidden;
  border-radius: 50%;`

const LogoImg = styled.img`
width: auto;
height: 250px;
margin-left: -1px;
`;

export function Logo(props){
  return <LogoContainer>
  <LogoImg src={ProfilePic}/>
  </LogoContainer>

}