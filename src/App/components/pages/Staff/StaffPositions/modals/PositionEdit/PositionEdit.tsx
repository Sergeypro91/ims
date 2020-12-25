import React, { ChangeEvent, useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';

const PositionEditInner = () => {
    const selectedRow = useSelector((state: State) => state.staff.staffPositions.selectedRow, shallowEqual);
    const initialState = {
        name: selectedRow?.name || '',
        organization: 'Общество с ограниченной ответственностью “Питон Плюс”'
    };
    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="employee-add">
            <div className="employee-add__body" style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                    style={{
                        fontSize: '12px',
                        color: '#999999',
                        marginLeft: '7px',
                        marginBottom: '7px'
                    }}>
                    Наименование должности*
                </span>
                <Inputs
                    type="text"
                    name="name"
                    onInputChange={inputHandler}
                    value={inputsState.name}
                    className="name__label"
                    placeholder="Введите наименование"
                />
                <div style={{ marginTop: '15px' }} />
                <span
                    style={{
                        fontSize: '12px',
                        color: '#999999',
                        marginLeft: '7px',
                        marginBottom: '7px'
                    }}>
                    Наименование организации*
                </span>
                <Inputs
                    type="text"
                    name="organization"
                    onInputChange={inputHandler}
                    value={inputsState.organization}
                    className="name__label"
                    placeholder="Найти организацию"
                />
            </div>
        </div>
    );
};

const PositionEdit = memo(PositionEditInner);

export default PositionEdit;
