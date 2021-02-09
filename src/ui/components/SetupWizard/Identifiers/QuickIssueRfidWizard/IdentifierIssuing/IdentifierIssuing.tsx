import React, { memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    identifierSetupWizardLimitTimeIsOn,
    identifierSetupWizardLimitTimeFrom,
    identifierSetupWizardLimitTimeTo,
    identifierSetupWizardLimitPassIsOn,
    identifierSetupWizardLimitPass
} from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { identifiersRfidKey } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { Limits } from 'ui/components/Limits/Limits';
import './IdentifierIssuing.scss';

const IdentifierIssuingInner = () => {
    const dispatch = useDispatch();
    const { identifiersGeneral, identifiersRfid } = useSelector((state: State) => state.identifiers, shallowEqual);

    return (
        <div className="equipment-reader">
            <div className="equipment-reader__title">
                <div className="p--md--bold">Настольный считыватель</div>
            </div>

            <div className="equipment-reader__body">
                <div className="equipment-reader-body__left">
                    <Inputs
                        type="text"
                        name="key"
                        label="Ключ №"
                        onInputChange={(e) => dispatch(identifiersRfidKey(e.target.value))}
                        value={identifiersRfid.key}
                    />

                    <Buttons name="Read" label="Считать" typical />

                    <div className="identifiers-type__description">
                        <div className="p--sm--normal">Если вам нужно изменить настройки, перейдите в Мастер выдачи идентификаторов.</div>
                    </div>
                </div>

                <div className="equipment-reader-body__right">
                    <Limits
                        timeToggler={() => dispatch(identifierSetupWizardLimitTimeIsOn())}
                        limitTimeIsOff={identifiersGeneral.limits.limitPassIsOff}
                        timeFromFunc={(e) => dispatch(identifierSetupWizardLimitTimeFrom(e))}
                        limitTimeFrom={identifiersGeneral.limits.limitTime.limitTimeFrom}
                        timeToFunc={(e) => dispatch(identifierSetupWizardLimitTimeTo(e))}
                        limitTimeTo={identifiersGeneral.limits.limitTime.limitTimeTo}
                        passToggler={() => dispatch(identifierSetupWizardLimitPassIsOn())}
                        limitPassIsOff={identifiersGeneral.limits.limitPassIsOff}
                        passCountFunc={(e) => dispatch(identifierSetupWizardLimitPass(e))}
                        limitPassCount={identifiersGeneral.limits.limitPass}
                        clearTimeLimit={() => {
                            dispatch(identifierSetupWizardLimitTimeFrom(''));
                            dispatch(identifierSetupWizardLimitTimeTo(''));
                        }}
                        clearPassLimit={() => dispatch(identifierSetupWizardLimitPass(''))}
                        minPass={1}
                        maxPass={10000}
                    />
                </div>
            </div>
        </div>
    );
};

export const IdentifierIssuing = memo(IdentifierIssuingInner);
