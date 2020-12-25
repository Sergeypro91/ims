import React, { memo, useState } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Limits } from 'App/components/global/Limits/Limits';
import './TwoDAccordion.scss';

const TwoDAccordionInner = () => {
    const [statusList] = useState(['Активен', 'Неактивен']);

    const initialState = {
        limitTimeFrom: '',
        limitTimeTo: '',
        limitPass: '',
        status: ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="employee-twod-accordion">
            <div className="twod-accordion__left">
                <Inputs
                    name="status"
                    label="Статус"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.status}
                    list={statusList}
                />
            </div>

            <div className="twod-accordion__right">
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

export const TwoDAccordion = memo(TwoDAccordionInner);
