import React, { ChangeEvent, useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { Employee } from 'assets/images/svgr/employee';
import { Edit } from 'assets/images/svgr/edit_button';
import './EmployeeAdd.scss';

const EmployeeAddInner = () => {
    const initialState = {
        uuid: '',
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        organization: '',
        department: '',
        position: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const [editPhoto, setEditPhoto] = useState(false);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };
    return (
        <div className="employee-add">
            <div className="employee-add__body">
                <div className="user-image">
                    <div className="edit__photo">
                        <div className="image">
                            <Employee />
                        </div>

                        <div className={`image-menu ${editPhoto ? 'open' : ''}`}>
                            <button type="button" className="image-menu__button">
                                <div className="p--sm--md">Загрузить</div>
                            </button>

                            <button type="button" className="image-menu__button">
                                <div className="p--sm--md">Изменить</div>
                            </button>

                            <button type="button" className="image-menu__button">
                                <div className="p--sm--md">Удалить</div>
                            </button>
                        </div>

                        <button
                            type="button"
                            className="image-menu__activator"
                            onClick={() => setEditPhoto(!editPhoto)}>
                            <Edit />
                        </button>
                    </div>
                </div>

                <div className="user-info">
                    <div className="info__row">
                        <Inputs
                            type="text"
                            name="uuid"
                            onInputChange={inputHandler}
                            value={inputsState.uuid}
                            label="Табельный №"
                        />
                    </div>

                    <div className="info__row">
                        <Inputs
                            type="text"
                            name="surname"
                            onInputChange={inputHandler}
                            value={inputsState.surname}
                            label="Фамилия"
                            className="surname__label"
                        />
                    </div>

                    <div className="info__row">
                        <Inputs
                            type="text"
                            name="name"
                            onInputChange={inputHandler}
                            value={inputsState.name}
                            label="Имя"
                            className="name__label"
                        />
                    </div>

                    <div className="info__row">
                        <Inputs
                            type="text"
                            name="patronymic"
                            onInputChange={inputHandler}
                            value={inputsState.patronymic}
                            label="Отчество"
                            className="patronymic__label"
                        />
                    </div>

                    <div className="info__row">
                        <Inputs
                            type="text"
                            name="phone"
                            onInputChange={inputHandler}
                            value={inputsState.phone}
                            label="Телефон"
                            className="phone__label"
                        />

                        <Inputs
                            type="text"
                            name="email"
                            onInputChange={inputHandler}
                            value={inputsState.email}
                            label="E-mail"
                            className="email__label"
                        />
                    </div>
                </div>
            </div>

            <div className="employee-add__footer">
                <div className="info__row">
                    <Inputs
                        type="text"
                        name="organization"
                        onInputChange={inputHandler}
                        value={inputsState.organization}
                        label="Организация"
                        className="organization__label"
                    />

                    <Inputs
                        type="text"
                        name="position"
                        onInputChange={inputHandler}
                        value={inputsState.position}
                        label="Должность"
                        className="position__label"
                    />
                </div>

                <div className="info__row">
                    <Inputs
                        type="text"
                        name="department"
                        onInputChange={inputHandler}
                        value={inputsState.department}
                        label="Подразделение"
                        className="department__label"
                    />
                </div>
            </div>
        </div>
    );
};

export const EmployeeAdd = memo(EmployeeAddInner);
