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
        const {value} = this.props;
        const {hasEmptyField, ...rest} = this.props;

        let {redFlag} = this.state;
        if(hasEmptyField && value===''){
            redFlag = 'bg-danger';
        }
        return (
            <div className="form-group">
                <label>{this.label}</label>
                <input {...rest} onBlur={this.handleBlurInput} className={`form-control ${redFlag}`}/>
            </div>
        )
    }
}

export default Field