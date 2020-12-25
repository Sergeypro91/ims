import React, { useState, memo } from 'react';
import { ArrowTick } from 'assets/images/svgr/arrow-tick';
import { ChekMarck } from 'assets/images/svgr/chekmarck';
import { AccordionProps } from './accordionType';
import './Accordion.scss';

export const AccordionInner = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelect, setIsSelect] = useState(false);

    const selectedItem = () => {
        if (props.type === 'selectable') {
            setIsSelect(!isSelect);

            props.activator!();
        }
    };

    const spreadDescr = () => {
        setIsOpen(!isOpen);

        props.trigger!();
    };

    return (
        <>
            {props.type === 'simple' && (
                <div className="accordion">
                    <div
                        className={`accordion__head ${isOpen ? 'opened' : ''} ${
                            props.type === 'simple' ? 'simple' : ''
                        }`}
                        onClick={spreadDescr}>
                        <div className={`accordion__head-title ${isSelect ? 'accordion__head-title--active' : ''}`}>
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
                        <div
                            className={`accordion__head-title ${isSelect ? 'accordion__head-title--active' : ''}`}
                            onClick={selectedItem}>
                            <button type="button" className="accordion__head-thumb">
                                {isSelect && <ChekMarck />}
                            </button>

                            <div className="p--md--bold">{props.header}</div>
                        </div>

                        <button type="button" className="accordion__head-expender" onClick={spreadDescr}>
                            <ArrowTick />
                        </button>
                    </div>

                    <div className={`accordion__body ${isOpen ? 'opened' : ''}`}>
                        <div className="accordion__body-content">{props.children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export const Accordion = memo(AccordionInner);
