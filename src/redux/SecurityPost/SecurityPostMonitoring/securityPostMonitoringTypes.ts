export interface SecurityPostMonitoringState {
    events: MonitoringEvents;
    tableRow: TableItem | null;
    quickFilter: boolean;
    sideFilter: boolean;
}

export type MonitoringEvents = Array<TableItem>;

export interface TableItem {
    eventUUID: string;
    deviceUUID: string;
    deviceName: string;
    sensorUUID: string;
    personUUID: string;
    personLastName: string;
    personFirstName: string;
    personMiddleName: string;
    photo: string;
    identificatorUUID: string;
    identificatorContent: string;
    codeChar: string;
    codeName: string;
    classId: string;
    className: string;
    description: string;
    date: string;
    directionStr: string;
    inZoneName: string;
    outZoneName: string;
    categoryId: number;
}

export const GET_SECURITY_POST_MONITORING_EVENTS = 'GET_SECURITY_POST_MONITORING_EVENTS';
export const SECURITY_POST_MONITORING_TABLE_ROW = 'SECURITY_POST_MONITORING_TABLE_ROW';
export const SECURITY_POST_MONITORING_QUICK_FILTER = 'SECURITY_POST_MONITORING_QUICK_FILTER';
export const SECURITY_POST_MONITORING_SIDE_FILTER = 'SECURITY_POST_MONITORING_SIDE_FILTER';

interface SecurityPostMonitoringData {
    type: typeof GET_SECURITY_POST_MONITORING_EVENTS;
    payload: MonitoringEvents;
}

interface SecurityPostMonitoringSelectTableRow {
    type: typeof SECURITY_POST_MONITORING_TABLE_ROW;
    payload: TableItem;
}

interface SecurityPostMonitoringToggleQuickFilter {
    type: typeof SECURITY_POST_MONITORING_QUICK_FILTER;
}

interface SecurityPostMonitoringToggleSideFilter {
    type: typeof SECURITY_POST_MONITORING_SIDE_FILTER;
}

export type SecurityPostMonitoringActions =
    | SecurityPostMonitoringData
    | SecurityPostMonitoringSelectTableRow
    | SecurityPostMonitoringToggleQuickFilter
    | SecurityPostMonitoringToggleSideFilter;
