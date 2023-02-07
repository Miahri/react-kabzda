import './OnOff.css';

type ButtonType = {
    onOff: boolean
}

export const OnOff = (props: ButtonType) => {

    return (
        <div>
            <button className={props.onOff ? "btnColor" : ''}>On</button>
            <button className={!props.onOff ? "btnColor" : ''}>Off</button>
            <div className={props.onOff ? "circle green" : "circle red"}></div>
        </div>
    )
}