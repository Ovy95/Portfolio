import React from 'react'

import './DrawerToggleButton.css'

export function DrawerToggleButton( {setShow} ) {
  return (
    <button className="toggle-button" onClick={()=>setShow(true)}> 
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
    )
}
