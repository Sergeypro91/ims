import React, { useEffect, memo } from 'react';
import { State } from 'redux/store';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { RfidIdentifierIssuing } from './rfid/RfidIdentifierIssuing';
import { FaceidIdentifierIssuing } from './faceId/FaceidIdentifierIssuing';
import { TwoDIdentifierIssuing } from './2d/TwoDIdentifierIssuing';
import { requestSettingsParameters } from 'redux/Settings/SettingParameters/settingsParametersActions';
import './IdentifierIssuing.scss';

const IdentifierIssuingInner = () => {
    const dispatch = useDispatch();
    const { identifierType } = useSelector((state: State) => state.setupWizard.setupWizardIdentifiers, shallowEqual);

    useEffect(() => {
        dispatch(requestSettingsParameters());
    }, [dispatch]);

    return (
        <div className="identifier-issuing">
            {identifierType!.index === 0 && <RfidIdentifierIssuing />}
            {identifierType!.index === 1 && <TwoDIdentifierIssuing />}
            {identifierType!.index === 2 && <FaceidIdentifierIssuing />}
        </div>
    );
};

export const IdentifierIssuing = memo(IdentifierIssuingInner);
