import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering")
    return (
        <div>
            <div><AppTitle/></div>
            <div><Rating/></div>
            <div><Accordion/></div>
            <div><Rating/></div>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
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
            <div><Star/></div>
            <div><Star/></div>
            <div><Star/></div>
            <div><Star/></div>
            <div><Star/></div>
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

export default App;
