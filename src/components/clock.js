import React from 'react';
import {connect} from 'react-redux';
import {updateTime} from "../actions";
import {setTime} from "../actions";

class Clock extends React.Component{

    componentWillMount(){
        setInterval(
            this.props.setTime,
        )
    }

    render(){
        return(
            <div className="text-center mt-5">
                <h1>{this.props.time}</h1>
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