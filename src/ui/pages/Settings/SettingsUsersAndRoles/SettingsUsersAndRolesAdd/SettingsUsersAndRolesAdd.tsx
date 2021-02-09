import React, { useState } from 'react';
import { Inputs } from '../../../../../ui/components/Inputs/Inputs';
import { Employee } from 'assets/images/svgr/employee';
import './SettingsUsersAndRolesAdd.scss';

export const SettingsUsersAndRolesAdd = () => {
    // const [editPhoto, setEditPhoto] = useState(false);

    const initialState = {
        login: '',
        person_name: '',
        current_password: '',
        new_password: '',
        confirmate_password: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const [editPhoto, setEditPhoto] = useState(false);

    const inputHandler = (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };
    return (
        <div className="usersandroles__add">
            <div className="userdata">
                <div className="edit__photo">
                    <div>
                        <div className="user-photo" style={{ height: '96px', width: '96px' }}>
                            <Employee />
                        </div>
                    </div>
                    <button className="edit__photo__button" onClick={() => setEditPhoto(!editPhoto)} type="button">
                        <svg viewBox="0 0 32 32" style={{ fill: 'rgb(29, 104, 217)' }}>
                            <path d="M30.8284 1.15901C30.0849 0.416853 29.0772 0 28.0264 0C26.9757 0 25.968 0.416853 25.2245 1.15901L5.60387 20.7861L11.2113 26.3948L30.8284 6.78193C31.1996 6.41379 31.4943 5.97583 31.6954 5.49329C31.8965 5.01076 32 4.4932 32 3.97047C32 3.44774 31.8965 2.93019 31.6954 2.44765C31.4943 1.96511 31.1996 1.52715 30.8284 1.15901ZM0 32L8.40935 29.1956L2.80194 23.5904L0 32Z" />
                        </svg>
                    </button>
                    <div className={`edit__photo__dialogue ${editPhoto ? 'open' : ''}`}>
                        <button type="button" className="p--sm--md">
                            Загрузить
                        </button>
                        <button type="button">Изменить</button>
                        <button type="button">Удалить</button>
                    </div>
                </div>
                <div className="userdata__info">
                    <div className="userdata__login">
                        <span className="login__label">Логин</span>
                        <Inputs name="login" type="text" onInputChange={inputHandler} value={inputsState.login} />
                    </div>
                    <div className="userdata__person">
                        <span className="person__label">Сотрудник</span>
                        <Inputs name="person_name" type="text" onInputChange={inputHandler} value={inputsState.person_name} />
                    </div>
                </div>
            </div>
            <div className="password">
                <div className="password__new p--md--normal">
                    <span className="new__label p--md--normal">Пароль</span>
                    <Inputs
                        name="new_password"
                        type="text"
                        onInputChange={inputHandler}
                        value={inputsState.new_password}
                        placeholder="Введите пароль"
                    />
                </div>
                <div className="password__confirmation">
                    <span className="confirmation__label p--md--normal">Подтверждение пароля</span>
                    <Inputs
                        name="confirmate_password"
                        type="text"
                        onInputChange={inputHandler}
                        value={inputsState.confirmate_password}
                        placeholder="Введите пароль"
                    />
                </div>
            </div>
        </div>
    );
};
