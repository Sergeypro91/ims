import React, { useState, useEffect, memo } from 'react';
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
import './EquipmentReader.scss';

const EquipmentReaderInner = () => {
    const dispatch = useDispatch();
    const { identifiersGeneral, identifiersRfid } = useSelector((state: State) => state.identifiers, shallowEqual);

    const [accessPointList] = useState(['Турникет 1', 'Турникет 2', 'Турникет 3']);
    const [identifierModuleList] = useState(['Вход', 'Выход']);
    const initialState = {
        accessPoint: '',
        identifierModule: ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    useEffect(() => {
        dispatch(identifiersRfidKey(''));
    }, [dispatch]);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="equipment-reader">
            <div className="equipment-reader__title">
                <div className="p--md--bold">Выберите точку доступа для чтения идентификатора</div>
            </div>

            <div className="equipment-reader__body">
                <div className="equipment-reader-body__left">
                    <Inputs
                        type="text"
                        name="accessPoint"
                        label="Точка доступа"
                        onInputChange={inputHandler}
                        value={inputsState.accessPoint}
                        list={accessPointList}
                    />

                    <Inputs
                        type="text"
                        name="identifierModule"
                        label="Модуль идентификации"
                        onInputChange={inputHandler}
                        value={inputsState.identifierModule}
                        list={identifierModuleList}
                    />

                    <Buttons name="Read" label="Считать" typical />
                </div>

                <div className="equipment-reader-body__right">
                    <Inputs
                        type="text"
                        name="key"
                        label="Ключ №"
                        onInputChange={(e) => dispatch(identifiersRfidKey(e.target.value))}
                        value={identifiersRfid.key}
                    />

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
    );
};

export const EquipmentReader = memo(EquipmentReaderInner);
