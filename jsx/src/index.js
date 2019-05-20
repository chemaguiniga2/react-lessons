//Import the react and react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = function () {
    const buttonText = {text: 'Click me!'};
    return (
        <div>
            <label htmlFor="name" className="label">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}} >{buttonText.text}</button>
        </div>
    );
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);