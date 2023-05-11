import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export function UseEffectExample () {
    //remembers the value returned by the function and protects against unnecessary recalculation
    const [count, setCount] = useState(0);
    const [fake, setFake] = useState(0);

    //every render
    useEffect(() => {
        document.title = count.toString();
    })

    //only first render
    useEffect(() => {
        document.title = count.toString();
    }, [])

    //every render and count change
    useEffect(() => {
        document.title = count.toString();
    }, [count])

    return <>
        <button onClick={() => setCount(() => count + 1)}>Count</button>
        <button onClick={() => setFake(() => fake + 1)}>Fake</button>
        {count + ' ' + fake}
    </>
}