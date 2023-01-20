import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

// function declaration
function App() {
    console.log("App rendering")
    return (
        <div>
            <div><PageTitle title={"This is APP component"}/></div>
            <div><PageTitle title={"My friends"}/></div>
            Article 1
            <div><Rating value={3}/></div>
            <div><Accordion titleValue={"Menu"} collapsed={true}/></div>
            <div><Accordion titleValue={"Users"} collapsed={false}/></div>
            Article 2
            <div><Rating value={0}/></div>
            <div><Rating value={1}/></div>
            <div><Rating value={2}/></div>
            <div><Rating value={3}/></div>
            <div><Rating value={4}/></div>
            <div><Rating value={5}/></div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
