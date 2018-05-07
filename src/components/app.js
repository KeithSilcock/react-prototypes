import React from 'react';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import {
    Route,
    Link
} from 'react-router-dom';

export default (props) => {
    return(
        <div className="container">
            <Nav/>
            <h1>hi</h1>
            <Route exact path='/' component={Welcome}/>
            <Route path='/our-macarons' component={OurMacarons}/>
        </div>

    )
}

