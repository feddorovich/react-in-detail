import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropstype = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropstype) {

    // let [collapsed, setСollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setСollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_COLLAPSED})}}/>

            {!state.collapsed && <AccordionBody/>}
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