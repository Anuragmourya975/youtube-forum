import React from 'react'
import Card from '../Components/Card/Card';
import Login from '../Components/Login/Login';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar'
import './Component.css'
const Component = () => {
  return (
    <div className='component'>
        <Header/>
        <div className='component-page'>
            <Sidebar />
            <Card/>
        </div>
    </div>
  )
}
export default Component;
