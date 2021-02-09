import React, { useState, memo } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import './Status.scss';

const StatusInner = () => {
    const [modulsList] = useState(['Экспертиза 1', 'Экспертиза 2', 'Экспертиза 3']);

    const initialState = {
        status: ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };
    return (
        <div className="identifiers-rfid-filters-status">
            <Inputs name="status" onInputChange={inputHandler} type="text" value={inputsState.status} list={modulsList} />
        </div>
    );
};

export const Status = memo(StatusInner);
