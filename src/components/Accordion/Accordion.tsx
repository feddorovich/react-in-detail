import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropstype = {
    /**
     * Сюда можно записать значение, которое будет прочитано документацией <br>
     * Ctrl+Q или при наведении
     */
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any)=> void
}

export function Accordion(props: AccordionPropstype) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
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

type AccordionBodyPropstype = {
    items: ItemType[]
    onClick: (value: any)=> void
}

function AccordionBody(props: AccordionBodyPropstype) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={()=>{ props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}