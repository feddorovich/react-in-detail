import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    /*  component: Button,*/
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actialValue = event.currentTarget.value
        setValue(actialValue)
    }
    return (
        <><input onChange={onChange}/> - {value}</>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <><input ref={inputRef}/>
            <button onClick={save}>Save</button>
            - actual value: {value}</>
    )
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChangeHandler}/>

}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>None</option>
        <option>Minsk</option>
        <option>Moscow</option>
        <option>Kiev</option>
    </select>
}



