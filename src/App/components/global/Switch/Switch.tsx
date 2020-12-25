import React, { memo } from 'react';
import { SwitchProps } from './switchType';
import './Switch.scss';

const SwitchInner = (props: SwitchProps) => {
    const trigger = () => {
        props.onTrigger();
    };

    return (
        <button
            type="button"
            className={`switch ${props.isActive ? 'switch--active' : 'switch--inactive'} ${
                props.isDisabled ? 'switch--disabled' : ''
            }`}
            onClick={props.isDisabled ? undefined : trigger}>
            <div className="switch__thumb">
                <div className="switch__thumb-dot" />
            </div>
        </button>
    );
};

export const Switch = memo(SwitchInner);
