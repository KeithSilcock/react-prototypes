import React from 'react';
import '../assets/css/app.css';
import ScrapBook from './scrapbook';

class App extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="main-container">
                <h1 className="main-title">Scrapbook</h1>
                <ScrapBook/>
            </div>
        )
    }
}

export default App;