import React ,{useState} from "react";
import styled from "styled-components";

import {AboutMe} from "./aboutMe"
import {ProjectSection } from "./projectsSection"
import {GetInTouch} from "./getinTouch"
import {ExperinceSection} from "./experinceJourney"

import {Toolbar} from "../../components/projectComponents/Toolbar/Toolbar"
import { SideDrawer } from "../../components/projectComponents/SideDrawer/SideDrawer";
import { Backdrop } from "../../components/projectComponents/Backdrop/Backdrop";

const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 0;
`;


export function Homepage(props) {
 
  const [show, setShow] = useState(false) // True is open already
  return  (

  <PageContainer>
         <Toolbar  show={show} setShow={setShow}></Toolbar>
         {show?<SideDrawer setShow={setShow}/>:null}
         {show?<Backdrop></Backdrop>:null}


           <AboutMe/>

          <ExperinceSection/>
           <ProjectSection/>
           <GetInTouch/>

        </PageContainer>

  )
}   
