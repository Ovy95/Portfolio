import React from 'react'
import { DrawerToggleButton } from "../SideDrawer/DrawerToggleButton";
import { SideDrawer } from "../SideDrawer/SideDrawer";
import './Toolbar.css'

export function Toolbar( {show,setShow} ) {

  return (
  <header className="toolbar ">
    <nav className="toolbar__navigation">
      <div classname="ToggleButtonForStateChange">
        <DrawerToggleButton show={show} setShow={setShow} />
      </div>
      <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

