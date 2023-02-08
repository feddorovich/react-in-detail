import React from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    value: boolean
}

export const OnOff = (props: OnOffType) => {
    return (
        <div>
            {props.value &&
                <div className={s.on}>ON</div>
            }
            {props.value &&
                <div className={s.off}>OFF</div>}
        </div>
    );
};