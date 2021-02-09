import React, { memo } from 'react';
import { RadioButtonProps } from './radioButtonType';
import './RadioButton.scss';

const RadioButtonInner = (props: RadioButtonProps) => {
    const handleChange = (e: any) => {
        props.onChange(e);
    };

    return (
        <label className="radio">
            <input
                type="radio"
                name={props.name}
                className={`radio__input ${props.className ? `${props.className}` : ''}`}
                value={props.value}
                onChange={handleChange}
                checked={props.state === props.value}
                disabled={props.disabled}
            />

            <div className="radio__thumb">
                <div className="radio__thumb-filler" />
            </div>

            <div className="radio__label">
                <div className="p--md--normal">{props.value}</div>
            </div>
        </label>
    );
};

export const RadioButton = memo(RadioButtonInner);
