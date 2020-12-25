import React, { useState, memo } from 'react';
import { State } from 'redux/store';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    staffEmployeesSetupWizardKey,
    staffEmployeesSetupWizardLimitTimeFrom,
    staffEmployeesSetupWizardLimitTimeTo,
    staffEmployeesSetupWizardLimitPass
} from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Limits } from 'App/components/global/Limits/Limits';
import './EquipmentReader.scss';

const EquipmentReaderInner = () => {
    const dispatch = useDispatch();
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const [accessPointList] = useState(['Турникет 1', 'Турникет 2', 'Турникет 3']);
    const [identifierModuleList] = useState(['Вход', 'Выход']);
    const initialState = {
        accessPoint: '',
        identifierModule: ''
    };

    const [inputsState, setInputsState] = useState(initialState);

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
                        onInputChange={(e) => dispatch(staffEmployeesSetupWizardKey(e.target.value))}
                        value={identifiersWizard.key}
                    />

                    <Limits
                        timeFromFunc={(e) => dispatch(staffEmployeesSetupWizardLimitTimeFrom(e))}
                        limitTimeFrom={identifiersWizard.limits.limitTime.limitTimeFrom}
                        timeToFunc={(e) => dispatch(staffEmployeesSetupWizardLimitTimeTo(e))}
                        limitTimeTo={identifiersWizard.limits.limitTime.limitTimeTo}
                        passCountFunc={(e) => dispatch(staffEmployeesSetupWizardLimitPass(e))}
                        limitPassCount={identifiersWizard.limits.limitPass}
                        clearTimeLimit={() => {
                            dispatch(staffEmployeesSetupWizardLimitTimeFrom(''));
                            dispatch(staffEmployeesSetupWizardLimitTimeTo(''));
                        }}
                        clearPassLimit={() => dispatch(staffEmployeesSetupWizardLimitPass(''))}
                    />
                </div>
            </div>
        </div>
    );
};

export const EquipmentReader = memo(EquipmentReaderInner);
