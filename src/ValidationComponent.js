import React from 'react';

//this is a functional component that validates the length of the message and displays a message accordingly
const validationComponent = (props) => {
    let message;
    if(props.length < 5) {
        message = "Too Short!";
    }
    else {
        message = "Long Enough!";
    }
    return <p>{message}</p>
};

export default validationComponent;

