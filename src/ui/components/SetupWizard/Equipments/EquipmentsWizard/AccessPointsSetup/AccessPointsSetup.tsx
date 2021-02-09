import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    requestDeviceControllersTypes,
    setupWizardDevicesControllerType,
    requestDeviceСonnectionsTypes,
    setupWizardDevicesConnectionType,
    setupWizardDeviceSerialNumber,
    requestDeviceConfigs
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { СheckMark } from 'assets/images/svgr/check-mark';
import { ModalWarning } from 'assets/images/svgr/modal-warning';
import { ControllerSetupsEthernet } from './ControllerSetupsEthernet/ControllerSetupsEthernet';
import { ControllerSetupsRs } from './ControllerSetupsRs/ControllerSetupsRs';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './AccessPointsSetup.scss';

const AccessPointsSetupInner = () => {
    const dispatch = useDispatch();
    const { device, configs, controllers, connections } = useSelector(
        (state: State) => state.setupWizard.setupWizardEquipments,
        shallowEqual
    );

    const [controllerIsFinfd, setControllerIsFinfd] = useState(false);
    const [message, setMessage] = useState(false);

    // REQUEST CONTROLLER TYPES
    useEffect(() => {
        if (device.deviceType) {
            dispatch(requestDeviceControllersTypes(device.deviceType.id));
        }
    }, [dispatch, device.deviceType]);

    // REQUEST CONNECTION TYPES
    useEffect(() => {
        if (!controllers.controllerType && controllers.controllerTypes.length > 0) {
            dispatch(setupWizardDevicesControllerType(controllers.controllerTypes[0]));
        } else if (controllers.controllerType) {
            dispatch(requestDeviceСonnectionsTypes(controllers.controllerType.id));
        }
    }, [dispatch, controllers.controllerTypes, controllers.controllerType]);

    useEffect(() => {
        if (connections.connectionTypes.length > 0) {
            dispatch(setupWizardDevicesConnectionType(connections.connectionTypes[0]));
        }
    }, [dispatch, connections.connectionTypes]);

    // REQUEST DEVICE CONFIGS
    useEffect(() => {
        if (device.deviceType && controllers.controllerType && connections.connectionType) {
            dispatch(requestDeviceConfigs(device.deviceType.id, controllers.controllerType.id, connections.connectionType.id));
        }
    }, [dispatch, device.deviceType, controllers.controllerType, connections.connectionType]);

    const inputHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        if (target.name === 'accessPointsControllerType') {
            const selectedObjId = findIndexFunc(controllers.controllerTypes, target.value, 'name');

            dispatch(setupWizardDevicesControllerType(controllers.controllerTypes[selectedObjId]));
        } else if (target.name === 'accessPointType') {
            const selectedObjId = findIndexFunc(connections.connectionTypes, target.value, 'name');

            dispatch(setupWizardDevicesConnectionType(connections.connectionTypes[selectedObjId]));
        }
    };

    const findController = () => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * Math.floor(2));

            if (random === 1) {
                dispatch(setupWizardDeviceSerialNumber(`${Math.floor(Math.random() * 10000000000)}`));
                setControllerIsFinfd(true);
                setMessage(true);
            } else {
                dispatch(setupWizardDeviceSerialNumber(''));
                setControllerIsFinfd(true);
                setMessage(false);
            }
        }, 2000);
    };

    const connectionSettingsIsFilling = () => {
        const regexpIpv4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const regexpPort = /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;

        if (connections.connectionType) {
            if (connections.connectionType.name === 'Ethernet') {
                if (
                    configs.deviceSetup.protocol &&
                    regexpIpv4.exec(configs.deviceSetup.ip) &&
                    regexpIpv4.exec(configs.deviceSetup.mask) &&
                    regexpPort.exec(configs.deviceSetup.serverPort.toString()) &&
                    regexpPort.exec(configs.deviceSetup.clientPort.toString())
                ) {
                    return true;
                } else {
                    return false;
                }
            } else if (connections.connectionType.name === 'RS-485') {
                if (
                    configs.deviceSetup.devicePorts.port.length > 0 &&
                    configs.deviceSetup.baudrate &&
                    configs.deviceSetup.parity &&
                    configs.deviceSetup.bitCount &&
                    configs.deviceSetup.stopBit
                ) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    return (
        <div className="access-points-setup">
            <div className="access-points-setup__title">
                <div className="p--md--bold">Настройка точки доступа</div>
            </div>

            <div className="access-points-setup__body">
                <div className="device__setup">
                    <div className="device-settings__header">
                        <Inputs
                            label="Тип контроллера"
                            type="text"
                            name="accessPointsControllerType"
                            placeholder="Выберите тип"
                            onInputChange={inputHandler}
                            value={controllers.controllerType ? controllers.controllerType.name : ''}
                            list={controllers.controllerTypes ? controllers.controllerTypes.map((elem) => elem.name) : []}
                        />

                        <Inputs
                            label="Тип подключения"
                            type="text"
                            name="accessPointType"
                            onInputChange={inputHandler}
                            value={connections.connectionType ? connections.connectionType.name : ''}
                            list={connections.connectionTypes ? connections.connectionTypes.map((elem) => elem.name) : []}
                        />
                    </div>

                    <div className="device-settings__body">
                        {connections.connectionType && connections.connectionType.name === 'Ethernet' && <ControllerSetupsEthernet />}

                        {connections.connectionType && connections.connectionType.name === 'RS-485' && <ControllerSetupsRs />}
                    </div>

                    <div className="device-settings__footer">
                        <Buttons
                            name="Setup"
                            label="Проверить связь"
                            typical
                            disable={!connectionSettingsIsFilling()}
                            onPress={!connectionSettingsIsFilling() ? findController : undefined}
                        />
                    </div>
                </div>

                <div className="device__info">
                    {!controllerIsFinfd && (
                        <div className="access-points-type__description">
                            <div className="p--sm--normal">Выберите тип контроллера и тип подключения, чтобы продолжить настройку</div>

                            <div className="p--sm--normal">Следуйте указаниям мастера для завершения процесса настройки</div>
                        </div>
                    )}

                    {controllerIsFinfd && (
                        <div className="customization-tab__footer-message">
                            <div className={`customization-tab__footer-message-icon ${message ? 'icon--success' : 'icon--warning'}`}>
                                {message ? <СheckMark /> : <ModalWarning />}
                            </div>

                            <div className="customization-tab__footer-message-label">
                                <div className="p--sm--normal">
                                    {message ? 'Тип контроллера успешно определен.' : 'Определить контроллер не удалось.'}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const AccessPointsSetup = memo(AccessPointsSetupInner);
