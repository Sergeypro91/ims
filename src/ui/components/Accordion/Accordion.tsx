import React, { useState, memo } from 'react';
import { ArrowTick } from 'assets/images/svgr/arrow-tick';
import { AccordionProps } from './accordionType';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';
import './Accordion.scss';

export const AccordionInner = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const spreadDescr = () => {
        setIsOpen(!isOpen);

        if (props.trigger) {
            props.trigger();
        }
    };

    return (
        <>
            {props.type === 'simple' && (
                <div className="accordion">
                    <div
                        className={`accordion__head ${isOpen ? 'opened' : ''} ${props.type === 'simple' ? 'simple' : ''}`}
                        onClick={spreadDescr}
                    >
                        <div className="accordion__head-title">
                            <div className="p--md--bold">{props.header}</div>
                        </div>

                        <button type="button" className="accordion__head-expender">
                            <ArrowTick />
                        </button>
                    </div>

                    <div className={`accordion__body ${isOpen ? 'opened' : ''}`}>
                        <div className="accordion__body-content">{props.children}</div>
                    </div>
                </div>
            )}

            {props.type === 'selectable' && (
                <div className="accordion">
                    <div className={`accordion__head ${isOpen ? 'opened' : ''}`}>
                        <div className="accordion__head-title">
                            <Checkbox
                                name="props.limitTimeIsOff"
                                checked={props.isChecked!}
                                disabled={props.disabled}
                                label={props.header}
                                onChange={props.checkbox!}
                            />
                        </div>

                        <button type="button" className="accordion__head-expender" onClick={spreadDescr}>
                            <ArrowTick />
                        </button>
                    </div>

                    <div className={`accordion__body ${isOpen ? 'opened' : ''}`}>
                        <div className="p--md--normal">{props.children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export const Accordion = memo(AccordionInner);
