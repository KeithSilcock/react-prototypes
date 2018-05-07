import React from 'react';
import Welcome from './welcome';
import Nav from './nav';
import {
    Route,
    Link
} from 'react-router-dom';

export default (props) => {
    return(
        <div className="container">
            <Nav/>
            <h1>hi</h1>
            <Route path='/' component={Welcome}/>
        </div>

    )
}

