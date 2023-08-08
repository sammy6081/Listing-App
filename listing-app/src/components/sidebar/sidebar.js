import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function sidebar() {
  return (
    <div className='sidebar-section'>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>about me</span>
            <img className='sidebar-img' src='https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile-pic'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.</p>
        </div>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>categories</span>
            <ul className='sidebar-categories'>
                <li className='sidebar-category'>Buy</li>
                <li className='sidebar-category'>Sell</li>
                <li className='sidebar-category'>Rent</li>
                <li className='sidebar-category'>Hostel</li>
                <li className='sidebar-category'>Lounge</li>
                <li className='sidebar-category'>B & B</li>
            </ul>
        </div>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>follow us on</span>
            <div className='sidebar-social-icons'>
                <FontAwesomeIcon className='topbar-social-icon' icon={faInstagram}/>
                <FontAwesomeIcon className='topbar-social-icon' icon={faXTwitter}/>
                <FontAwesomeIcon className='topbar-social-icon' icon={faFacebook}/>
                <FontAwesomeIcon className='topbar-social-icon' icon={faLinkedin}/>
            </div>
        </div>
    </div>
  )
}

export default sidebar