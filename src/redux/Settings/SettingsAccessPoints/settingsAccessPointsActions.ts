import {
    AccessModule,
    SettingsAccessPointsActions,
    SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR,
    SETTINGS_ACCESS_POINTS_TOGGLE_BAR,
    SETTINGS_ACCESS_POINTS_POINT_TYPE,
    SETTINGS_ACCESS_POINTS_POINT_NAME,
    SETTINGS_ACCESS_POINTS_POINT_DESCRIPTION,
    SETTINGS_ACCESS_POINTS_POINT_CONNECTION_TYPE,
    SETTINGS_ACCESS_POINTS_POINT_PORT,
    SETTINGS_ACCESS_POINTS_POINT_SPEED,
    SETTINGS_ACCESS_POINTS_POINT_PARITY,
    SETTINGS_ACCESS_POINTS_POINT_BIT,
    SETTINGS_ACCESS_POINTS_POINT_STOP_BIT,
    SETTINGS_ACCESS_POINTS_POINT_CONTROLLER_TYPE,
    SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_ENTER,
    SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_EXIT,
    SETTINGS_ACCESS_POINTS_POINT_SERIAL_NUMBER,
    SETTINGS_ACCESS_POINTS_POINT_BUS_PORT,
    SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_ADD,
    SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_REMOVE,
    SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_DIRECTION,
    SETTINGS_ACCESS_POINTS_SEQUENCE_NOT_IMPORTANT,
    SETTINGS_ACCESS_POINTS_USE_FOR_TIME_TRACKING,
    SETTINGS_ACCESS_POINTS_ALLOW_OFFLINE_WORK
} from './settingsAccessPointsTypes';

export const settingsAccessPointsToggleSidebar = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR
});

export const settingsAccessPointsToggleBar = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_TOGGLE_BAR
});

export const settingsAccessPointsType = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_TYPE,
        payload
    };
};

export const settingsAccessPointsPointName = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_NAME,
        payload
    };
};

export const settingsAccessPointsPointDescription = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_DESCRIPTION,
        payload
    };
};

export const settingsAccessPointsPointConnectionType = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_CONNECTION_TYPE,
        payload
    };
};

export const settingsAccessPointsPointPort = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_PORT,
        payload
    };
};

export const settingsAccessPointsPointSpeed = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_SPEED,
        payload
    };
};

export const settingsAccessPointsPointParity = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_PARITY,
        payload
    };
};

export const settingsAccessPointsPointBit = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_BIT,
        payload
    };
};

export const settingsAccessPointsPointStopBit = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_STOP_BIT,
        payload
    };
};

export const settingsAccessPointsPointControllerType = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_CONTROLLER_TYPE,
        payload
    };
};

export const settingsAccessPointsPointZoneToEnter = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_ENTER,
        payload
    };
};

export const settingsAccessPointsPointZoneToExit = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_EXIT,
        payload
    };
};

export const settingsAccessPointsPointSerialNumber = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_SERIAL_NUMBER,
        payload
    };
};

export const settingsAccessPointsPointBusPort = (payload: string): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_BUS_PORT,
        payload
    };
};

export const settingsAccessPointsPointAccessModuleAdd = (payload: AccessModule): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_ADD,
        payload
    };
};

export const settingsAccessPointsPointAccessModuleRemove = (payload: AccessModule[]): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_REMOVE,
        payload
    };
};

export const settingsAccessPointsPointAccessModuleDirection = (
    payload: AccessModule[]
): SettingsAccessPointsActions => {
    return {
        type: SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_DIRECTION,
        payload
    };
};

export const settingsAccessPointsSequenceNotImportant = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_SEQUENCE_NOT_IMPORTANT
});

export const settingsAccessPointsUseForTimeTracking = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_USE_FOR_TIME_TRACKING
});

export const settingsAccessPointsAllowOfflineWork = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_ALLOW_OFFLINE_WORK
});
