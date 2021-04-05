import React from 'react'
import { DrawerToggleButton } from "../SideDrawer/DrawerToggleButton";

import './Toolbar.css'
import styled from "styled-components";

const Div1 = styled.div`
position: absolute;
z-index: 10;
`


export function Toolbar( {show,setShow} ) {

  return (
    <Div1>
  <header className="toolbar ">
    <nav className="toolbar__navigation">
      <div classname="ToggleButtonForStateChange">
        <DrawerToggleButton show={show} setShow={setShow} />
      </div>

      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>

          </li>
          <li>

          </li>
        </ul>
      </div>
    </nav>
  </header>
</Div1>
  )
}

