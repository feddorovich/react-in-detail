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

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            Hello, counter: {counter} - fake: {fake}
        </>
    );
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('Reset effect ' + counter)
        }
    }, [counter])

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

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
            // or setText((state) => state + e.key)
            // тогда не нужно писать в зависимости useEffect text
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', (handler))
        }
    }, [text])

    return (
        <>
            Type text: {text}
        </>
    );
};

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('Timeout expired')
            setText('3 sec')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Type text: {text}
        </>
    );
};