import React, {Component} from 'react';

class Field extends Component{
    constructor(props) {
        super(props);

        this.state= {
            redFlag:''
        };
        this.handleBlurInput = this.handleBlurInput.bind(this);
    }

    handleBlurInput(event){
        if(event.target.value === ''){
            this.setState({
                redFlag:'bg-danger',
            })
        }else{
            this.setState({
                redFlag:'',
            })
        }
    }
    render(){
        let {redFlag} = this.state;
        return (
            <div className="form-group">
                <label>{this.label}</label>
                <input {...this.props} onBlur={this.handleBlurInput} className={`form-control ${redFlag}`}/>
            </div>
        )
    }
}

export default Field