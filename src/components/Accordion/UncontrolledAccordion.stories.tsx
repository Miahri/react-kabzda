import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action('Rating was changed');

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const CollapsedTrue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapsedTrue.args = {
    title: 'Menu',
    collapsed: true,
    setCollapsed: callback////////////////////////useState
};
