import React from 'react';
import './home.css';
import Header from '../../components/Header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Listing from '../../components/listing/Listing';
import Footer from '../../components/footer/footer';

function home() {
  return (
    <div>
      <Header />
      <div className='homepage'>
        <Listing/>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  )
}

export default home