import React from 'react';

export default (props)=>{
    let {errorState, ...rest} = props;

    let redFlag='';
    if(rest.value === '' && errorState){
        redFlag = 'bg-danger';
    }

    return(
        <div className="form-group">
            <label>{props.label}</label>
            <input {...rest} className={`form-control ${redFlag}`}/>
        </div>
    )
}

//I went to Eureka fest and worked on react prototypes
//I am currently working on more react prototypes
//I have no blockers