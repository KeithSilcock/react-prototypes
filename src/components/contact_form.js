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
            emptyInput:false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleBlurInput=this.handleBlurInput.bind(this);
    }
    handleInputChange(event){
        // console.log(event.target.value)
        // console.log(event.target.name)
        const {value, name} = event.target;
        const {form} = this.state;

        form[name] = value;
        this.setState({
            form:form,
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.form);
        this.props.addContact(this.state.form);
        this.reset();
    }
    handleBlurInput(event){
        if(event.target.value === ''){
            this.setState({
                emptyInput:true
            })
        }else{
            this.setState({
                emptyInput:false
            })
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
            emptyInput:false,
        })
    }

    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        const {emptyInput} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text"
                       value={firstName} onChange={this.handleInputChange}
                       onBlur={this.handleBlurInput} errorState={emptyInput}/>

                <Field name="lastName" label="Last Name" type="text"
                       value={lastName} onChange={this.handleInputChange}
                       onBlur={this.handleBlurInput} errorState={emptyInput}/>

                <Field name="phone" label='Phone Number' type="text"
                       value={phone} onChange={this.handleInputChange}
                       onBlur={this.handleBlurInput} errorState={emptyInput}/>

                <Field name="email" label="Email" type="text"
                       value={email} onChange={this.handleInputChange}
                       onBlur={this.handleBlurInput} errorState={emptyInput}/>

                <button>Add Contact</button>
                <button type='button' onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;