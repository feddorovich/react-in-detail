import React, {useState} from 'react';
import {UncontroledRaring, RatingValueType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontroledRaring',
    component: UncontroledRaring
};

const callback = action('rating changed')

export const EmtyRating = () => <UncontroledRaring defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontroledRaring defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontroledRaring defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontroledRaring defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontroledRaring defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontroledRaring defaultValue={5} onChange={callback}/>
