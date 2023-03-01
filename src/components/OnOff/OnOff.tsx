import './OnOff.css';
import {useState} from "react";

type OnOffPropsType = {
    status: boolean
    changeStatus: (status: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    const onHandler = () => props.changeStatus(true);
    const offHandler = () => props.changeStatus(false);

    return (
        <div>
            <button className={props.status ? "btn green" : 'btn'} onClick={onHandler}>On</button>
            <button className={props.status ? "btn" : 'btn red'} onClick={offHandler}>Off</button>
            <div className={props.status ? "circle green" : "circle red"}></div>
        </div>
    )
}