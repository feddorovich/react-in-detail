import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('Accordion changed');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>;
export const UserUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>

export const ModeChangeing = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}


