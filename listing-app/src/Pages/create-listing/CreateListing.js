import React from 'react';
import './CreateListing.css';


function CreateListing() {
  return (
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
                <input autoFocus={true} type='text' placeholder='Property title' className='create-listing-text'/>
                    <label htmlFor='listingImg' className='upload-create-listing-img'>
                        <i className='upload-icon fas fa-upload'></i>
                    </label>
                <input type='file' id='listingImg' className='create-listing-img' style={{display: 'none'}}/>
            </div>
            <div className='create-listing-form-group'>
                <textarea className='create-listing-text create-listing-desc' spellCheck={false} placeholder='Property description'></textarea>
            </div>
        </form>
        <button className='create-listing-button'>
            Submit
        </button>
    </div>
  )
}

export default CreateListing