import React from 'react'
import './SidebarRow.css'
const SidebarRow = ({selected,Icon,title}) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className= "sidebarRow-icon"/>
        <h1 className='sidebarRow-title'>{title}</h1>
    </div>
  )
}

export default SidebarRow