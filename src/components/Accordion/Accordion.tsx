import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    title: string
}
function AccordionTitle(props: AccordionTitleType) {
    return(
        <h3>{props.title}</h3>
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