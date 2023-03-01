import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('OnOff was changed');

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnOffGreen = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnOffGreen.args = {
    status: true,
};

export const OnOffRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnOffRed.args = {
    status: false,
};

export const ControlledOnOff = Template.bind({});
ControlledOnOff.args = {
    status: true,
    changeStatus: callback//////////////////////////////////useState
};
