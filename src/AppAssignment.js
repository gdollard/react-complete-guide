import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';

class AppAssignment extends Component {
    state = {
        enteredString: ""
    };

    // outputs the length of the entered text
    textChangeListener = (event) => {
        this.setState({enteredString: event.target.value});
    };

    charClickHandler = (index) => {
        // convert the state string to an array
        let charsArray = this.state.enteredString.split('');
        //remote the one at index
        charsArray.splice(index, 1);
        
        //re-build the string from the modified array
        const newValue = charsArray.join('');
        this.setState({enteredString: newValue});
    };

    render() {
        let charComponents;

        //split up the entered string into an array and produce a list of CharComponents
        const stateString = this.state.enteredString;

        const charList = stateString.split('').map((character, index) => {
            return <CharComponent 
                key = {index}
                char = {character} 
                onClick = {() => this.charClickHandler(index)}/>
        });

        return (
            <div className="App">
              <h1>Assignment 2</h1>
              <input type="text"
                onChange = {this.textChangeListener}
                value = {this.state.enteredString} />
                <p>Entered string length is {this.state.enteredString.length}</p>
                <div>
                    <ValidationComponent length = {this.state.enteredString.length} />
                </div>
                {charList}
            </div>
          );
    }
}

export default AppAssignment;