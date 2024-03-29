import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA;
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 0;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }

            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
