import React from "react";

type AccordionPropstype = {
    /**
     * Сюда можно записать значение, которое будет прочитано документацией <br>
     * Ctrl+Q или при наведении
     */
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropstype) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e)=>props.onChange()}>-- {props.title} --</h3>
    )
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