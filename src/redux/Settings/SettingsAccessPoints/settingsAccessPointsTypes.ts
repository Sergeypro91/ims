export interface AccesPoint {
    name: string;
    description: string;
    connectionType: string;
    port: string;
    speed: string;
    parity: string;
    bit: string;
    stopBit: string;
    controllerType: string;
    zoneToEnter: string;
    zoneToExit: string;
    serialNumber: string;
    busPort: string;
}

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

export interface Wizard {
    type: string;
    accessPoint: AccesPoint;
    accessModules: AccessModule[];
    sequenceNotImportant: boolean;
    useForTimeTracking:boolean;
    allowOfflineWork: boolean;
}

export interface SettingsAccessPointsState {
    sidebarOpened: boolean;
    toggleBar: boolean;
    accessPointsWizard: Wizard;
}

export const SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR = 'SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR';
export const SETTINGS_ACCESS_POINTS_TOGGLE_BAR = 'SETTINGS_ACCESS_POINTS_TOGGLE_BAR';

export const SETTINGS_ACCESS_POINTS_POINT_TYPE = 'SETTINGS_ACCESS_POINTS_POINT_TYPE';
export const SETTINGS_ACCESS_POINTS_POINT_DESCRIPTION = 'SETTINGS_ACCESS_POINTS_POINT_DESCRIPTION';
export const SETTINGS_ACCESS_POINTS_POINT_NAME = 'SETTINGS_ACCESS_POINTS_POINT_NAME';
export const SETTINGS_ACCESS_POINTS_POINT_CONNECTION_TYPE = 'SETTINGS_ACCESS_POINTS_POINT_CONNECTION_TYPE';
export const SETTINGS_ACCESS_POINTS_POINT_PORT = 'SETTINGS_ACCESS_POINTS_POINT_PORT';
export const SETTINGS_ACCESS_POINTS_POINT_SPEED = 'SETTINGS_ACCESS_POINTS_POINT_SPEED';
export const SETTINGS_ACCESS_POINTS_POINT_PARITY = 'SETTINGS_ACCESS_POINTS_POINT_PARITY';
export const SETTINGS_ACCESS_POINTS_POINT_BIT = 'SETTINGS_ACCESS_POINTS_POINT_BIT';
export const SETTINGS_ACCESS_POINTS_POINT_STOP_BIT = 'SETTINGS_ACCESS_POINTS_POINT_STOP_BIT';
export const SETTINGS_ACCESS_POINTS_POINT_CONTROLLER_TYPE = 'SETTINGS_ACCESS_POINTS_POINT_CONTROLLER_TYPE';
export const SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_ENTER = 'SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_ENTER';
export const SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_EXIT = 'SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_EXIT';
export const SETTINGS_ACCESS_POINTS_POINT_SERIAL_NUMBER = 'SETTINGS_ACCESS_POINTS_POINT_SERIAL_NUMBER';
export const SETTINGS_ACCESS_POINTS_POINT_BUS_PORT = 'SETTINGS_ACCESS_POINTS_POINT_BUS_PORT';
export const SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_ADD = 'SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_ADD';
export const SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_REMOVE = 'SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_REMOVE';
export const SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_DIRECTION =
    'SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_DIRECTION';
export const SETTINGS_ACCESS_POINTS_SEQUENCE_NOT_IMPORTANT = 'SETTINGS_ACCESS_POINTS_SEQUENCE_NOT_IMPORTANT';
export const SETTINGS_ACCESS_POINTS_USE_FOR_TIME_TRACKING = 'SETTINGS_ACCESS_POINTS_USE_FOR_TIME_TRACKING';
export const SETTINGS_ACCESS_POINTS_ALLOW_OFFLINE_WORK = 'SETTINGS_ACCESS_POINTS_ALLOW_OFFLINE_WORK';

interface SettingsAccessPointsToggleSidebar {
    type: typeof SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR;
}

interface SettingsAccessPointsToggleBar {
    type: typeof SETTINGS_ACCESS_POINTS_TOGGLE_BAR;
}

interface SettingsAccessPointsPointType {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_TYPE;
    payload: string;
}

interface SettingsAccessPointsPointName {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_NAME;
    payload: string;
}

interface SettingsAccessPointsPointDescription {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_DESCRIPTION;
    payload: string;
}

interface SettingsAccessPointsPointConnectionType {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_CONNECTION_TYPE;
    payload: string;
}

interface SettingsAccessPointsPointPort {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_PORT;
    payload: string;
}

interface SettingsAccessPointsPointSpeed {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_SPEED;
    payload: string;
}

interface SettingsAccessPointsPointParity {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_PARITY;
    payload: string;
}

interface SettingsAccessPointsPointBit {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_BIT;
    payload: string;
}

interface SettingsAccessPointsPointStopBit {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_STOP_BIT;
    payload: string;
}

interface SettingsAccessPointsPointControllerType {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_CONTROLLER_TYPE;
    payload: string;
}

interface SettingsAccessPointsPointZoneToEnter {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_ENTER;
    payload: string;
}

interface SettingsAccessPointsPointZoneToExit {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_ZONE_TO_EXIT;
    payload: string;
}

interface SettingsAccessPointsPointSerialNumber {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_SERIAL_NUMBER;
    payload: string;
}

interface SettingsAccessPointsPointBusPort {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_BUS_PORT;
    payload: string;
}

interface SettingsAccessPointsPointAccessModuleAdd {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_ADD;
    payload: AccessModule;
}

interface SettingsAccessPointsPointAccessModuleRemove {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_REMOVE;
    payload: AccessModule[];
}

interface SettingsAccessPointsPointAccessModuleDirection {
    type: typeof SETTINGS_ACCESS_POINTS_POINT_ACCESS_MODULE_DIRECTION;
    payload: AccessModule[];
}

interface SettingsAccessPointsSequenceNotImportant {
    type: typeof SETTINGS_ACCESS_POINTS_SEQUENCE_NOT_IMPORTANT;
}

interface SettingsAccessPointsUseForTimeTracking {
    type: typeof SETTINGS_ACCESS_POINTS_USE_FOR_TIME_TRACKING;
}

interface SettingsAccessPointsAllowOfflineWork {
    type: typeof SETTINGS_ACCESS_POINTS_ALLOW_OFFLINE_WORK;
}

export type SettingsAccessPointsActions =
    | SettingsAccessPointsToggleSidebar
    | SettingsAccessPointsToggleBar
    | SettingsAccessPointsPointType
    | SettingsAccessPointsPointName
    | SettingsAccessPointsPointDescription
    | SettingsAccessPointsPointConnectionType
    | SettingsAccessPointsPointPort
    | SettingsAccessPointsPointSpeed
    | SettingsAccessPointsPointParity
    | SettingsAccessPointsPointBit
    | SettingsAccessPointsPointStopBit
    | SettingsAccessPointsPointControllerType
    | SettingsAccessPointsPointZoneToEnter
    | SettingsAccessPointsPointZoneToExit
    | SettingsAccessPointsPointSerialNumber
    | SettingsAccessPointsPointBusPort
    | SettingsAccessPointsPointAccessModuleAdd
    | SettingsAccessPointsPointAccessModuleRemove
    | SettingsAccessPointsPointAccessModuleDirection
    | SettingsAccessPointsSequenceNotImportant
    | SettingsAccessPointsUseForTimeTracking
    | SettingsAccessPointsAllowOfflineWork;
