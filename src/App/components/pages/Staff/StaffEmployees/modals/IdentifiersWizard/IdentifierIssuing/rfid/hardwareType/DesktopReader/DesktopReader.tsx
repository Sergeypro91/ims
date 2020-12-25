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
import './DesktopReader.scss';

const DesktopReaderInner = () => {
    const dispatch = useDispatch();
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const [readerList] = useState(['PN-01 (NFC)', 'Турникет 2', 'Турникет 3']);
    const [portList] = useState(['COM1', 'COM2', 'COM3']);
    const initialState = {
        reader: '',
        port: ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="desktop-reader">
            <div className="desktop-reader__title">
                <div className="p--md--bold">Выберите точку доступа для чтения идентификатора</div>
            </div>

            <div className="desktop-reader__body">
                <div className="desktop-reader-body__left">
                    <Inputs
                        type="text"
                        name="reader"
                        label="Считыватель"
                        onInputChange={inputHandler}
                        value={inputsState.reader}
                        list={readerList}
                    />

                    <Inputs
                        type="text"
                        name="port"
                        label="Выберите порт"
                        onInputChange={inputHandler}
                        value={inputsState.port}
                        list={portList}
                    />

                    <Buttons name="Read" label="Считать" typical />
                </div>

                <div className="desktop-reader-body__right">
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

export const DesktopReader = memo(DesktopReaderInner);
