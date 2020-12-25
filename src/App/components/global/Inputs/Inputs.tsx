import React, { useState, useRef, useEffect, memo } from 'react';
import { CalendarIcon } from 'assets/images/svgr/calendar-icon';
import { Show } from 'assets/images/svgr/bx-show';
import { Hide } from 'assets/images/svgr/bx-hide';
import { User } from 'assets/images/svgr/bx-user';
import { Key } from 'assets/images/svgr/bx-key';
import { InputsType } from './inputsType';
import './Inputs.scss';

const InputsInner = (props: InputsType) => {
    const [inputType, setInputType] = useState(props.type);
    const inputWrapper = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        props.onInputChange(e);
    };

    const changeTypePassword = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else if (inputType === 'text') {
            setInputType('password');
        }
    };

    useEffect(() => {
        if (props.validation && props.value) {
            if (input.current?.checkValidity()) {
                inputWrapper.current?.classList.remove('custom-input__wrapper--invalid');
                inputWrapper.current?.classList.add('custom-input__wrapper--valid');

                if (props.validationWarning) props.validationWarning!('');
            } else {
                inputWrapper.current?.classList.remove('custom-input__wrapper--valid');
                inputWrapper.current?.classList.add('custom-input__wrapper--invalid');

                if (props.validationWarning) props.validationWarning!(props.validationTitle!);
            }
        }
    }, [props.value, props.validation, props.validationWarning, props.validationTitle]);

    return (
        <div
            className={`
                custom-input 
                ${props.className ? `${props.className}` : ''} 
                ${props.error ? 'custom-input--error' : ''} 
                ${props.disabled ? 'custom-input--disabled' : ''}
                ${props.type === 'textarea' ? 'textarea' : ''}
                `}>
            <div className="custom-input__label">
                {props.label && (
                    <label className="custom-input__label-title">
                        <div className="p--sm--normal">{props.label}</div>
                    </label>
                )}
                <div className="custom-input__label-required">
                    {props.required && <div className="p--sm--normal">*</div>}
                </div>
            </div>

            <div ref={inputWrapper} className="custom-input__wrapper" tabIndex={-1}>
                {props.icon && (
                    <div className="custom-input__icon">
                        {props.name === 'login' && <User />}
                        {props.name === 'password' && <Key />}
                    </div>
                )}
                <div className="custom-input__input-wrapper">
                    {props.list && (
                        <select
                            name={props.name}
                            value={props.value}
                            className="custom-input__select p--md--normal"
                            onChange={handleChange}
                            disabled={props.disabled}>
                            {props.list?.map((index) => {
                                return (
                                    <option value={`${index}`} key={index}>
                                        {index}
                                    </option>
                                );
                            })}
                        </select>
                    )}

                    {props.type === 'textarea' && (
                        <textarea
                            name={props.name}
                            value={props.value}
                            onChange={handleChange}
                            className="p--md--normal"
                            readOnly={props.readonly}
                        />
                    )}

                    {props.type !== 'textarea' && !props.list && (
                        <input
                            ref={input}
                            onChange={handleChange}
                            name={props.name}
                            className="custom-input__input p--md--normal"
                            type={inputType}
                            value={props.value}
                            title={props.validationTitle}
                            required={props.required}
                            disabled={props.disabled}
                            min={props.min}
                            max={props.max}
                            pattern={props.validation}
                            autoFocus={props.autoFocus}
                            autoComplete="none"
                            readOnly={props.readonly}
                            placeholder={props.placeholder}
                        />
                    )}
                </div>

                {props.name === 'password' ? (
                    <div
                        className="custom-input__specific-action custom-input__specific-action--show-hide"
                        onClick={changeTypePassword}>
                        {inputType === 'password' ? <Show /> : <Hide />}
                    </div>
                ) : null}

                {props.type === 'date' ? (
                    <div className="custom-input__specific-action custom-input__specific-action--date">
                        <CalendarIcon />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export const Inputs = memo(InputsInner);
