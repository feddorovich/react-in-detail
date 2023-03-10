import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('Accordion changed');
const onClickCallback = action('Item clicked');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>;
export const UserUnCollapsedMode = () => <Accordion titleValue={'Users'}
                                                    collapsed={false}
                                                    onChange={callback}
                                                    items={[{title: 'Name 1', value: 1},
                                                        {title: 'Name 2', value: 2},
                                                        {title: 'Name 3', value: 3},
                                                        {title: 'Name 4', value: 4}
                                                    ]} onClick={onClickCallback}/>

export const ModeChangeing = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[{title: 'Name 1', value: 1},
                          {title: 'Name 2', value: 2},
                          {title: 'Name 3', value: 3},
                          {title: 'Name 4', value: 4}
                      ]} onClick={onClickCallback}/>
}


