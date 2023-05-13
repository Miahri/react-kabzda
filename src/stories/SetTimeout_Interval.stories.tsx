import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export function SetTimeoutExample () {
    const [count, setCount] = useState(0);
    const [fake, setFake] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            document.title = count.toString();
        }, 1000)
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
        setInterval(() => {
            setCount(state => state + 1)
        }, 1000)
    }, [])

    return <>
        {count}
    </>
}