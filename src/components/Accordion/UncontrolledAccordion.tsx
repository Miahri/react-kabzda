import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (status: boolean) => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const onOffHandler = () => {props.collapsed ? props.setCollapsed(false) : props.setCollapsed(true)};

    return (
        <div>
            <AccordionTitle title={props.title} onOffHandler={onOffHandler}/>
            {props.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onOffHandler: () => void
}
function AccordionTitle(props: AccordionTitleType) {

    return(
        <h3 onClick={props.onOffHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}