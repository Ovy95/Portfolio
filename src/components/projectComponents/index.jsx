import React, { useState } from "react";
import styled from "styled-components";
import './index.css';

import items from "./projects"
import ProjectList from "./projectlist"
import Categories from "./Categories"


const ProjectsStyle = styled.div`
  display: inline-block;
  position: relative;
  
  `
export function Projects(props){
  const [projectItems, setprojectItems] = useState(items);
  const [categories, setcategories] = useState([]);

  return ( <ProjectsStyle>
    <h2>These are my projects</h2>

    <Categories />
    <ProjectList items={projectItems}/>
 
  </ProjectsStyle>
  )
}