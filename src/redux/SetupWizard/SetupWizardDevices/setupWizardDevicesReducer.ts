import {
    SetupWizardDevicesState,
    SetupWizardDeviceActions,
    SETUP_WIZAR_DEVICE_TYPES,
    SETUP_WIZAR_DEVICE_TYPE,
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

const initialState: SetupWizardDevicesState = {
        device: {
            deviceTypes: [],
            deviceType: null,
        },
        zonning: {
            accessZones: [],
            accessZoneOnIn: null,
            accessZoneOnOut: null
        },
        controllers: {
            controllerTypes: [],
            controllerType: null
        },
        connections: {
            connectionTypes: [],
            connectionType: null
        },
        configs:{
            deviceConfigs: [],
            deviceConfig: null,
            deviceSetup: {
                name: '',
                description: '',
                protocol: '',
                ip: '',
                mask: '',
                serverPort: 1,
                clientPort: 1,
                devicePorts: {
                    ports: [],
                    port: ''
                },
                baudrate: 9600,
                parity: 0,
                bitCount: 7,
                stopBit: 1,
                serialNumber: '',
                busPort: ''
            }
        },
        accessModules: [],
        sequenceNotImportant: false,
        useForTimeTracking: false,
        allowOfflineWork: false
};

const SetupWizardDevices = (state = initialState, action: SetupWizardDeviceActions): SetupWizardDevicesState => {
    switch (action.type) {
        case SETUP_WIZAR_DEVICE_TYPES:
            return {
                ...state,
                device: {
                    ...state.device,
                    deviceTypes: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_TYPE:
            return {
                ...state,
                device: {
                    ...state.device,
                    deviceType: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_ACCESS_ZONES:
            return {
                ...state,
                zonning: {
                    ...state.zonning,
                    accessZones: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_IN:
            return {
                ...state,
                zonning: {
                    ...state.zonning,
                    accessZoneOnIn: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_OUT:
            return {
                ...state,
                zonning: {
                    ...state.zonning,
                    accessZoneOnOut: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_CONTROLLER_TYPES:
            return {
                ...state,
                controllers: {
                    ...state.controllers,
                    controllerTypes: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_CONTROLLER_TYPE:
            return {
                ...state,
                controllers: {
                    ...state.controllers,
                    controllerType: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_CONNECTION_TYPES:
            return {
                ...state,
                connections: {
                    ...state.connections,
                    connectionTypes: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_CONNECTION_TYPE:
            return {
                ...state,
                connections: {
                    ...state.connections,
                    connectionType: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_NAME:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        name: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_DESCRIPTION:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        description: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_PROTOCOL:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        protocol: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_IP:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        ip: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_MASK:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        mask: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_SERVER_PORT:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        serverPort: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_CLIENT_PORT:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        clientPort: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_PORTS:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        devicePorts: {
                            ...state.configs.deviceSetup.devicePorts,
                            ports: action.payload
                        }
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_PORT:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        devicePorts: {
                            ...state.configs.deviceSetup.devicePorts,
                            port: action.payload
                        }
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_SPEED:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        baudrate: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_PARITY:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        parity: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_BIT:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        bitCount: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_STOP_BIT:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        stopBit: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_SERIAL_NUMBER:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        serialNumber: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_BUS_PORT:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceSetup: {
                        ...state.configs.deviceSetup,
                        busPort: action.payload
                    }
                }
            };
        case SETUP_WIZAR_DEVICE_CONFIGS:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceConfigs: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_CONFIG:
            return {
                ...state,
                configs: {
                    ...state.configs,
                    deviceConfig: action.payload
                }
            };
        case SETUP_WIZAR_DEVICE_ACCESS_MODULE_ADD:
            return {
                ...state,
                accessModules: [...state.accessModules, action.payload]
            };
        case SETUP_WIZAR_DEVICE_ACCESS_MODULE_REMOVE:
            return {
                ...state,
                accessModules: action.payload
            };
        case SETUP_WIZAR_DEVICE_ACCESS_MODULE_DIRECTION:
            return {
                ...state,
                accessModules: action.payload
            };
        case SETUP_WIZAR_DEVICE_SEQUENCE_NOT_IMPORTANT:
            return {
                ...state,
                sequenceNotImportant: !state.sequenceNotImportant
            };
        case SETUP_WIZAR_DEVICE_USE_FOR_TIME_TRACKING:
            return {
                ...state,
                useForTimeTracking: !state.useForTimeTracking
            };
        case SETUP_WIZAR_DEVICE_ALLOW_OFFLINE_WORK:
            return {
                ...state,
                allowOfflineWork: !state.allowOfflineWork
            };
        case SETUP_WIZAR_DEVICE_CLEAR:
            return {
                ...state,
                zonning: {
                    accessZones: [],
                    accessZoneOnIn: null,
                    accessZoneOnOut: null
                },
                controllers: {
                    controllerTypes: [],
                    controllerType: null
                },
                connections: {
                    connectionTypes: [],
                    connectionType: null
                },
                configs:{
                    deviceConfigs: [],
                    deviceConfig: null,
                    deviceSetup: {
                        name: '',
                        description: '',
                        protocol: '',
                        ip: '',
                        mask: '',
                        serverPort: 1,
                        clientPort: 1,
                        devicePorts: {
                            ports: [],
                            port: ''
                        },
                        baudrate: 9600,
                        parity: 0,
                        bitCount: 7,
                        stopBit: 1,
                        serialNumber: '',
                        busPort: ''
                    }
                }
            };
        default:
            return state;
    }
};

export default SetupWizardDevices;
