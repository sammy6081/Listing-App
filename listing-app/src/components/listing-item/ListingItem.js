import React from 'react';
import './listingItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ListingItem(props) {


  return (
    <div class="card-container">
      <a href="/" class="hero-image-container">
        <img class="hero-image" src={props.image} alt="property"/>
      </a>
      <div class="main-content">
        <h1>{props.listingTitle}</h1>
        <h3><Link to={'/detail'}>learn more <span>
            <FontAwesomeIcon icon={faArrowRight}/>
          </span></Link></h3>
        <p>
          {props.description}
        </p>
        <div class="flex-row">
          <div class="coin-base">
            <h2>{props.price}</h2>
          </div>
          <div class="time-left">
            <FontAwesomeIcon icon={faClock}/>
            <p>{props.time} <span>ago</span></p>
          </div>
        </div>
      </div>
      <div class="card-attribute">
        <img src={props.avatar} alt="avatar" class="small-avatar"/>
        <p>Uploaded by {props.name}</p>
      </div>
    </div>
  )
  // return (
  //   <div className='listing-Item'>
  //       <img className='listing-img' src={props.image} alt=''/>
  //       <div className='item-details'>
  //           <div className='listing-categories'>
  //               <span className='listing-category'>Buy</span>
  //               <span className='listing-category'>Sell</span>
  //           </div>
  //           <span className='listing-title'>
  //             <Link to={'/detail'}>{props.listingTitle}</Link>
  //           </span>
  //           <hr></hr>
  //           <span className='listing-time'>2 days ago</span>
            
  //       </div>
  //       <p className='listing-description'>
  //           {props.description}
  //       </p>
  //   </div>
  // )
}

export default ListingItem