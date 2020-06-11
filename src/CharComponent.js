import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {

    return (
        <div className="CharComponent">
            <input 
                type="text" 
                defaultValue = {props.char}
                onClick = {props.onClick}/>
        </div>
    );
};

export default charComponent;