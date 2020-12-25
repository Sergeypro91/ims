import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Checkbox } from 'primereact/checkbox';
import './Validity.scss';

const ValidityInner = () => {
    const initialState = {
        from: '',
        to: '',
        indefinite: false
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };
    return (
        <div className="identifiers-rfid-filters-validity">
            <div className="custom-checkbox">
                <Checkbox
                    name="indefinite"
                    inputId="indefinite"
                    value={inputsState.indefinite}
                    onChange={() =>
                        setInputsState({
                            ...inputsState,
                            indefinite: !inputsState.indefinite
                        })
                    }
                    checked={inputsState.indefinite}
                />
                <label htmlFor="indefinite" className="p--md--normal">
                    Бессрочный
                </label>
            </div>

            <div className="filter-group">
                <Inputs
                    name="from"
                    placeholder="От"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.from}
                    disabled={inputsState.indefinite}
                />

                <Inputs
                    name="to"
                    placeholder="До"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.to}
                    disabled={inputsState.indefinite}
                />
            </div>
        </div>
    );
};

export const Validity = memo(ValidityInner);
