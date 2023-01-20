import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

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

export default App;
