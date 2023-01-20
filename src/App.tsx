import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    console.log("App rendering")
    return (
        <div>
            <div><AppTitle /></div>
            <div><Rating /></div>
            <div><Accordion /></div>
            <div><Rating /></div>
        </div>
    );
}

function AppTitle() {
    return (
        <div>
            This is APP component
        </div>
    )
}

function Rating() {
    console.log("Rating rendering")
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
    console.log("Star rendering")
    return (
        <div>
            Star
        </div>
    )
}

function Accordion() {
    console.log("Accordion rendering")
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
