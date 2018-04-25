import React from 'react';
import ReactDOM from 'react-dom';

function getRandNumBetween(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}

function luckyNumber(){
    return getRandNumBetween(1,1000);
}

var user = {
    name: "Christopher Robin",
    luckyNumber: luckyNumber(),
}

function greeting(user) {
    let container = (
        <div className='container'>
            <h1>Hello, {user.name}! We hope you enjoy your stay!</h1>
            <h2 className='text-muted'>Your fortune favors you! Your lucky number is: {user.luckyNumber}</h2>
        </div>
    );
    return container;
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
