import {
    SettingsAccessPointsState,
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

const initialState: SettingsAccessPointsState = {
    sidebarOpened: false,
    toggleBar: false,
    accessPointsWizard: {
        type: '',
        accessPoint: {
            name: '',
            description: '',
            connectionType: 'RS-485',
            port: 'COM1',
            speed: '38400',
            parity: 'Да',
            bit: '1',
            stopBit: '8',
            controllerType: '8',
            zoneToEnter: 'Зона №1',
            zoneToExit: 'Отдел кадров',
            serialNumber: '',
            busPort: ''
        },
        accessModules: [],
        sequenceNotImportant: false,
        useForTimeTracking: false,
        allowOfflineWork: false
    }
};

const SettingsAccessPoints = (state = initialState, action: SettingsAccessPointsActions): SettingsAccessPointsState => {
    switch (action.type) {
        case SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case SETTINGS_ACCESS_POINTS_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case SETTINGS_ACCESS_POINTS_POINT_TYPE:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    type: action.payload
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_NAME:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        name: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_DESCRIPTION:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        description: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_CONNECTION_TYPE:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        connectionType: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_PORT:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        port: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_SPEED:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        speed: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_PARITY:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        parity: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_BIT:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        bit: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_STOP_BIT:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        stopBit: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_CONTROLLER_TYPE:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        controllerType: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_ENTER:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        zoneToEnter: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_EXIT:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        zoneToExit: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_SERIAL_NUMBER:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        serialNumber: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_BUS_PORT:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessPoint: {
                        ...state.accessPointsWizard.accessPoint,
                        busPort: action.payload
                    }
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_ADD:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessModules: [...state.accessPointsWizard.accessModules, action.payload]
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_REMOVE:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessModules: action.payload
                }
            };
        case SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_DIRECTION:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    accessModules: action.payload
                }
            };
        case SETTINGS_ACCESS_POINTS_SEQUENCE_NOT_IMPORTANT:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    sequenceNotImportant: !state.accessPointsWizard.sequenceNotImportant
                }
            };
        case SETTINGS_ACCESS_POINTS_USE_FOR_TIME_TRACKING:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    useForTimeTracking: !state.accessPointsWizard.useForTimeTracking
                }
            };
        case SETTINGS_ACCESS_POINTS_ALLOW_OFFLINE_WORK:
            return {
                ...state,
                accessPointsWizard: {
                    ...state.accessPointsWizard,
                    allowOfflineWork: !state.accessPointsWizard.allowOfflineWork
                }
            };
        default:
            return state;
    }
};

export default SettingsAccessPoints;
