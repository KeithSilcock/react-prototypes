import React from 'react';
import Table from './table';

const students=[
    {name: "christopher Robin",
        course: 'Math',
        grade: 45},
    {name: "Dorkinson Robins",
        course: 'Cats',
        grade: 40},
    {name: "man mcman",
        course: 'Man',
        grade: 95},
]

export default () => {
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}