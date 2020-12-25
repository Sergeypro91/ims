export interface TableItem {
    uuid: string;
    name: string;
    occupation: null;
}

export type SecurityAttendances = Array<TableItem>;

export interface SecurityAttendanceState {
    attendanceTable: SecurityAttendances;
    selectedRow: TableItem | null;
    sidebarOpened: boolean;
    quickFilter: boolean;
}

export const GET_SECURITY_ATTENDANCE = 'GET_SECURITY_ATTENDANCE';
export const SECURITY_ATTENDANCE_SELECTED_ROW = 'SECURITY_ATTENDANCE_SELECTED_ROW';
export const SECURITY_ATTENDANCE_TOGGLE_SIDEBAR = 'SECURITY_ATTENDANCE_TOGGLE_SIDEBAR';
export const SECURITY_ATTENDANCE_QUICK_FILTER = 'SECURITY_ATTENDANCE_QUICK_FILTER';

interface SecurityAttendanceData {
    type: typeof GET_SECURITY_ATTENDANCE;
    payload: SecurityAttendances;
}

interface SecurityAttendanceSelectTableRow {
    type: typeof SECURITY_ATTENDANCE_SELECTED_ROW;
    payload: TableItem;
}

interface SecurityAttendanceToggleSidebar {
    type: typeof SECURITY_ATTENDANCE_TOGGLE_SIDEBAR;
}

interface SecurityAttendanceToggleQuickFilter {
    type: typeof SECURITY_ATTENDANCE_QUICK_FILTER;
}

export type SecurityAttendanceActions =
    | SecurityAttendanceData
    | SecurityAttendanceSelectTableRow
    | SecurityAttendanceToggleSidebar
    | SecurityAttendanceToggleQuickFilter;
