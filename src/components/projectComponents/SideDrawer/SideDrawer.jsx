import React from 'react'

import './SideDrawer.css'

export function SideDrawer( {setShow} ) {
  return (
    <div className="side-drawer">
      <button onClick={()=>setShow(false)}>X Close the side bar</button>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </div>
  )
}

