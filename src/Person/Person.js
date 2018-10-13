import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click} className='Person'>Im {props.name} and i am {props.age} years old!</p>
            
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name}
            style={{'backgroundColor':'red'}}
            />
        </div>
    
    )
}

export default person;