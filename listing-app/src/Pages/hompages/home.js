import React from 'react';
import './home.css';
import Header from '../../components/Header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Listing from '../../components/listing/Listing';

function home() {
  return (
    <div>
      <Header />
      <div className='homepage'>
        <Listing/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default home