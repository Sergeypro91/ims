import React, { useState, memo } from 'react';
import { Inputs } from 'App/components/global/Inputs/Inputs';
import './ModuleSetup.scss';

const ModuleSetupInner = () => {
    const initialState = {
        conectionType: '',
        protocolType: '',
        ipAddress: '',
        subnetMask: '',
        serverPort: '',
        clientPort: '',
        login: '',
        password: ''
    };

    const [inputsState, setInputsState] = useState(initialState);
    const [conectionTypeList] = useState(['Ethernet', 'RS-245']);
    const [protocolTypeList] = useState(['TCP', 'UDP']);

    return (
        <div className="module-setup">
            <Inputs
                label="Тип подключения"
                type="text"
                name="conectionType"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, conectionType: e.target.value });
                }}
                value={inputsState.conectionType}
                list={conectionTypeList}
            />

            <Inputs
                label="Тип протокола"
                type="text"
                name="protocolType"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, protocolType: e.target.value });
                }}
                value={inputsState.protocolType}
                list={protocolTypeList}
            />

            <Inputs
                label="IP-адрес"
                type="text"
                name="ipAddress"
                placeholder="Введите IP-адрес"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, ipAddress: e.target.value });
                }}
                value={inputsState.ipAddress}
            />

            <Inputs
                label="Маска подсети"
                type="text"
                name="subnetMask"
                placeholder="Введите маску подсети"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, subnetMask: e.target.value });
                }}
                value={inputsState.subnetMask}
            />

            <Inputs
                label="Порт сервера"
                type="text"
                name="serverPort"
                placeholder="Введите порт сервера"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, serverPort: e.target.value });
                }}
                value={inputsState.serverPort}
            />

            <Inputs
                label="Порт клиента"
                type="text"
                name="clientPort"
                placeholder="Введите порт клиента"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, clientPort: e.target.value });
                }}
                value={inputsState.clientPort}
            />

            <Inputs
                label="Логин"
                type="text"
                name="login"
                placeholder="Введите логин"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, login: e.target.value });
                }}
                value={inputsState.login}
            />

            <Inputs
                label="Пароль"
                type="text"
                name="password"
                placeholder="Введите пароль"
                onInputChange={(e) => {
                    console.log(e.target.value);
                    setInputsState({ ...inputsState, password: e.target.value });
                }}
                value={inputsState.password}
            />
        </div>
    );
};

export const ModuleSetup = memo(ModuleSetupInner);
