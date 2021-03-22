import React from 'react'
import {Element} from 'react-scroll'
import styled from 'styled-components'

import {SectionTitle} from '../../components/sectionTitle/index'

const ProjectContainer = styled(Element)`
  width: 100%;
  height: 100vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;


`;



export function ProjectSection(props) {
    return (
    <ProjectContainer name ="projectSection">
      <SectionTitle>Here are some of my projects</SectionTitle>

    </ProjectContainer>
    )
}
