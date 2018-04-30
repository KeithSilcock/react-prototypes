import React from 'react';
import SignIn from './sign_in';
import {myNewFunction} from './sign_in'

class App extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <SignIn/>
            </div>
        )
    }
}
export default App;

// export default (props) => {
//     return(
//         <SignIn/>
//     )
// }
