import React, {Component} from 'react';
import Field from "./field";

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            form:{
                firstName:'',
                lastName:'',
                phone:'',
                email:'',
            },
            hasEmptyField:false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(event){
        const {value, name} = event.target;
        // const {form} = this.state;
        // form[name] = value;
        this.setState({
            form: {
                [name]: value,
            },
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.form);

        const {firstName, lastName, phone, email} = this.state.form;

        if(firstName !== '' && lastName !== '' &&
            phone !== '' && email !== ''){
            this.setState({
                hasEmptyField:false,
            });
            this.props.addContact(this.state.form);
            this.reset();
        }else{
            this.setState({
                hasEmptyField:true,
            });
            console.log('you have an empty input')
        }
    }
    reset(){
        this.setState({
            form:{
                firstName:'',
                lastName:'',
                phone:'',
                email:'',
            },
            hasEmptyField:false,
        })
    }

    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        const {hasEmptyField} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text"
                       value={firstName} onChange={this.handleInputChange}
                       hasEmptyField={hasEmptyField}/>

                <Field name="lastName" label="Last Name" type="text"
                       value={lastName} onChange={this.handleInputChange}
                       hasEmptyField={hasEmptyField}/>

                <Field name="phone" label='Phone Number' type="text"
                       value={phone} onChange={this.handleInputChange}
                       hasEmptyField={hasEmptyField}/>

                <Field name="email" label="Email" type="text"
                       value={email} onChange={this.handleInputChange}
                       hasEmptyField={hasEmptyField}/>

                <button>Add Contact</button>
                <button type='button' onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;