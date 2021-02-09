import ArrowDown from 'assets/images/svgr/arrow-down';
import Cross from 'assets/images/svgr/Cross';
import React, { FC, memo, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './Dropdown.scss';

interface DropdownProps {
    options: Array<{
        [key: string]: any;
    }>;
    placeholder?: string;
    value: any;
    onChange: (value: any) => void;
    labelField: string;
    idField: string;
    initialLabelValue?: string;
}

const Dropdown: FC<DropdownProps> = (props) => {
    const [options, setOptions] = useState(props.options);
    const [isOpened, setIsOpened] = useState(false);
    const [inputValue, setInputValue] = useState(props.initialLabelValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [id] = useState(uuid());

    useEffect(() => {
        const onClick = (ev: MouseEvent) => {
            // @ts-ignore
            if (!ev.target.classList.value.includes('cdx-dropdown__element')) {
                setIsOpened(false);
            }
        };

        document.addEventListener('click', onClick);

        return () => {
            document.removeEventListener('click', onClick);
        };
    }, []);

    return (
        <div id={id} className={`cdx-dropdown cdx-dropdown__element ${isOpened ? 'opened' : ''} ${isFocused ? 'focused' : ''}`}>
            <div
                className="cdx-dropdown__head cdx-dropdown__element"
                id={id}
                onClick={(el) => {
                    // @ts-ignore
                    // bug
                    const tagName: string = el.target.tagName;

                    if (tagName === 'INPUT') {
                        setIsOpened(true);
                    } else {
                        setIsOpened(!isOpened);
                    }
                }}
            >
                <input
                    id={id}
                    className="dropdown-head__input cdx-dropdown__element"
                    type="text"
                    value={inputValue}
                    onChange={(event) => {
                        if (event.target.value === '') {
                            setOptions(props.options);
                        } else {
                            setOptions(
                                props.options.filter((option) =>
                                    option[props.labelField].toLowerCase().includes(event.target.value.toLowerCase())
                                )
                            );
                        }
                        setInputValue(event.target.value);
                    }}
                    onFocus={() => {
                        setIsFocused(true);
                        setIsOpened(true);
                    }}
                    onBlur={(e) => {
                        console.log(e);
                        setIsFocused(false);

                        if (e.relatedTarget) {
                            // @ts-ignore
                            if (e.relatedTarget.classList.contains('cdx-dropdown__element')) {
                                // @ts-ignore
                                if (e.relatedTarget.id !== id) {
                                    setIsOpened(false);
                                }
                            } else {
                                setIsOpened(false);
                            }
                        }
                    }}
                    placeholder={props.placeholder}
                    onClick={() => setIsOpened(true)}
                />

                <div
                    id={id}
                    className="dropdown-head__cross cdx-dropdown__element"
                    onClick={() => {
                        setInputValue('');
                        setOptions(props.options);
                        props.onChange(null);
                    }}
                    style={inputValue === '' ? { opacity: 0 } : { opacity: 1 }}
                >
                    <Cross id={id} className="cdx-dropdown__element cdx-dropdown__element" />
                </div>
                <ArrowDown id={id} className="cdx-dropdown__element cdx-dropdown__element" />
            </div>
            <ul id={id} className="cdx-dropdown__list cdx-dropdown__element">
                {options[0] ? (
                    <>
                        {options.map((item) => (
                            <li
                                id={id}
                                key={item[props.idField]}
                                className="dropdown-list__item cdx-dropdown__element"
                                onClick={() => {
                                    props.onChange(item);
                                    setInputValue(item[props.labelField]);
                                    setIsOpened(false);
                                }}
                            >
                                {item[props.labelField]}
                            </li>
                        ))}
                    </>
                ) : (
                    <>
                        <div
                            id={id}
                            className="cdx-dropdown__element"
                            style={{
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <span>Данные не найдены</span>
                        </div>
                    </>
                )}
            </ul>
        </div>
    );
};

export default memo(Dropdown);
