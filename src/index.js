import React from 'react';
import ReactDOM from 'react-dom';
import './web.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name: 'Home',
        color: 'red',
        gambar: 'red.png'
    },

    {
        name: 'Tab 2',
        color: 'yellow',
        gambar: 'yellow.png'
    },

    {
        name: 'Tab 3',
        color: 'green',
        gambar: 'green.png'
    },

    {
        name: 'Tab 4',
        color: 'blue',
        gambar: 'blue.png'
    },
];

ReactDOM.render(<App items={items} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();