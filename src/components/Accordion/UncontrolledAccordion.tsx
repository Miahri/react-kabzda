import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitleType) {
    return(
        <h3 onClick={props.onClick}>{props.title}</h3>
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