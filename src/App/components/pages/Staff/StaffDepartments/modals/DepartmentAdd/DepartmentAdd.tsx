import React, { ChangeEvent, useState } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';

const DepartmentAdd = () => {
    const initialState = {
        name: '',
        organization: '',
        director: '',
        headDepartment: ''
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
                    Наименование подразделения*
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
                <div style={{ marginTop: '15px' }} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                        <span
                            style={{
                                fontSize: '12px',
                                color: '#999999',
                                marginLeft: '7px',
                                marginBottom: '7px'
                            }}>
                            Руководитель подразделения*
                        </span>
                        <Inputs
                            type="text"
                            name="director"
                            onInputChange={inputHandler}
                            value={inputsState.director}
                            className="name__label"
                            placeholder="Найти сотрудника"
                        />
                    </div>
                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                        <span
                            style={{
                                fontSize: '12px',
                                color: '#999999',
                                marginLeft: '7px',
                                marginBottom: '7px'
                            }}>
                            Ведущее подразделение
                        </span>
                        <Inputs
                            type="text"
                            name="headDepartment"
                            onInputChange={inputHandler}
                            value={inputsState.headDepartment}
                            className="name__label"
                            placeholder="Выбрать подразделение"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentAdd;
