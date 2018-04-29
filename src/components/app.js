import React from 'react';
import ContactList from './contactList'

export default () => {
    return(
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <ContactList/>
            </div>
        </div>
    )
}