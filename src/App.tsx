import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontroledOnOff from "./components/OnOff/UncontroledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontroledRaring} from "./components/Rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState(false)

    return (
        <div className={'App'}>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <br/> <br/> <br/>
            <UncontroledRaring/>
            <br/> <br/> <br/>
            <Accordion titleValue={'Control Menu'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <br/> <br/> <br/>
            <UncontrolledAccordion titleValue={'UnControl Menu'}/>
            <br/> <br/> <br/>
            <OnOff value={on} onClick={setOn}/>
            <br/> <br/> <br/>
            <UncontroledOnOff/>
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