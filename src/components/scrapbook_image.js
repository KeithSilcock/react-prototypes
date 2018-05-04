import React from 'react';

export default (props) => {
    const {src, style} = props.about

    return(
        <img src={src} className='scrapbook-image' style={style} alt=""/>
    )
}