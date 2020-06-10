import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1q70ew', name: 'Max', age: 28 },
      { id: 'qqe545gbbw', name: 'Manu', age: 29 },
      { id: 'qqeqa545w', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //make a copy of the array using the spread operator (to avoid using the same state reference)
    const persons = [...this.state.persons];
    // remove 1 element from the array
    persons.splice(personIndex, 1);
    // now update the state with the modified array
    this.setState({persons: persons});
  };


  nameChangedHandler = (event, id ) => {

    // find the person we want to update, use findIndex on the array to iterate thru each element and compare ID 
    const personIndex  = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Don't mutate the state directly so create a new instance of the person object
    const person = {
      // use the spread operator to extract all properties of the object and create a copy of it
      ...this.state.persons[personIndex] 
    }   

    // now update the name of the person from the event object
    person.name = event.target.value;

    // now update the array, first get a copy of the array from state
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // conditionally show elements
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            // iterate thru the array of persons and return an array of <Person> elements
            this.state.persons.map((person, index) => {
              return <Person 
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)} // pass an anonymous function call
                changed = {(event) => this.nameChangedHandler(event, person.id)}
                />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
