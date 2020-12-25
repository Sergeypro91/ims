import axios from 'axios';
import config from 'config/config.json';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions } from 'redux/App/appTypes';
import {TriggeredSensor} from 'App/components/pages/SecurityPost/SecurityPostCentral/modals/AccessPointControl/AccessModules/ModulesDirection/ModulesDirection'
import {
    Devices,
    Device,
    Sensor,
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

export const securityPostCentralSelectDevice = (device: Device): SecurityPostCentralActions => ({
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
        .get(`${config.testApi2}/devices/events?limit=50`)
        .then((response) => {
            dispatch(securityPostCentralGetEventsArr(response.data.payload));

            console.log(response.data.payload);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDevices = () => (dispatch: Dispatch<SecurityPostCentralActions>) => {
    axios
        .get(`${config.testApi2}/devices`)
        .then((response) => {
            dispatch(securityPostCentralGetDevices(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const triggerDevices = (device: Device) => (
    dispatch: Dispatch<SecurityPostCentralActions | AppActions | Dispatch<any>>
) => {
    axios
        .post(`${config.testApi2}/device/${device.uuid}/enable`, { enable: !device.enabled })
        .then((response) => {
            console.log(response.data);

            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `${device.name} успешно ${device.enabled ? 'отключен' : 'включен'}.`
                };

                console.log('Success');

                dispatch(securityPostCentralSelectDevice({ ...device, enabled: !device.enabled }));
                dispatch(requestDevices());
                dispatch(appToastAdd(toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `Ошибка! Устройство "${device.name}" не удалось ${
                        device.enabled ? 'отключить' : 'включить'
                    }.`
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
        .post(`${config.testApi2}/device/${item.device.uuid}/sensor/${item.sensorUuid}/enable`, { enable: !item.enabled })
        .then((response) => {
            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: `${item.device.name} успешно ${item.sensorName ? 'включен' : 'отключен'}.`
                };

                const findIndexFunc = (arr: any[], index: number | string) => {
                    function checkId(id1: number | string, id2: number | string) {
                        return id1 === id2;
                    }
            
                    return arr.findIndex((val) => checkId(val.uuid, index));
                };

                
                let updatedSensors = item.device.sensors;
                const index = findIndexFunc(item.device.sensors!, item.sensorUuid);

                updatedSensors![index].enabled = !item.enabled

                updatedSensors = [ ...updatedSensors!.filter((item) => item.enabled), ...updatedSensors!.filter((item) => !item.enabled), ]

                
                dispatch(securityPostCentralSelectDevice({ ...item.device, sensors: updatedSensors }));
                dispatch(requestDevices());
                dispatch(appToastAdd(toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `${item.device.name} не удалось ${item.sensorName ? 'отключить' : 'включить'
                    }.`
                };

                console.log('Error');

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
