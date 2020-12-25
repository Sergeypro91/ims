import React, { memo } from 'react';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { Accordion } from 'App/components/global/Accordion/Accordion';
import { RfidAccordion } from './RfidAccordion/RfidAccordion';
import { FaceIdAccordion } from './FaceIdAccordion/FaceIdAccordion';
import { TwoDAccordion } from './TwoDAccordion/TwoDAccordion';
import './EmployeeIdentifiers.scss';

const EmployeeIdentifiersInner = () => {
    return (
        <CustomScrollbar>
            <div className="employee-identifiers">
                <Accordion type="simple" header="RFID Ключ № 555544450232" trigger={() => console.log('Triggered')}>
                    <RfidAccordion />
                </Accordion>

                <Accordion type="simple" header="Face ID" trigger={() => console.log('Triggered')}>
                    <FaceIdAccordion />
                </Accordion>

                <Accordion type="simple" header="2D штрих-коды" trigger={() => console.log('Triggered')}>
                    <TwoDAccordion />
                </Accordion>
            </div>
        </CustomScrollbar>
    );
};

export const EmployeeIdentifiers = memo(EmployeeIdentifiersInner);
