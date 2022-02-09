import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../Images/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import AddIcon from '@material-ui/icons/Add'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <MenuIcon/>
            <img className='header-logo' src = {logo} alt = "logo" />
        </div>
        <div className='header-input'>
            <input type="text" placeholder='Search'/>
            <SearchIcon className='header-input-button' />
        </div>
        <div className='header-icons'>
            <AddIcon className='header-icon'/>
            <NotificationsIcon  className='header-icon'/>
            <Avatar src = "" alt = "user" className='header-icon' />
        </div> 
    </div>
  )
}

export default Header