import React from 'react'
import './TopBar.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook,faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
        <img className='topbar-logo' src={require('../../images/Webwise_logo.png')} alt='logo'/>
            <div>
                <FontAwesomeIcon className='topbar-social-icon' icon={faInstagram}/>
                <FontAwesomeIcon className='topbar-social-icon' icon={faXTwitter}/>
                <FontAwesomeIcon className='topbar-social-icon' icon={faFacebook}/>
                <FontAwesomeIcon className='topbar-social-icon' icon={faLinkedin}/>
            </div>
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
            <div className='topbar-right'>
                <img className='topbar-profile' src='https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile-pic'/>
                <FontAwesomeIcon className='topbar-search' icon={faMagnifyingGlass}/>
                <button className='menu-button'>
                    <NavLink to={'/MenuNav'}><FontAwesomeIcon className='menu-button-icon' icon={faBars}/></NavLink>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default TopBar