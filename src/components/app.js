import React, {Component} from 'react';
import ContactList from './contactList'
import ContactForm from "./contact_form";
import contactData from '../data/contacts';

class App extends Component {
    constructor(props) {
        super(props);

        this.state={
            contacts:contactData,
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        )
    }
}

export default App