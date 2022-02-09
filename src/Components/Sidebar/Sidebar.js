import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import LaptopIcon from '@material-ui/icons/Laptop'
import CodeIcon from '@material-ui/icons/Code'
import AdbIcon from '@material-ui/icons/Adb'
import SchoolIcon from '@material-ui/icons/School'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import InsertChartIcon from '@material-ui/icons/InsertChart'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon = {CodeIcon} title = "Programming Language"/>
        <SidebarRow Icon = {DesktopWindowsIcon} title = "Web Developement" />
        <SidebarRow Icon = {AdbIcon} title = "App Developement"/>
        <SidebarRow Icon = {InsertChartIcon} title = "Data Science"/>
        <SidebarRow Icon = {WhatshotIcon} title = "Tech Updates"/>
        <SidebarRow Icon = {LaptopIcon} title = "DSA"/>
        <SidebarRow Icon = {SchoolIcon} title = "Acadmics"/>
        {/* <hr/> */}
    </div>
  )
}

export default Sidebar