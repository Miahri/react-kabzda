import React, {useState} from 'react';
import {ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {ValueType} from "../../App";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

export const OnMode = () => <OnOff status={true} changeStatus={action('clicked')}/>
export const OffMode = () => <OnOff status={false} changeStatus={action('clicked')}/>
export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <OnOff status={value} changeStatus={setValue}/>
}