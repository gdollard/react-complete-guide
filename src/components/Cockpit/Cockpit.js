import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    //takes a function that will run for every render cycle, only run this when our persons change just pass an array with persons in it
    useEffect(() => {
      console.log("[Cockpit.js] useEffect");
      setTimeout(() => {
        alert("Saved data to cloud..");
      }, 1000);

      // return this function which will only be called when the this component is unmounted
      return () => {
        console.log("[Cockpit.js] Cleanup work in useEffect");
      };
    }, []); // empty array parameter means we only run this when the component is rendered and unmounted


    // no second argument so it will run for every upate cycle
    useEffect(() => {
      console.log("[Cockpit.js] 2nd useEffect");
      return () => {
        console.log("[Cockpit.js] Cleanup work in 2nd useEffect");
      };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

// wrap it in a memo to memorise what components have changed, for more efficient rendering
export default React.memo(cockpit);