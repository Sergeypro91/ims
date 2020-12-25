export interface Department {
    _id: string;
    name: string;
    organization: string;
    director: string;
    createdAt: string;
    deleted: boolean;
}

export type Departments = Array<Department>;
export interface StaffDepartmentsState {
    departmentsTable: Departments;
    selectedRow: Department | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    quickFilter: boolean;
}

export const STAFF_DEPARTMENTS_SELECTED_ROW = 'STAFF_DEPARTMENTS_SELECTED_ROW';
export const STAFF_DEPARTMENTS_TOGGLE_SIDEBAR = 'STAFF_DEPARTMENTS_TOGGLE_SIDEBAR';
export const STAFF_DEPARTMENTS_TOGGLE_BAR = 'STAFF_DEPARTMENTS_TOGGLE_BAR';
export const STAFF_DEPARTMENTS_QUICK_FILTER = 'STAFF_DEPARTMENTS_QUICK_FILTER';

interface StaffDepartmentsSelectTableRow {
    type: typeof STAFF_DEPARTMENTS_SELECTED_ROW;
    payload: Department;
}

interface StaffDepartmentsToggleSidebar {
    type: typeof STAFF_DEPARTMENTS_TOGGLE_SIDEBAR;
}

interface StaffDepartmentsToggleBar {
    type: typeof STAFF_DEPARTMENTS_TOGGLE_BAR;
}

interface StaffDepartmentsToggleQuickFilter {
    type: typeof STAFF_DEPARTMENTS_QUICK_FILTER;
}

export type StaffDepartmentsActions =
    | StaffDepartmentsSelectTableRow
    | StaffDepartmentsToggleSidebar
    | StaffDepartmentsToggleBar
    | StaffDepartmentsToggleQuickFilter;
