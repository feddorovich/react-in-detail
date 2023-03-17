import React, {useReducer, useState} from "react";

type AccordionPropstype = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropstype) {

    let [collapsed, setСollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setСollapsed(!collapsed)}}/>

            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {
        props.onClick()
    }}>-- {props.title} --</h3>
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

export default UncontrolledAccordion;