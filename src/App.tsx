import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontroledRaring} from "./components/Rating/UncontrolledRating";

function App() {
    console.log("App rendering")
    return (
        <div className={'App'}>
            <UncontrolledAccordion titleValue={'Menu'} />
            <br/>
            <UncontroledRaring />
            <br/>
            <OnOff/>
            <OnOff/>
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