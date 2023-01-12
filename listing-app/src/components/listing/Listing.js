import React from 'react';
import ListingItem from '../listing-item/ListingItem';
import './Listing.css';

function Listing() {
  const listingItemArr = [
    {
      id:1,
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Four Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Awesome Duplex',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:3,
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Five Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:4,
      image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Four Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:5,
      image: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Awesome Duplex',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:6,
      image: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Five Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    }
  ]

  const listingItems = listingItemArr.map((item)=>{
    // console.log(item)
    return (
      <ListingItem key={item.id} image={item.image} listingTitle={item.listingTitle} description={item.description} />
    )
  });
  return (
    <div className='listing-section'>
      {listingItems}
    </div>
  )
}

export default Listing