export interface Device {
    deviceTypes: DeviceTypes;
    deviceType: null | DeviceType;
}

export type DeviceTypes = Array<DeviceType>;

export interface DeviceType {
    id: number;
    name: string;
    enabled: boolean;
    idx: number;
}

export interface Zonning {
    accessZones: AccessZones;
    accessZoneOnIn: null | AccessZone;
    accessZoneOnOut: null | AccessZone;
}

export type AccessZones = Array<AccessZone>;

export interface AccessZone {
    uuid: string;
    id: number;
    name: string;
    description: string;
    parentUUID: string;
    enabled: number;
}

export interface Controllers {
    controllerTypes: ControllerTypes;
    controllerType: null | ControllerType;
}

export type ControllerTypes = Array<ControllerType>;

export interface ControllerType {
    id: number;
    name: string;
    deviceTypeId: number;
    deviceTypeName: string;
    syncSupport: number;
    syncSupportStr: string;
}

export interface Connections {
    connectionTypes: ConnectionTypes;
    connectionType: null | ConnectionType;
}

export type ConnectionTypes = Array<ConnectionType>

export interface ConnectionType {
    id: number;
    name: string;
    controllerTypeId: number;
}

export interface Configs {
    deviceConfigs: DeviceConfigs;
    deviceConfig: null | DeviceConfig;
    deviceSetup: DeviceSetup;
}

export type DeviceConfigs = Array<DeviceConfig>

export interface DeviceConfig {
    name: string;
    id: number;
    controllerTypeId: number;
    controllerTypeName: string;
    deviceTypeId: number;
    deviceTypeName: string;
    syncSupport: number;
    syncSupportStr: string;
    connectionTypeId: number;
    connectionTypeName: string;
    baudrate: number;
    parity: number;
    bitCount: number;
    stopBits: number;    
    connectionSubTypeId: number;
    connectionSubTypeName: string;
    port: number;
    serverAddress: string;
    serverMask: string;
    serverPort: number;
    clientAddress: string;
    clientMask: string;
    clientPort: number;
}

export interface DeviceSetup {
    name: string;
    description: string;
    protocol: string;
    ip: string;
    mask: string;
    serverPort: number;
    clientPort: number;
    devicePorts: {
        ports: string[];
        port: string;
    };
    baudrate: number;
    parity: number;
    bitCount: number;
    stopBit: number;
    busPort: string;
    serialNumber: string;
}

export type AccessModules = Array<AccessModule>

export interface AccessModule {
    index: number;
    class: string;
    type: string;
    name: string;
    direction: string;
    sequence: ModuleSecuence;
}

export interface ModuleSecuence {
    onEnter: boolean;
    onExit: boolean;
}

export interface SetupWizardDevicesState {
    device: Device;
    zonning: Zonning;
    controllers: Controllers;
    connections: Connections;
    configs: Configs;
    accessModules: AccessModules;
    sequenceNotImportant: boolean;
    useForTimeTracking:boolean;
    allowOfflineWork: boolean;
}

export const SETUP_WIZAR_DEVICE_TYPES = 'SETUP_WIZAR_DEVICE_TYPES';
export const SETUP_WIZAR_DEVICE_TYPE = 'SETUP_WIZAR_DEVICE_TYPE';
export const SETUP_WIZAR_DEVICE_ACCESS_ZONES = 'SETUP_WIZAR_DEVICE_ACCESS_ZONES';
export const SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_IN = 'SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_IN';
export const SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_OUT = 'SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_OUT';
export const SETUP_WIZAR_DEVICE_CONTROLLER_TYPES = 'SETUP_WIZAR_DEVICE_CONTROLLER_TYPES';
export const SETUP_WIZAR_DEVICE_CONTROLLER_TYPE = 'SETUP_WIZAR_DEVICE_CONTROLLER_TYPE';
export const SETUP_WIZAR_DEVICE_CONNECTION_TYPES = 'SETUP_WIZAR_DEVICE_CONNECTION_TYPES';
export const SETUP_WIZAR_DEVICE_CONNECTION_TYPE = 'SETUP_WIZAR_DEVICE_CONNECTION_TYPE';
export const SETUP_WIZAR_DEVICE_NAME = 'SETUP_WIZAR_DEVICE_NAME';
export const SETUP_WIZAR_DEVICE_DESCRIPTION = 'SETUP_WIZAR_DEVICE_DESCRIPTION';
export const SETUP_WIZAR_DEVICE_PROTOCOL = 'SETUP_WIZAR_DEVICE_PROTOCOL';
export const SETUP_WIZAR_DEVICE_IP = 'SETUP_WIZAR_DEVICE_IP';
export const SETUP_WIZAR_DEVICE_MASK = 'SETUP_WIZAR_DEVICE_MASK';
export const SETUP_WIZAR_DEVICE_SERVER_PORT = 'SETUP_WIZAR_DEVICE_SERVER_PORT';
export const SETUP_WIZAR_DEVICE_CLIENT_PORT = 'SETUP_WIZAR_DEVICE_CLIENT_PORT';
export const SETUP_WIZAR_DEVICE_PORTS = 'SETUP_WIZAR_DEVICE_PORTS';
export const SETUP_WIZAR_DEVICE_PORT = 'SETUP_WIZAR_DEVICE_PORT';
export const SETUP_WIZAR_DEVICE_SPEED = 'SETUP_WIZAR_DEVICE_SPEED';
export const SETUP_WIZAR_DEVICE_PARITY = 'SETUP_WIZAR_DEVICE_PARITY';
export const SETUP_WIZAR_DEVICE_BIT = 'SETUP_WIZAR_DEVICE_BIT';
export const SETUP_WIZAR_DEVICE_STOP_BIT = 'SETUP_WIZAR_DEVICE_STOP_BIT';
export const SETUP_WIZAR_DEVICE_SERIAL_NUMBER = 'SETUP_WIZAR_DEVICE_SERIAL_NUMBER';
export const SETUP_WIZAR_DEVICE_BUS_PORT = 'SETUP_WIZAR_DEVICE_BUS_PORT';
export const SETUP_WIZAR_DEVICE_CONFIGS = 'SETUP_WIZAR_DEVICE_CONFIGS';
export const SETUP_WIZAR_DEVICE_CONFIG = 'SETUP_WIZAR_DEVICE_CONFIG';
export const SETUP_WIZAR_DEVICE_ACCESS_MODULE_ADD = 'SETUP_WIZAR_DEVICE_ACCESS_MODULE_ADD';
export const SETUP_WIZAR_DEVICE_ACCESS_MODULE_REMOVE = 'SETUP_WIZAR_DEVICE_ACCESS_MODULE_REMOVE';
export const SETUP_WIZAR_DEVICE_ACCESS_MODULE_DIRECTION =
    'SETUP_WIZAR_DEVICE_ACCESS_MODULE_DIRECTION';
export const SETUP_WIZAR_DEVICE_SEQUENCE_NOT_IMPORTANT = 'SETUP_WIZAR_DEVICE_SEQUENCE_NOT_IMPORTANT';
export const SETUP_WIZAR_DEVICE_USE_FOR_TIME_TRACKING = 'SETUP_WIZAR_DEVICE_USE_FOR_TIME_TRACKING';
export const SETUP_WIZAR_DEVICE_ALLOW_OFFLINE_WORK = 'SETUP_WIZAR_DEVICE_ALLOW_OFFLINE_WORK';
export const SETUP_WIZAR_DEVICE_CLEAR = 'SETUP_WIZAR_DEVICE_CLEAR';

interface SetupWizardDevicePointTypes {
    type: typeof SETUP_WIZAR_DEVICE_TYPES;
    payload: DeviceTypes;
}

interface SetupWizardDevicePointType {
    type: typeof SETUP_WIZAR_DEVICE_TYPE;
    payload: DeviceType;
}

interface SetupWizardDeviceAccessZones {
    type: typeof SETUP_WIZAR_DEVICE_ACCESS_ZONES;
    payload: AccessZones;
}

interface SetupWizardDeviceAccessZoneOnIn {
    type: typeof SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_IN;
    payload: AccessZone;
}

interface SetupWizardDeviceAccessZoneOnOut {
    type: typeof SETUP_WIZAR_DEVICE_ACCESS_ZONE_ON_OUT;
    payload: AccessZone;
}

interface SetupWizardDeviceControllerTypes {
    type: typeof SETUP_WIZAR_DEVICE_CONTROLLER_TYPES;
    payload: ControllerTypes;
}

interface SetupWizardDeviceControllerType {
    type: typeof SETUP_WIZAR_DEVICE_CONTROLLER_TYPE;
    payload: ControllerType;
}

interface SetupWizardDeviceConnectionTypes {
    type: typeof SETUP_WIZAR_DEVICE_CONNECTION_TYPES;
    payload: ConnectionTypes;
}

interface SetupWizardDeviceConnectionType {
    type: typeof SETUP_WIZAR_DEVICE_CONNECTION_TYPE;
    payload: ConnectionType;
}

interface SetupWizardDevicePointName {
    type: typeof SETUP_WIZAR_DEVICE_NAME;
    payload: string;
}

interface SetupWizardDevicePointDescription {
    type: typeof SETUP_WIZAR_DEVICE_DESCRIPTION;
    payload: string;
}

interface SetupWizardDevicePointProtocol {
    type: typeof SETUP_WIZAR_DEVICE_PROTOCOL;
    payload: string;
}

interface SetupWizardDevicePointIp {
    type: typeof SETUP_WIZAR_DEVICE_IP;
    payload: string;
}

interface SetupWizardDevicePointMask {
    type: typeof SETUP_WIZAR_DEVICE_MASK;
    payload: string;
}

interface SetupWizardDevicePointServerPort {
    type: typeof SETUP_WIZAR_DEVICE_SERVER_PORT;
    payload: number;
}

interface SetupWizardDevicePointClientPort {
    type: typeof SETUP_WIZAR_DEVICE_CLIENT_PORT;
    payload: number;
}

interface SetupWizardDevicePointPorts {
    type: typeof SETUP_WIZAR_DEVICE_PORTS;
    payload: string[];
}

interface SetupWizardDevicePointPort {
    type: typeof SETUP_WIZAR_DEVICE_PORT;
    payload: string;
}

interface SetupWizardDevicePointBaudrate {
    type: typeof SETUP_WIZAR_DEVICE_SPEED;
    payload: number;
}

interface SetupWizardDevicePointParity {
    type: typeof SETUP_WIZAR_DEVICE_PARITY;
    payload: number;
}

interface SetupWizardDevicePointBit {
    type: typeof SETUP_WIZAR_DEVICE_BIT;
    payload: number;
}

interface SetupWizardDevicePointStopBit {
    type: typeof SETUP_WIZAR_DEVICE_STOP_BIT;
    payload: number;
}

interface SetupWizardDevicePointSerialNumber {
    type: typeof SETUP_WIZAR_DEVICE_SERIAL_NUMBER;
    payload: string;
}

interface SetupWizardDevicePointBusPort {
    type: typeof SETUP_WIZAR_DEVICE_BUS_PORT;
    payload: string;
}

interface SetupWizardDeviceConfigs {
    type: typeof SETUP_WIZAR_DEVICE_CONFIGS;
    payload: DeviceConfigs;
}

interface SetupWizardDeviceConfig {
    type: typeof SETUP_WIZAR_DEVICE_CONFIG;
    payload: DeviceConfig;
}

interface SetupWizardDevicePointAccessModuleAdd {
    type: typeof SETUP_WIZAR_DEVICE_ACCESS_MODULE_ADD;
    payload: AccessModule;
}

interface SetupWizardDevicePointAccessModuleRemove {
    type: typeof SETUP_WIZAR_DEVICE_ACCESS_MODULE_REMOVE;
    payload: AccessModule[];
}

interface SetupWizardDevicePointAccessModuleDirection {
    type: typeof SETUP_WIZAR_DEVICE_ACCESS_MODULE_DIRECTION;
    payload: AccessModule[];
}

interface SetupWizardDeviceSequenceNotImportant {
    type: typeof SETUP_WIZAR_DEVICE_SEQUENCE_NOT_IMPORTANT;
}

interface SetupWizardDeviceUseForTimeTracking {
    type: typeof SETUP_WIZAR_DEVICE_USE_FOR_TIME_TRACKING;
}

interface SetupWizardDeviceAllowOfflineWork {
    type: typeof SETUP_WIZAR_DEVICE_ALLOW_OFFLINE_WORK;
}

interface SetupWizardDeviceClear {
    type: typeof SETUP_WIZAR_DEVICE_CLEAR;
}

export type SetupWizardDeviceActions =
    | SetupWizardDevicePointTypes
    | SetupWizardDevicePointType
    | SetupWizardDeviceAccessZones
    | SetupWizardDeviceAccessZoneOnIn
    | SetupWizardDeviceAccessZoneOnOut
    | SetupWizardDeviceControllerTypes
    | SetupWizardDeviceControllerType
    | SetupWizardDeviceConnectionTypes
    | SetupWizardDeviceConnectionType
    | SetupWizardDevicePointName
    | SetupWizardDevicePointDescription
    | SetupWizardDevicePointProtocol
    | SetupWizardDevicePointIp
    | SetupWizardDevicePointMask
    | SetupWizardDevicePointServerPort
    | SetupWizardDevicePointClientPort
    | SetupWizardDevicePointPort
    | SetupWizardDevicePointPorts
    | SetupWizardDevicePointBaudrate
    | SetupWizardDevicePointParity
    | SetupWizardDevicePointBit
    | SetupWizardDevicePointStopBit
    | SetupWizardDevicePointSerialNumber
    | SetupWizardDevicePointBusPort
    | SetupWizardDeviceConfigs
    | SetupWizardDeviceConfig
    | SetupWizardDevicePointAccessModuleAdd
    | SetupWizardDevicePointAccessModuleRemove
    | SetupWizardDevicePointAccessModuleDirection
    | SetupWizardDeviceSequenceNotImportant
    | SetupWizardDeviceUseForTimeTracking
    | SetupWizardDeviceAllowOfflineWork
    | SetupWizardDeviceClear;
