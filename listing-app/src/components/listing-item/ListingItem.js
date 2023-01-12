import React from 'react';
import './listingItem.css';
import { Link } from 'react-router-dom';

function ListingItem(props) {


  return (
    <div className='listing-Item'>
        <img className='listing-img' src={props.image} alt=''/>
        <div className='item-details'>
            <div className='listing-categories'>
                <span className='listing-category'>Buy</span>
                <span className='listing-category'>Sell</span>
            </div>
            <span className='listing-title'>
              <Link to={'/detail'}>{props.listingTitle}</Link>
            </span>
            <hr></hr>
            <span className='listing-time'>2 days ago</span>
            
        </div>
        <p className='listing-description'>
            {props.description}
        </p>
    </div>
  )
}

export default ListingItem