import React from "react";
import styled from "styled-components";

import {AboutMe} from "./aboutMe"

const PageContainer = styled.div`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
`;

export function Homepage(props) {
  return <PageContainer>
    <AboutMe/>
  </PageContainer>
}
