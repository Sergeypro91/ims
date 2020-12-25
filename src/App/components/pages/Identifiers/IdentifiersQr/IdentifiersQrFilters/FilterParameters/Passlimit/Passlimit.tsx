import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Checkbox } from 'primereact/checkbox';
import './Passlimit.scss';

const PassLimitInner = () => {
    const initialState = {
        from: '',
        to: '',
        unlimit: false
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };
    return (
        <div className="identifiers-rfid-filters-passlimit">
            <div className="custom-checkbox">
                <Checkbox
                    name="useForTimeTracker"
                    inputId="checkbox_save-user"
                    value={inputsState.unlimit}
                    onChange={() =>
                        setInputsState({
                            ...inputsState,
                            unlimit: !inputsState.unlimit
                        })
                    }
                    checked={inputsState.unlimit}
                />
                <label htmlFor="checkbox_save-user" className="p--md--normal">
                    Безлимитный
                </label>
            </div>

            <div className="filter-group">
                <Inputs
                    name="from"
                    placeholder="От"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.from}
                    disabled={inputsState.unlimit}
                />

                <Inputs
                    name="to"
                    placeholder="До"
                    onInputChange={inputHandler}
                    type="text"
                    value={inputsState.to}
                    disabled={inputsState.unlimit}
                />
            </div>
        </div>
    );
};

export const PassLimit = memo(PassLimitInner);
