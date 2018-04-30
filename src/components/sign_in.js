import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
        };

        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        console.log(event.target.name)
        console.log(event.target.value)

        const {name, value} = event.target;

        this.setState({
            [name]:value,
        })
    }


    render(){
        return(
            <form>
                <div>
                    <label>Email</label>
                    <input name='email' type="email" onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type="password" onChange={this.handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
export default SignIn;