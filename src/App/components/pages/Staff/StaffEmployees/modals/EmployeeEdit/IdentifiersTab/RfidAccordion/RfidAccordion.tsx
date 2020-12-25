import React, { memo, useState } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Limits } from 'App/components/global/Limits/Limits';
import './RfidAccordion.scss';

const RfidAccordionInner = () => {
    const [statusList] = useState(['Активен', 'Неактивен']);
    const [klassList] = useState(['Пользовательский 1', 'Пользовательский 2', 'Пользовательский 3']);

    const initialState = {
        limitTimeFrom: '',
        limitTimeTo: '',
        limitPass: '',
        status: '',
        klass: ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="employee-rfid-accordion">
            <div className="rfid-accordion__left">
                <Inputs
                    name="status"
                    label="Статус"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.status}
                    list={statusList}
                />

                <Inputs
                    name="klass"
                    label="Класс"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.klass}
                    list={klassList}
                />
            </div>

            <div className="rfid-accordion__right">
                <Limits
                    timeFromFunc={(e) => setInputsState({ ...inputsState, limitTimeFrom: e })}
                    limitTimeFrom={inputsState.limitTimeFrom}
                    timeToFunc={(e) => setInputsState({ ...inputsState, limitTimeTo: e })}
                    limitTimeTo={inputsState.limitTimeTo}
                    passCountFunc={(e) => setInputsState({ ...inputsState, limitPass: e })}
                    limitPassCount={inputsState.limitPass}
                    clearTimeLimit={() => setInputsState({ ...inputsState, limitTimeFrom: '', limitTimeTo: '' })}
                    clearPassLimit={() => setInputsState({ ...inputsState, limitPass: '' })}
                />
            </div>
        </div>
    );
};

export const RfidAccordion = memo(RfidAccordionInner);
