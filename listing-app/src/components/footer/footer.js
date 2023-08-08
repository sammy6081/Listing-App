import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function footer() {
return (
    <div>
        <footer>
        <div class="footer-center flex">
        <div class="logo-con">
            <img className='footer-logo' src={require('../../images/Webwise_logo.png')} alt='logo'/>
        </div>
        <div class="list">
            <h5>quick links</h5>
            <Link to={'#'}>home</Link>
            <Link to={'#'}>properties</Link>
            <Link to={'#'}>about</Link>
            <Link to={'#'}>features</Link>
            <Link to={'#'}>contact</Link>
        </div>
        <div class="list">
            <h5>resourses links</h5>
            <Link to={'#'}>tracking tags</Link>
            <Link to={'#'}>privacy</Link>
            <Link to={'#'}>legals</Link>
        </div>
        <div class="list-3">
            <h5>we accept folowing payment methods</h5>
            <div class="method-con">
                <div class="method">
                    <img className='footer-logo' src={require('../../images/bitcoin.png')} alt='logo'/>
                </div>
                <div class="method">
                    <img className='footer-logo' src={require('../../images/visa.png')} alt='logo'/>
                </div>
                <div class="method">
                    <img className='footer-logo' src={require('../../images/mastercard.png')} alt='logo'/>
                </div>
            </div>
            </div>
        </div>
        <div class="footer-foot">
            <p>
            copyright &copy; YourRealtor
            <span id="date">2023</span>. all rights reserved
            </p>
            <div class="icons">
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faXTwitter}/>
                <FontAwesomeIcon icon={faLinkedin}/>
            </div>
        </div>
    </footer>
    </div>
)
}

export default footer