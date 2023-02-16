import React, {useState} from "react";

type AccordionPropstype = {
    titleValue: string
}

function Accordion(props: AccordionPropstype) {

    let [collapsed, setСollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{setСollapsed(!collapsed)}}>TOGGLE</button>
            { !collapsed && <AccordionBody/> }
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>-- {props.title} --</h3>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;