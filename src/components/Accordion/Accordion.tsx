import React from "react";

type AccordionPropstype = {
    titleValue: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

function Accordion(props: AccordionPropstype) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{props.onClick(!props.collapsed)}}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.onClick(false)}>-- {props.title} --</h3>
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