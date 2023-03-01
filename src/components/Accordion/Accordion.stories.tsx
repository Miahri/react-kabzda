import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedTrue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapsedTrue.args = {
    title: 'Menu',
    collapsed: true
};

export const CollapsedFalse = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapsedFalse.args = {
    title: 'Users',
    collapsed: false
};
