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
        const str = event.target.value;
        this.setState({enteredString: str});
    };

    charClickHandler = (index) => {
        let currentString = this.state.enteredString;

        // convert the state string to an array
        let charsArray = currentString.split('');
        //remote the one at index
        charsArray.splice(index, 1);
        
        //re-build the string from the modified array
        const newValue = charsArray.join('');
        this.setState({enteredString: newValue});
    };

    render() {
        let charComponents;

        //split up the entered string into an array
        const stateString = this.state.enteredString;
        let charsArray = stateString.split('');
        charComponents = (
            <div>
                {
                    charsArray.map((character, index) => {
                        return <CharComponent 
                            key = {index}
                            char = {character} 
                            onClick = {() => this.charClickHandler(index)}/>
                    })
                }
            </div>
        );

        return (
            <div className="App">
              <h1>Assignment 2</h1>
              <input type="text"
                onChange = {this.textChangeListener} />
                <p>Entered string length is {this.state.enteredString.length}</p>
                <div>
                    <ValidationComponent length = {this.state.enteredString.length} />
                </div>
                {charComponents}
            </div>
          );
    }
}

export default AppAssignment;