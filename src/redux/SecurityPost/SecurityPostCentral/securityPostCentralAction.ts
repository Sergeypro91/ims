import axios from 'axios';
import store from 'redux/store';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions } from 'redux/App/appTypes';
import { TriggeredSensor } from 'ui/pages/SecurityPost/SecurityPostCentral/modals/AccessPointControl/AccessModules/ModulesDirection/ModulesDirection';
import {
    Devices,
    Device,
    Events,
    EventPayload,
    SecurityPostCentralActions,
    SECURITY_POST_CENTRAL_GET_DEVICES,
    SECURITY_POST_CENTRAL_SELECT_DEVICE,
    SECURITY_POST_CENTRAL_CLEAR_DEVICES,
    SECURITY_POST_CENTRAL_GET_EVENTS,
    SECURITY_POST_CENTRAL_GET_EVENTS_ARR,
    SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BAR
} from './securityPostCentralType';

export const securityPostCentralGetDevices = (devices: Devices): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_GET_DEVICES,
    payload: devices
});

export const securityPostCentralSelectDevice = (device: number | string): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_SELECT_DEVICE,
    payload: device
});

export const securityPostCentralClearDevices = (): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_CLEAR_DEVICES
});

export const securityPostCentralGetEventsArr = (events: Events): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_GET_EVENTS_ARR,
    payload: events
});

export const securityPostCentralGetEvents = (event: EventPayload): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_GET_EVENTS,
    payload: event
});

export const securityPostCentralToggleSidebar = (): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR
});

export const securityPostCentralToggleBottombar = (): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR
});

export const securityPostCentralToggleBar = (): SecurityPostCentralActions => ({
    type: SECURITY_POST_CENTRAL_TOGGLE_BAR
});

export const requestEvents = () => (dispatch: Dispatch<SecurityPostCentralActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/devices/events?limit=50`)
        .then((response) => {
            dispatch(securityPostCentralGetEventsArr(response.data.payload));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDevices = () => (dispatch: Dispatch<SecurityPostCentralActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/devices`)
        .then((response) => {
            dispatch(securityPostCentralGetDevices(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const reloadDevices = (uuid: number | string, toast: { type: string; message: string }) => (
    dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>
) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/devices`)
        .then((resp) => {
            dispatch(securityPostCentralGetDevices(resp.data));
        })
        .then(() => {
            dispatch(securityPostCentralSelectDevice(uuid));
            dispatch(appToastAdd(toast));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const triggerDevice = (device: Device) => (dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>) => {
    axios
        .post(`${store.getState().app.config.apiUrl}/devices/${device.uuid}/enable`, {
            enable: !device.enabled
        })
        .then((response) => {
            console.log(response.data);

            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `${device.name} успешно ${device.enabled ? 'отключен' : 'включен'}.`
                };

                dispatch(reloadDevices(device.uuid, toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `Ошибка! Устройство "${device.name}" не удалось ${device.enabled ? 'отключить' : 'включить'}.`
                };

                console.log('Error');

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const triggerSensor = (item: TriggeredSensor) => (dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>) => {
    axios
        .post(`${store.getState().app.config.apiUrl}/devices/${item.device.uuid}/sensors/${item.sensorUuid}/enable`, {
            enable: !item.enabled
        })
        .then((response) => {
            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `${item.device.name} успешно ${item.sensorName ? 'включен' : 'отключен'}.`
                };

                dispatch(reloadDevices(item.device.uuid, toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `${item.device.name} не удалось ${item.sensorName ? 'отключить' : 'включить'}.`
                };

                console.log('Error');

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const triggerDeviceMode = (device: Device, direction: string, accessMode: string) => (
    dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>
) => {
    let mode: { accessModeIn: number } | { accessModeOut: number } | null = null;

    if (accessMode === 'free') {
        if (direction === 'enter') {
            if (device.accessModeIn !== 0) {
                mode = { accessModeIn: 0 };
            } else if (device.accessModeIn === 0) {
                mode = { accessModeIn: 1 };
            }
        } else if (direction === 'exit') {
            if (device.accessModeOut !== 0) {
                mode = { accessModeOut: 0 };
            } else if (device.accessModeOut === 0) {
                mode = { accessModeOut: 1 };
            }
        }
    } else if (accessMode === 'blocked') {
        if (direction === 'enter') {
            if (device.accessModeIn !== -1) {
                mode = { accessModeIn: -1 };
            } else if (device.accessModeIn === -1) {
                mode = { accessModeIn: 1 };
            }
        } else if (direction === 'exit') {
            if (device.accessModeOut !== -1) {
                mode = { accessModeOut: -1 };
            } else if (device.accessModeOut === -1) {
                mode = { accessModeOut: 1 };
            }
        }
    }

    axios
        .post(`${store.getState().app.config.apiUrl}/devices/${device.uuid}/accessmode`, {
            ...mode
        })
        .then((response) => {
            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `Режим устройства ${device.name} успешно изменен.`
                };

                dispatch(reloadDevices(device.uuid, toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `Ошибка. Режим устройства ${device.name} не изменен.`
                };

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const oneTimePass = (device: Device, direction: string) => (
    dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>
) => {
    let comand: { cmd: number; direction: number } | null = null;

    switch (direction) {
        case 'enter':
            comand = { cmd: 2, direction: 2 };
            break;
        case 'exit':
            comand = { cmd: 2, direction: 1 };
            break;
        default:
            break;
    }

    axios
        .post(`${store.getState().app.config.apiUrl}/devices/${device.uuid}/exec`, { ...comand })
        .then((response) => {
            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `Разовый проход на устройстве ${device.name} разрешен.`
                };

                dispatch(appToastAdd(toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `Ошибка. Разовый проход на устройстве ${device.name} невозможен.`
                };

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export const changeAllDirection = (device: Device, changeModeTo: string) => (
    dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>
) => {
    let mode: { accessModeIn: number; accessModeOut: number } | null = null;

    switch (changeModeTo) {
        case 'free':
            mode = { accessModeIn: 0, accessModeOut: 0 };
            break;
        case 'control':
            mode = { accessModeIn: 1, accessModeOut: 1 };
            break;
        case 'block':
            mode = { accessModeIn: -1, accessModeOut: -1 };
            break;
        default:
            break;
    }

    axios
        .post(`${store.getState().app.config.apiUrl}/devices/${device.uuid}/accessmode`, {
            ...mode
        })
        .then((response) => {
            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `Режимы устройства ${device.name} успешно изменены на ${changeModeTo === 'free' && '"Свободный проход"'} ${
                        changeModeTo === 'control' && '"Контроль"'
                    } ${changeModeTo === 'block' && '"Блокировка"'}.`
                };

                dispatch(reloadDevices(device.uuid, toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `Ошибка. Режимы устройства ${device.name} не изменены.`
                };

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
