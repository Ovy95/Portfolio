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
  const allCategories = ['all',...new Set(items.map((item)=> item.category))]

export function Projects(props){
  const [projectItems, setProjectItems] = useState(items);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setProjectItems(items)
      return
    }
  const newItems = items.filter((item) => item.category === category)
    setProjectItems(newItems)
  }

  return ( <ProjectsStyle>
    <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <ProjectList items={projectItems}/>
 
  </ProjectsStyle>
  )
}