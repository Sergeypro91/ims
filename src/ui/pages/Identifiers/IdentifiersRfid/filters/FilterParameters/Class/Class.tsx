import React, { useState, memo } from 'react';
import { Checkbox } from 'primereact/checkbox';
import './Class.scss';

const ClassInner = () => {
    const initialState = {
        Custom: true,
        Master: false,
        Security: false,
        Blocking: false
    };
    const [inputsState, setInputsState] = useState(initialState);

    return (
        <div className="identifiers-rfid-filters-class">
            <div className="custom-checkbox">
                <Checkbox
                    name="useForTimeTracker"
                    inputId="checkbox_save-user"
                    value={inputsState.Custom}
                    onChange={() =>
                        setInputsState({
                            ...inputsState,
                            Custom: !inputsState.Custom
                        })
                    }
                    checked={inputsState.Custom}
                    disabled={inputsState.Master || inputsState.Security || inputsState.Blocking}
                />
                <label htmlFor="checkbox_save-user" className="p--md--normal">
                    Пользовательский
                </label>
            </div>

            <div className="custom-checkbox">
                <Checkbox
                    name="useForTimeTracker"
                    inputId="checkbox_save-user"
                    value={inputsState.Master}
                    onChange={() =>
                        setInputsState({
                            ...inputsState,
                            Master: !inputsState.Master
                        })
                    }
                    checked={inputsState.Master}
                    disabled={inputsState.Custom || inputsState.Security || inputsState.Blocking}
                />
                <label htmlFor="checkbox_save-user" className="p--md--normal">
                    Мастер
                </label>
            </div>

            <div className="custom-checkbox">
                <Checkbox
                    name="useForTimeTracker"
                    inputId="checkbox_save-user"
                    value={inputsState.Security}
                    onChange={() =>
                        setInputsState({
                            ...inputsState,
                            Security: !inputsState.Security
                        })
                    }
                    checked={inputsState.Security}
                    disabled={inputsState.Custom || inputsState.Master || inputsState.Blocking}
                />
                <label htmlFor="checkbox_save-user" className="p--md--normal">
                    Охрана
                </label>
            </div>

            <div className="custom-checkbox">
                <Checkbox
                    name="useForTimeTracker"
                    inputId="checkbox_save-user"
                    value={inputsState.Blocking}
                    onChange={() =>
                        setInputsState({
                            ...inputsState,
                            Blocking: !inputsState.Blocking
                        })
                    }
                    checked={inputsState.Blocking}
                    disabled={inputsState.Custom || inputsState.Master || inputsState.Security}
                />
                <label htmlFor="checkbox_save-user" className="p--md--normal">
                    Блокирующий
                </label>
            </div>
        </div>
    );
};

export const Class = memo(ClassInner);
