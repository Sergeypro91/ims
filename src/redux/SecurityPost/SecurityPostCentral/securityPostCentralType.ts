export interface SecurityPostCentralState {
    devices: Devices;
    selectedDevice: Device | null;
    events: Events;
    sidebarOpened: boolean;
    bottombarOpened: boolean;
    toggleBar: boolean;
}

export type Devices = Array<Device>;

export interface Device {
    id: number;
    uuid: string;
    name: string;
    type: number;
    controllerType: number;
    controllerTypeName: string;
    enabled: boolean;
    description: string;
    serial: string;
    firmwareVersion: string;
    softwareVersion: string;
    connectionType: number;
    connectionSysName?: string;
    connectionBaudrate?: number;
    connectionHost?: string;
    connectionPort?: number;
    username: string;
    password: string;
    invert: boolean;
    accessModeIn: number;
    accessModeOut: number;
    sensors?: Sensors;
}

export type Sensors = Array<Sensor>;

export interface Sensor {
    uuid: string;
    id: number;
    name: string;
    type: string;
    connectionType?: number;
    connectionHost?: string;
    connectionPort?: number;
    bewareFaceIdNumber?: number;
    host: string;
    hostPort: number;
    direction: number;
    chainPosition: number;
    enabled: boolean;
    idx: number;
    identificatorType: string;
    masterDeviceUUID: string;
    username?: string;
    password?: string;
}

export type Events = Array<EventPayload>;

export interface EventPayload {
    eventUUID: string;
    deviceUUID: string;
    deviceName?: string;
    sensorUUID: string;
    identificatorUUID: string;
    identificatorContent: string;
    personUUID?: string;
    employeeUUID?: string;
    personLastName?: string;
    personFirstName?: string;
    personMiddleName?: string;
    position?: string;
    department?: string;
    gender?: number;
    photo?: string;
    codeChar: string;
    codeName: string;
    description?: string;
    date: string;
    direction: number;
    directionStr: string;
    inZoneName: string;
    outZoneName: string;
    categoryId: number;
    classId: number;
    className?: string;
    isPrintable: boolean;
}

export const SECURITY_POST_CENTRAL_GET_DEVICES = 'SECURITY_POST_CENTRAL_GET_DEVICES';
export const SECURITY_POST_CENTRAL_SELECT_DEVICE = 'SECURITY_POST_CENTRAL_SELECT_DEVICE';
export const SECURITY_POST_CENTRAL_CLEAR_DEVICES = 'SECURITY_POST_CENTRAL_CLEAR_DEVICES';
export const SECURITY_POST_CENTRAL_GET_EVENTS = 'SECURITY_POST_CENTRAL_GET_EVENTS';
export const SECURITY_POST_CENTRAL_GET_EVENTS_ARR = 'SECURITY_POST_CENTRAL_GET_EVENTS_ARR';
export const SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR = 'SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR';
export const SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR = 'SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR';
export const SECURITY_POST_CENTRAL_TOGGLE_BAR = 'SECURITY_POST_CENTRAL_TOGGLE_BAR';

interface SecurityPostCentralGetDevices {
    type: typeof SECURITY_POST_CENTRAL_GET_DEVICES;
    payload: Devices;
}

interface SecurityPostCentralSelectDevice {
    type: typeof SECURITY_POST_CENTRAL_SELECT_DEVICE;
    payload: Device;
}

interface SecurityPostCentralClearDevices {
    type: typeof SECURITY_POST_CENTRAL_CLEAR_DEVICES;
}

interface SecurityPostCentralGetEvents {
    type: typeof SECURITY_POST_CENTRAL_GET_EVENTS;
    payload: EventPayload;
}

interface SecurityPostCentralGetEventsArr {
    type: typeof SECURITY_POST_CENTRAL_GET_EVENTS_ARR;
    payload: Events;
}

interface SecurityPostCentralToggleSidebar {
    type: typeof SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR;
}

interface SecurityPostCentralToggleBottombar {
    type: typeof SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR;
}

interface SecurityPostCentralToggleBar {
    type: typeof SECURITY_POST_CENTRAL_TOGGLE_BAR;
}

export type SecurityPostCentralActions =
    | SecurityPostCentralGetDevices
    | SecurityPostCentralSelectDevice
    | SecurityPostCentralClearDevices
    | SecurityPostCentralGetEvents
    | SecurityPostCentralGetEventsArr
    | SecurityPostCentralToggleSidebar
    | SecurityPostCentralToggleBottombar
    | SecurityPostCentralToggleBar;
