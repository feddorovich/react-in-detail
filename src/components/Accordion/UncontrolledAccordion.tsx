import React from "react";

type AccordionPropstype = {
    titleValue: string
}

function Accordion(props: AccordionPropstype) {
    console.log("Accordion rendering")

    const collapsed = true;

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !collapsed && <AccordionBody/> }
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
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