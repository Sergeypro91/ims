import React, { memo } from 'react';
import { ChekMarck } from 'assets/images/svgr/chekmarck';
import { CheckboxProps } from './checkboxType';
import './Checkbox.scss';

const CheckboxInner = (props: CheckboxProps) => {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                name={props.name}
                className={`checkbox__input ${props.className ? `${props.className}` : ''}`}
                onChange={props.onChange}
                checked={props.checked}
                disabled={props.disabled}
                tabIndex={0}
            />

            <div className="checkbox__thumb">{props.checked && <ChekMarck />}</div>

            <div className="checkbox__label">
                <div className="p--md--normal">{props.label}</div>
            </div>
        </label>
    );
};

export const Checkbox = memo(CheckboxInner);
