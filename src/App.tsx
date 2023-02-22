import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontroledRaring} from "./components/Rating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <br/> <br/> <br/>
            <UncontroledRaring/>
            <br/> <br/> <br/>
            <Accordion titleValue={'Control Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <br/> <br/> <br/>
            <UncontrolledAccordion titleValue={'UnControl Menu'}/>
            <br/> <br/> <br/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;