import axios from 'axios';
import { Dispatch } from 'react';
import store from 'redux/store';
import {
    AccessModule,
    SetupWizardDeviceActions,
    DeviceTypes,
    DeviceType,
    AccessZones,
    AccessZone,
    ControllerTypes,
    ControllerType,
    ConnectionTypes,
    ConnectionType,
    DeviceConfigs,
    DeviceConfig,
    SETUP_WIZAR_DEVICE_TYPE,
    SETUP_WIZAR_DEVICE_TYPES,
    SETUP_WIZAR_DEVICE_ACCESS_ZONES,
    SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_IN,
    SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_OUT,
    SETUP_WIZAR_DEVICE_CONTROLLER_TYPES,
    SETUP_WIZAR_DEVICE_CONTROLLER_TYPE,
    SETUP_WIZAR_DEVICE_CONNECTION_TYPES,
    SETUP_WIZAR_DEVICE_CONNECTION_TYPE,
    SETUP_WIZAR_DEVICE_NAME,
    SETUP_WIZAR_DEVICE_DESCRIPTION,
    SETUP_WIZAR_DEVICE_PROTOCOL,
    SETUP_WIZAR_DEVICE_MASK,
    SETUP_WIZAR_DEVICE_IP,
    SETUP_WIZAR_DEVICE_SERVER_PORT,
    SETUP_WIZAR_DEVICE_CLIENT_PORT,
    SETUP_WIZAR_DEVICE_PORTS,
    SETUP_WIZAR_DEVICE_PORT,
    SETUP_WIZAR_DEVICE_SPEED,
    SETUP_WIZAR_DEVICE_PARITY,
    SETUP_WIZAR_DEVICE_BIT,
    SETUP_WIZAR_DEVICE_STOP_BIT,
    SETUP_WIZAR_DEVICE_SERIAL_NUMBER,
    SETUP_WIZAR_DEVICE_BUS_PORT,
    SETUP_WIZAR_DEVICE_CONFIGS,
    SETUP_WIZAR_DEVICE_CONFIG,
    SETUP_WIZAR_DEVICE_ACCESS_MODULE_ADD,
    SETUP_WIZAR_DEVICE_ACCESS_MODULE_REMOVE,
    SETUP_WIZAR_DEVICE_ACCESS_MODULE_DIRECTION,
    SETUP_WIZAR_DEVICE_SEQUENCE_NOT_IMPORTANT,
    SETUP_WIZAR_DEVICE_USE_FOR_TIME_TRACKING,
    SETUP_WIZAR_DEVICE_ALLOW_OFFLINE_WORK,
    SETUP_WIZAR_DEVICE_CLEAR
} from './setupWizardDevicesTypes';

export const setupWizardDevicesTypes = (types: DeviceTypes): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_TYPES,
        payload: types
    };
};

export const setupWizardDevicesType = (type: DeviceType): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_TYPE,
        payload: type
    };
};

export const setupWizardDevicesAccessZones = (accessZones: AccessZones): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_ACCESS_ZONES,
        payload: accessZones
    };
};

export const setupWizardDevicesAccessZoneOnIn = (accessZoneOnIn: AccessZone): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_IN,
        payload: accessZoneOnIn
    };
};

export const setupWizardDevicesAccessZoneOnOut = (accessZoneOnOut: AccessZone): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_OUT,
        payload: accessZoneOnOut
    };
};

export const setupWizardDevicesControllerTypes = (controllerTypes: ControllerTypes): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CONTROLLER_TYPES,
        payload: controllerTypes
    };
};

export const setupWizardDevicesControllerType = (controllerType: ControllerType): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CONTROLLER_TYPE,
        payload: controllerType
    };
};

export const setupWizardDevicesConnectionTypes = (connectionTypes: ConnectionTypes): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CONNECTION_TYPES,
        payload: connectionTypes
    };
};

export const setupWizardDevicesConnectionType = (connectionType: ConnectionType): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CONNECTION_TYPE,
        payload: connectionType
    };
};

export const setupWizardDeviceName = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_NAME,
        payload
    };
};

export const setupWizardDeviceDescription = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_DESCRIPTION,
        payload
    };
};

export const setupWizardDeviceProtocol = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_PROTOCOL,
        payload
    };
};

export const setupWizardDeviceIp = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_IP,
        payload
    };
};

export const setupWizardDeviceMask = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_MASK,
        payload
    };
};

export const setupWizardDeviceServerPort = (payload: number): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_SERVER_PORT,
        payload
    };
};

export const setupWizardDeviceClientPort = (payload: number): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CLIENT_PORT,
        payload
    };
};

export const setupWizardDevicePorts = (payload: string[]): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_PORTS,
        payload
    };
};

export const setupWizardDevicePort = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_PORT,
        payload
    };
};

export const setupWizardDeviceBaudrate = (payload: number): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_SPEED,
        payload
    };
};

export const setupWizardDeviceParity = (payload: number): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_PARITY,
        payload
    };
};

export const setupWizardDeviceBitCount = (payload: number): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_BIT,
        payload
    };
};

export const setupWizardDeviceStopBit = (payload: number): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_STOP_BIT,
        payload
    };
};

export const setupWizardDeviceSerialNumber = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_SERIAL_NUMBER,
        payload
    };
};

export const setupWizardDeviceBusPort = (payload: string): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_BUS_PORT,
        payload
    };
};

export const setupWizardDeviceConfigs = (deviceConfigs: DeviceConfigs): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CONFIGS,
        payload: deviceConfigs
    };
};

export const setupWizardDeviceConfig = (deviceConfig: DeviceConfig): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_CONFIG,
        payload: deviceConfig
    };
};

export const setupWizardDeviceAccessModuleAdd = (payload: AccessModule): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_ACCESS_MODULE_ADD,
        payload
    };
};

export const setupWizardDeviceAccessModuleRemove = (payload: AccessModule[]): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_ACCESS_MODULE_REMOVE,
        payload
    };
};

export const setupWizardDeviceAccessModuleDirection = (
    payload: AccessModule[]
): SetupWizardDeviceActions => {
    return {
        type: SETUP_WIZAR_DEVICE_ACCESS_MODULE_DIRECTION,
        payload
    };
};

export const setupWizardDevicesSequenceNotImportant = (): SetupWizardDeviceActions => ({
    type: SETUP_WIZAR_DEVICE_SEQUENCE_NOT_IMPORTANT
});

export const setupWizardDevicesUseForTimeTracking = (): SetupWizardDeviceActions => ({
    type: SETUP_WIZAR_DEVICE_USE_FOR_TIME_TRACKING
});

export const setupWizardDevicesAllowOfflineWork = (): SetupWizardDeviceActions => ({
    type: SETUP_WIZAR_DEVICE_ALLOW_OFFLINE_WORK
});

export const setupWizardDevicesClear = (): SetupWizardDeviceActions => ({
    type: SETUP_WIZAR_DEVICE_CLEAR
});

export const requestDeviceTypes = () => (dispatch: Dispatch<SetupWizardDeviceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/devices/types`)
        .then((response) => {
            dispatch(setupWizardDevicesTypes(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDeviceAccessZones = () => (dispatch: Dispatch<SetupWizardDeviceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/zones`)
        .then((response) => {
            dispatch(setupWizardDevicesAccessZones(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDeviceControllersTypes = (deviceTypeId: number) => (dispatch: Dispatch<SetupWizardDeviceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/controllers/types?deviceTypeId=${deviceTypeId}`)
        .then((response) => {
            dispatch(setupWizardDevicesControllerTypes(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDeviceСonnectionsTypes = (controllerTypeId: number) => (dispatch: Dispatch<SetupWizardDeviceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/connections/types?controllerTypeId=${controllerTypeId}`)
        .then((response) => {
            dispatch(setupWizardDevicesConnectionTypes(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDeviceConfigs = (deviceTypeId: number, controllerTypeId: number, connectionTypeId: number) => (dispatch: Dispatch<SetupWizardDeviceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/connections/configs?deviceTypeId=${deviceTypeId}&controllerTypeId=${controllerTypeId}&connectionTypeId=${connectionTypeId}`)
        .then((response) => {
            dispatch(setupWizardDeviceConfigs(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const requestDevicePorts = () => (dispatch: Dispatch<SetupWizardDeviceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/core/ports/com`)
        .then((response) => {
            dispatch(setupWizardDevicePorts(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};
