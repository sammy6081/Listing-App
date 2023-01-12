import React from 'react';
import './MenuNav.css';
import { NavLink } from 'react-router-dom';

function MenuNav() {
  return (
    <div className='menu-nav'>
        <ul className='menu-nav-list'>
            <li className='menu-nav-list-item'>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className='menu-nav-list-item'>About</li>
            <li className='menu-nav-list-item'>Contact</li>
            <li className='menu-nav-list-item'>
                <NavLink to={'/create'}>Create property</NavLink>
            </li>
            <li className='menu-nav-list-item'>Log-out</li>
        </ul>
        <button className='cancel-button'>
            <NavLink to={'/'}><i className='cancel-button-icon fas fa-times'></i></NavLink>
        </button>
    </div>
  )
}

export default MenuNav