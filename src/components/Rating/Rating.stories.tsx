import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const callback = action('Rating was changed');

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyRating.args = {
    value: 0,
};

export const Rating1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating1.args = {
    value: 1,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
};

export const ChangeRating = Template.bind({});
ChangeRating.args = {
    value: 2,
    setValue: callback//////////////////////////////////useState
};
