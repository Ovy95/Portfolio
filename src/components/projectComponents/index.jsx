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
  const [projectItems, setProjectItems] = useState(items);
  const [categories, setcategories] = useState([]);

  const filterItems = (category) => {
    if(category === 'all'){
      setProjectItems(items)
      return
    }
  const newItems = items.filter((item) => item.category === category)
    setProjectItems(newItems)
  }

  return ( <ProjectsStyle>
    <h2>These are my projects</h2>

    <Categories filterItems={filterItems}/>
    <ProjectList items={projectItems}/>
 
  </ProjectsStyle>
  )
}