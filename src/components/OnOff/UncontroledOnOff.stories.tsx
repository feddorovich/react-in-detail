import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontroledOnOff} from "./UncontroledOnOff";

export default {
    title: 'UncontroledOnOff',
    component: UncontroledOnOff
};

const callback = action('on/off clicked')

export const OnMode = () => <UncontroledOnOff defaultOn={true} onChange={callback} />
export const OffMode = () => <UncontroledOnOff defaultOn={false} onChange={callback} />
export const BugMode = () => <div>Text</div>
