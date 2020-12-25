import React, { ChangeEvent, useState } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';

const OrganizationEdit = () => {
    const selectedRow = useSelector((state: State) => state.staff.staffOrganizations.selectedRow, shallowEqual);
    const initialState = {
        shortName: selectedRow?.name || '',
        name: 'Общество с ограниченной ответственностью “Питон Плюс”',
        headOrganization: 'ООО "АЛЬЯНС"',
        inn: selectedRow?.inn || '',
        address: 'г. Брянск, ул. Автозаводская, д.16',
        factAddress: 'г. Брянск, ул. Маслозаводская, д. 119',
        phoneNumber: '84842441295',
        email: '12421421'
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
                    Наименование краткое*
                </span>
                <Inputs
                    type="text"
                    name="shortName"
                    onInputChange={inputHandler}
                    value={inputsState.shortName}
                    className="name__label"
                    placeholder="Введите наименование краткое"
                />
                <div style={{ marginTop: '15px' }} />
                <span
                    style={{
                        fontSize: '12px',
                        color: '#999999',
                        marginLeft: '7px',
                        marginBottom: '7px'
                    }}>
                    Наименование полное*
                </span>
                <Inputs
                    type="text"
                    name="name"
                    onInputChange={inputHandler}
                    value={inputsState.name}
                    className="name__label"
                    placeholder="Введите наименование полное"
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
                            Головная организация
                        </span>
                        <Inputs
                            type="text"
                            name="headOrganization"
                            onInputChange={inputHandler}
                            value={inputsState.headOrganization}
                            className="name__label"
                            placeholder="Выберите организацию"
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
                            ИНН*
                        </span>
                        <Inputs
                            type="text"
                            name="inn"
                            onInputChange={inputHandler}
                            value={inputsState.inn}
                            className="name__label"
                            placeholder="Введите ИНН"
                        />
                    </div>
                </div>
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
                            Юридический адрес*
                        </span>
                        <Inputs
                            type="text"
                            name="address"
                            onInputChange={inputHandler}
                            value={inputsState.address}
                            className="name__label"
                            placeholder="Введите адрес"
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
                            Фактический адрес*
                        </span>
                        <Inputs
                            type="text"
                            name="factAddress"
                            onInputChange={inputHandler}
                            value={inputsState.factAddress}
                            className="name__label"
                            placeholder="Введите адрес"
                        />
                    </div>
                </div>
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
                            Телефон*
                        </span>
                        <Inputs
                            type="text"
                            name="phoneNumber"
                            onInputChange={inputHandler}
                            value={inputsState.phoneNumber}
                            className="name__label"
                            placeholder="Введите телефон"
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
                            E-mail*
                        </span>
                        <Inputs
                            type="text"
                            name="email"
                            onInputChange={inputHandler}
                            value={inputsState.email}
                            className="name__label"
                            placeholder="Введите почту"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationEdit;
