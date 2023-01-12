import React from 'react'
import './TopBar.css'
import { NavLink } from 'react-router-dom'

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
            <i className="topbar-social-icon fa-brands fa-instagram"></i>
            <i className="topbar-social-icon fa-brands fa-twitter"></i>
            <i className="topbar-social-icon fa-brands fa-facebook-f"></i>
            <i className="topbar-social-icon fa-brands fa-linkedin"></i>
        </div>
        <div className='topbar-center'>
            <ul className='topbar-list'>
                <li className='topbar-list-item'>
                <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className='topbar-list-item'>About</li>
                <li className='topbar-list-item'>Contact</li>
                <li className='topbar-list-item'>
                    <NavLink to={'/create'}>Create property</NavLink>
                </li>
                <li className='topbar-list-item'>Log-out</li>
            </ul>
        </div>
        <div className='topbar-right'>
            <img className='topbar-profile' src='https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile-pic'/>
            <i className="topbar-search fa-solid fa-magnifying-glass"></i>
            <button className='menu-button'>
                <NavLink to={'/MenuNav'}><i className='menu-button-icon fas fa-bars'></i></NavLink>
            </button>
        </div>
    </div>
  )
}

export default TopBar