import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // Hooks
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 27},
      {name: 'Stephanie', age: 29}
    ],
    cars: {
      amount: 3,
      value: 1600
    }
  });

  //yes, a function within a function
  const switchNameHandler = () => {
    setPersonsState( 
      {
        persons:  [
          {name: 'Pip', age: 128},
          {name: 'Elk', age: 227},
          {name: 'Zorb', age: 2229}
        ]
    });
  };

    return (
      <div className="App">
        <h1>HI, I'm a React app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My hobbies are: Racing </Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div>
    );
}

export default app;


