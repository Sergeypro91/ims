import React, { useEffect, memo } from 'react';
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
import { Limits } from 'ui/components/Limits/Limits';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './Manual.scss';

const ManualInner = () => {
    const dispatch = useDispatch();
    const { identifiersGeneral, identifiersRfid } = useSelector((state: State) => state.identifiers, shallowEqual);
    const { parameters } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);

    useEffect(() => {
        dispatch(identifiersRfidKey(''));
    }, [dispatch]);

    const clearThero: (payload: string) => string = (string: string) => {
        return +string[0] !== 0 || string.length === 0 ? string : clearThero(string.substring(1));
    };

    const formatingKeyInput = (key: string) => {
        const parametersOption = parameters[findIndexFunc(parameters, 'identifiers', 'name')].options;
        const kytFormat = parametersOption[findIndexFunc(parametersOption, 'outputFormat', 'name')].selected;
        // const significantBytes = parametersOption[findIndexFunc(parametersOption, 'significantBytes', 'name')].selected;

        // WHEN "significantBytes" NEED BE RUN
        // const byteLimit = () => {
        // if (significantBytes) {
        //     if (significantBytes.includes('3 байта')) {
        //         return 6;
        //     } else if (significantBytes.includes('4 байта')) {
        //         return 8;
        //     } else if (significantBytes.includes('7 байт')) {
        //         return 14;
        //     } else if (significantBytes.includes('8 байт')) {
        //         return 16;
        //     }
        // }
        // };

        if (key === '') {
            dispatch(identifiersRfidKey(''));
        } else if (kytFormat === 'Десятичный') {
            if (/^[0-9]{1,19}$/.test(key)) {
                dispatch(identifiersRfidKey(clearThero(key)));
            }
        } else if (kytFormat === 'Шестнадцатеричный') {
            if (/^[0-9A-F]{1,14}$/i.test(key)) {
                dispatch(identifiersRfidKey(key.toUpperCase()));
            }
        }
    };

    return (
        <div className="manual">
            <div className="manual__title">
                <div className="p--md--bold">Ввод данных RFID ключа в ручном режиме</div>
            </div>

            <div className="manual__body">
                <div className="manual-body__left">
                    <div className="key-block">
                        <Inputs
                            type="text"
                            name="key"
                            label="Ключ №"
                            onInputChange={(e) => formatingKeyInput(e.target.value)}
                            value={identifiersRfid.key}
                            autoFocus
                        />

                        <Buttons name="Close" size="m" typical onPress={() => formatingKeyInput('')} />
                    </div>
                </div>

                <div className="manual-body__right">
                    <div className="limit-block">
                        <Limits
                            timeToggler={() => dispatch(identifierSetupWizardLimitTimeIsOn())}
                            limitTimeIsOff={identifiersGeneral.limits.limitTimeIsOff}
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
        </div>
    );
};

export const Manual = memo(ManualInner);
