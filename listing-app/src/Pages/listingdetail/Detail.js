import React from 'react';
import ListingDetail from '../../components/listing-detail/ListingDetail';
import './Detail.css';
import Sidebar from '../../components/sidebar/sidebar';

function Detail() {
  return (
    <div className='detail-page'>
      <ListingDetail/>
      <Sidebar/>
    </div>
  )
}

export default Detail