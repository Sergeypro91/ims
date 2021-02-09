import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    setupWizardDeviceProtocol,
    setupWizardDeviceIp,
    setupWizardDeviceMask,
    setupWizardDeviceServerPort,
    setupWizardDeviceClientPort,
    setupWizardDeviceConfig
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import { Inputs } from 'ui/components/Inputs/Inputs';

const ControllerSetupsEthernetInner = () => {
    const dispatch = useDispatch();
    const { controllers, configs } = useSelector((state: State) => state.setupWizard.setupWizardEquipments, shallowEqual);
    const [protocolTypes, setProtocolTypes] = useState<string[]>([]);

    // DEFIND PROTOCOL TYPE LIST
    useEffect(() => {
        if (configs.deviceConfigs && configs.deviceConfigs.length > 0) {
            const protocolList: string[] = [];

            configs.deviceConfigs.forEach((elem) => {
                if (elem.connectionSubTypeName) {
                    protocolList.push(elem.connectionSubTypeName);
                }
            });

            const protocolListFiltered = protocolList.filter((item, pos) => {
                return protocolList.indexOf(item) === pos;
            });

            setProtocolTypes([...protocolListFiltered]);
        }
    }, [configs.deviceConfigs]);

    // DEFINED AND SET DEFAULT PROTOCOL TYPE
    useEffect(() => {
        if (configs.deviceConfigs.length > 0) {
            dispatch(setupWizardDeviceProtocol(configs.deviceConfigs[0].connectionSubTypeName));
        }
    }, [dispatch, configs.deviceConfigs]);

    // DEFINED AND SET DEFAULT PROTOCOL TYPE
    useEffect(() => {
        if (configs.deviceConfigs.length > 0) {
            const configProtocolTypeId = findIndexFunc(configs.deviceConfigs, configs.deviceSetup.protocol, 'connectionSubTypeName');

            dispatch(setupWizardDeviceConfig(configs.deviceConfigs[configProtocolTypeId]));
        }
    }, [dispatch, controllers.controllerType, configs.deviceConfigs, configs.deviceSetup]);

    // APPLY DEFAULT ETHERNET CONFIG
    useEffect(() => {
        if (
            configs.deviceConfig &&
            configs.deviceConfig.serverAddress &&
            configs.deviceConfig.serverMask &&
            configs.deviceConfig.serverPort &&
            configs.deviceConfig.clientPort
        ) {
            dispatch(setupWizardDeviceIp(configs.deviceConfig.serverAddress));
            dispatch(setupWizardDeviceMask(configs.deviceConfig.serverMask));
            dispatch(setupWizardDeviceServerPort(configs.deviceConfig.serverPort));
            dispatch(setupWizardDeviceClientPort(configs.deviceConfig.clientPort));
        }
    }, [dispatch, configs.deviceConfig]);

    return (
        <>
            <div className="device-settings__body-top">
                <Inputs
                    label="Тип протокола"
                    type="text"
                    name="accessPointProtocol"
                    onInputChange={(e) => dispatch(setupWizardDeviceProtocol(e.target.value))}
                    value={configs.deviceSetup.protocol}
                    list={protocolTypes}
                />

                <Inputs
                    label="IP-адрес"
                    type="text"
                    name="accessPointIp"
                    onInputChange={(e) => dispatch(setupWizardDeviceIp(e.target.value))}
                    value={configs.deviceSetup.ip}
                    validation="^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
                    validationTitle="Формат ввода данных ХХХ.ХХХ.ХХХ.ХХХ"
                />
            </div>

            <div className="device-settings__body-bottom">
                <Inputs
                    label="Маска подсети"
                    type="text"
                    name="accessPointsMask"
                    onInputChange={(e) => dispatch(setupWizardDeviceMask(e.target.value))}
                    value={configs.deviceSetup.mask}
                    validation="^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
                    validationTitle="Формат ввода данных ХХХ.ХХХ.ХХХ.ХХХ"
                />

                <Inputs
                    label="Порт сервера"
                    type="number"
                    name="accessPointsServerPort"
                    onInputChange={(e) => dispatch(setupWizardDeviceServerPort(+e.target.value))}
                    value={configs.deviceSetup.serverPort}
                    validation="^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$"
                    validationTitle="Значение не более 65535"
                />

                <Inputs
                    label="Порт клиента"
                    type="number"
                    name="accessPointsClientPort"
                    onInputChange={(e) => dispatch(setupWizardDeviceClientPort(+e.target.value))}
                    value={configs.deviceSetup.clientPort}
                    validation="^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$"
                    validationTitle="Значение не более 65535"
                />
            </div>
        </>
    );
};

export const ControllerSetupsEthernet = memo(ControllerSetupsEthernetInner);
