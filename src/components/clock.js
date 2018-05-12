import React from 'react';
import {connect} from 'react-redux';
import {updateTime} from "../actions";
import {setTime} from "../actions";

class Clock extends React.Component{
    constructor(props){
        super(props);

        this.clockState = 0;
        this.displayFunc = this.props.updateTime;

    }
    onButtonClick() {
        if(!this.clockState){
            this.displayFunc = this.props.setTime;
            --this.clockState;
        }else{
            this.displayFunc = this.props.updateTime;
            ++this.clockState;
        }
    }
    componentWillMount(){
        setInterval( () => {
            this.displayFunc();
        },1000)
    }

    render(){
        return(
            <div className="text-center mt-5">
                <h1>{this.props.time}</h1>
                <button type='button' className="changeClock" onClick={this.onButtonClick.bind(this)}>Hide clock</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        time: state.clock.time,
    }
}

export default connect(mapStateToProps, {updateTime, setTime})(Clock);