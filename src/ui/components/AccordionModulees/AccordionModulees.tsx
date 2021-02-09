import React, { useState, memo } from 'react';
import { ArrowTick } from 'assets/images/svgr/arrow-tick';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { AccordionModuleesProps } from './accordionModuleesType';
import './AccordionModulees.scss';

export const AccordionModuleesInner = (props: AccordionModuleesProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const spreadDescr = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-modules">
            <div className={`accordion-modules__header ${isOpen ? 'opened' : ''}`}>
                <button type="button" className="accordion-modules__header-expender" onClick={spreadDescr}>
                    <ArrowTick />
                </button>

                <div className="accordion-modules__header-label">
                    <div className="p--md--bold">{props.header}</div>
                </div>

                <div className="accordion-modules__header-direction">
                    <button
                        type="button"
                        className={`direction__enter ${props.direction === 'Enter' ? 'active' : ''}`}
                        onClick={props.directionToEnter}
                    >
                        <div className="p--sm--bold">Вход</div>
                    </button>

                    <button
                        type="button"
                        className={`direction__exit ${props.direction === 'Exit' ? 'active' : ''}`}
                        onClick={props.directionToExit}
                    >
                        <div className="p--sm--bold">Выход</div>
                    </button>
                </div>

                <div className="accordion-modules__header-delete">
                    <Buttons name="Delete" size="m" typical onPress={props.delete} />
                </div>
            </div>

            <div className={`accordion-modules__body ${isOpen ? 'opened' : ''}`}>{props.children}</div>
        </div>
    );
};

export const AccordionModulees = memo(AccordionModuleesInner);
