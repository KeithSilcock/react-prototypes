import React from 'react';
import '../assets/css/scrapbook.css';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_image';

export default (props) => {

    const images = imageData.map( (item, index) => {
        return <ScrapbookImage key={index} about={item} />

    })

    return(
        <div className="scrapbook-container">
            {images}
        </div>
    )
}