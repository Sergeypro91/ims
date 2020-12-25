import React, { memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector } from 'react-redux';
import { RfidIdentifierIssuing } from './rfid/RfidIdentifierIssuing';
import { FaceidIdentifierIssuing } from './faceId/FaceidIdentifierIssuing';
import { TwoDIdentifierIssuing } from './2d/TwoDIdentifierIssuing';
import './IdentifierIssuing.scss';

const IdentifierIssuingInner = () => {
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    return (
        <div className="identifier-issuing">
            {identifiersWizard.type === 'RFID ключ' && <RfidIdentifierIssuing />}
            {identifiersWizard.type === 'Face ID' && <FaceidIdentifierIssuing />}
            {identifiersWizard.type === '2D штрих-коды' && <TwoDIdentifierIssuing />}
        </div>
    );
};

export const IdentifierIssuing = memo(IdentifierIssuingInner);
