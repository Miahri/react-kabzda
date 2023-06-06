import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export function SetTimeoutExample () {
    const [count, setCount] = useState(0);
    const [fake, setFake] = useState(0);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            document.title = count.toString();
        }, 1000)

        return () => {
            clearTimeout(timeoutID);
        }
    }, [])

    return <>
        <button onClick={() => setCount(() => count + 1)}>Count</button>
        <button onClick={() => setFake(() => fake + 1)}>Fake</button>
        {count + ' ' + fake}
    </>
}

export function SetIntervalExample () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCount(state => state + 1)
        }, 1000)

        return () => {
            clearTimeout(intervalID);
        }
    }, [])

    return <>
        {count}
    </>
}

export function KeysTrackerExample () {
    const [text, setText] = useState('');

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler);

        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export function ResetEffectExample () {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Effect occured:' + counter)

        return () => {
            console.log('RESET EFFECT')
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter {counter} <button onClick={increase}>+</button>
    </>
}