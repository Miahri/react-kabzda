import React, {useState} from "react";

export default {
    title: 'useState'
}

function generateData () {
    //difficult counting
    return 2125445545252;
}

export function Counter () {
    //remembers the value returned by the function and protects against unnecessary recalculation
    const [count, setCount] = useState(generateData);

    return <>
        <button onClick={() => setCount(count + 1)}></button>
        {count}
    </>
}