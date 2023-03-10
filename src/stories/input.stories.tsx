import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input',
/*  component: Button,*/
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>)=> {
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
  const save = ()=>{
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return (
      <><input ref={inputRef}/> <button onClick={save}>Save</button> - actual value: {value}</>
  )
}

export const ControlledInput = () => <input value={'CONTROL'}/>


