import React, {useMemo, useState} from "react";

export default {
    title: 'UseState demo'
}

function generateData() {
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)
    // Передача функции сразу в useState работает так же, как useMemo с передачей в него функции

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}