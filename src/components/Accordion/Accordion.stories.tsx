import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} setCollapsed={action('clicked')}/>
export const UncollapsedMode = () => <Accordion title={'Users'} collapsed={false} setCollapsed={action('clicked')}/>
export const OnOffChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return <Accordion title={'Value'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}