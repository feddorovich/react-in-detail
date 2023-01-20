import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <div>Hello World</div>
            <div><Rating /></div>
            <div><Accordion /></div>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div><Star /></div>
            <div><Star /></div>
            <div><Star /></div>
            <div><Star /></div>
            <div><Star /></div>
        </div>
    );
}

function Star() {
    return (
        <div>
            <div>Star</div>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
