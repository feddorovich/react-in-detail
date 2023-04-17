import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render & every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter}
            <button onClick={() => {
                setCounter(state => state + 1)
            }}>+
            </button>
        </>
    );
};

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    );
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('ResetEffectExample')

    useEffect(() => {
        console.log('Effect occurred')
    }, [])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    );
};