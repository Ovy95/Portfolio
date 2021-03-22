import React from "react";
import styled from "styled-components";

import {AboutMe} from "./aboutMe"
import {ProjectSection } from "./projectsSection"


const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0;
`;

export function Homepage(props) {
  return <PageContainer>
           <AboutMe/>
           <ProjectSection/>
        </PageContainer>
}   
