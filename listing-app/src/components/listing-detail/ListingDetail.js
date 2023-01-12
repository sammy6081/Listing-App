import React from 'react';
import './ListingDetail.css';

function ListingDetail(props) {
  return (
    <div className='listing-detail'>
        <div className='listing-detail-content'>
            <img className='listing-detail-img' src='https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
            <h1 className='listing-detail-title'>
                Awesome properties available
                <div className='listing-detail-action'>
                    <i className="listing-detail-action-icon fas fa-edit"></i>
                    <i className="listing-detail-action-icon fas fa-trash-alt"></i>
                </div>
            </h1>
            <div className='listing-detail-meta-info'>
                <span className='listing-detail-author'> Author- <strong>Larry James</strong></span>
                <span className='listing-detail-time'>1 day ago</span>
            </div>
            <p className='listing-detail-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ipsum voluptates debitis. Similique repudiandae inventore voluptas praesentium labore! Corrupti, animi illum quia fuga, odio corporis tempore perferendis earum tenetur officiis error! Ex nostrum optio culpa ipsum veritatis eius consequatur, esse, rem deserunt excepturi illum debitis eveniet error non. Ullam fuga neque fugit, beatae quia praesentium vero, fugiat earum eveniet provident sunt sapiente hic vel illum, consequuntur consequatur minima magnam amet? Aut, repellat asperiores? In, corporis corrupti vel repellat officiis et voluptatem pariatur? Officiis delectus ratione et blanditiis distinctio nostrum repudiandae eaque cumque deserunt, autem aliquid facilis quibusdam corrupti laboriosam. Dolores nisi adipisci sapiente pariatur qui maxime quaerat consequatur sunt voluptatem, quam possimus quibusdam maiores voluptates, explicabo doloremque modi rem dolorem labore quidem nihil corporis animi? Excepturi aperiam placeat assumenda hic aliquid nihil, consequuntur adipisci alias nostrum, officiis sequi esse perferendis rem reiciendis. Facilis, dignissimos laborum excepturi praesentium quae sunt exercitationem voluptatibus consectetur, odit, iure esse similique. Omnis optio debitis modi reiciendis, placeat, repellat dicta, illum impedit maxime ullam hic a fugiat possimus quibusdam officia corrupti expedita quaerat sit! Atque voluptatum mollitia blanditiis sit officiis recusandae maiores dolorum doloribus consectetur. Animi dolores beatae illo tempore sint libero eligendi veniam incidunt repellat.
            </p>
        </div>
    </div>
  )
}

export default ListingDetail