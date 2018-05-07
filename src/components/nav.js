import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link className='nav-link' to='/'>Welcome</Link>
                <Link className='nav-link' to='/our-macarons'>Our Macarons</Link>
            </li>
        </ul>
    )
}

