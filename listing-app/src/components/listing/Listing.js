import React from 'react';
import { useState } from 'react';
import ListingItem from '../listing-item/ListingItem';
import './Listing.css';

function Listing() {
  const [showAll, setShowAll] = useState(false);
  const listingItemArr = [
    {
      id:1,
      price: '$200,000',
      time: '2 weeks',
      name: 'John Doe',
      avatar: 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Four Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:2,
      price: '$480,000',
      time: '11 hrs',
      name: 'John Doe',
      avatar: 'https://cdn.pixabay.com/photo/2021/07/19/03/40/woman-6477110_1280.jpg',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Awesome Duplex',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:3,
      price: '$270,000',
      time: '17 mins',
      name: 'John Doe',
      avatar: 'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Five Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:4,
      price: '$180,000',
      time: '6 days',
      name: 'John Doe',
      avatar: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
      image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Four Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:5,
      price: '$350,000',
      time: '1 mo',
      name: 'John Doe',
      avatar: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
      image: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Awesome Duplex',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    },
    {
      id:6,
      price: '$200,000',
      time: '30 mins',
      name: 'John Doe',
      avatar: 'https://cdn.pixabay.com/photo/2023/02/19/08/39/man-7799486_1280.jpg',
      image: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600',
      listingTitle: 'Five Bedroom flat',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t amet consectetur adipisicing elit. Architecto ex reiciendis labore quidem et vero? Veniam officiis facilis blanditiis,t.'
    }
  ]

  
// making the items reduce if the useState is false
const visibleListingItems = showAll ? listingItemArr : listingItemArr.slice(0, 2);

// creating show all toggle effect
const toggleShowAll = () => {
  setShowAll(!showAll);
};
// render function
  return (
    <div>
      <h1 className='section-heading'>our catalog</h1>
      <div className='listing-section'>
        {visibleListingItems.map(item => (
          <ListingItem
            key={item.id}
            image={item.image}
            price={item.price}
            time={item.time}
            name={item.name}
            avatar={item.avatar}
            listingTitle={item.listingTitle}
            description={item.description}
          />
        ))}
      </div>
      {listingItemArr.length > 2 && (
          <button className='toggle-btn' onClick={toggleShowAll}>{showAll ? 'See Less' : 'See All'}</button>
        )}
    </div>
  )
}

export default Listing