import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";
import {ValueType} from "../../App";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

export const EmptyRating = () => <Rating value={0} setValue={x=>x}/>
export const Rating1 = () => <Rating value={1} setValue={x=>x}/>
export const Rating2 = () => <Rating value={2} setValue={x=>x}/>
export const Rating3 = () => <Rating value={3} setValue={x=>x}/>
export const Rating4 = () => <Rating value={4} setValue={x=>x}/>
export const Rating5 = () => <Rating value={5} setValue={x=>x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<ValueType>(5);

    return <Rating value={5} setValue={setRating}/>
}