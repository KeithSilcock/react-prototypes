import React, {Component} from 'react';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }
    handleInputChange(event){
        const {name, value} = event.target;

        this.setState({
            [name]:value,
        })
    }
    handleSignIn(e){
        e.preventDefault();
        console.log(e)
        //This is where we'd send the data to the server

        const newState = {
            email:'',
            password:'',
        };
        this.setState(newState)
    }

    render(){
        const {email, password} = this.state;

        return(
            <form onSubmit={this.handleSignIn}>
                <h1>Sign me in!</h1>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} name='email'
                           onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} name='password'
                    onChange={this.handleInputChange}/>
                </div>
                <button>Sign In</button>
            </form>
        )
    }
}

export default SignIn;