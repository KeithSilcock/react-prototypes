import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;

        this.setState({
            [name]:value,
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);

        this.setState({
            email:'',
            password:'',
        })
    }

    render(){
        const {email, password} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email</label>
                    <input value={email} name='email' type="text" onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} name='password' type="password" onChange={this.handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
export default SignIn;