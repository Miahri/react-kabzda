import './OnOff.css';
import {useState} from "react";

export const UncontrolledOnOff = () => {
    const [on, setOn] = useState(false);

    const onHandler = () => setOn(true);
    const offHandler = () => setOn(false);

    return (
        <div>
            <button className={on ? "btn green" : 'btn'} onClick={onHandler}>On</button>
            <button className={on ? "btn" : 'btn red'} onClick={offHandler}>Off</button>
            <div className={on ? "circle green" : "circle red"}></div>
        </div>
    )
}