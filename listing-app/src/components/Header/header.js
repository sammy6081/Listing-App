import React from 'react';
import './header.css';

function header() {
  return (
    <div className='header-section'>
        <div className='hero-text'>
            <span className='hero-text-title'>Marketplace</span>
            <span className='hero-text-subtitle'>Property Listing</span>
        </div>
        <img className='hero-img' src='https://images.pexels.com/photos/966397/pexels-photo-966397.jpeg?auto=compress&cs=tinysrgb&w=600' alt='nature img'/>
    </div>
  )
}

export default header