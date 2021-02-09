import { Employee, EmployeesList, ExtendedEmployee } from 'api/staff/employees/employees.types';

export interface StaffEmployeesPageState {
    employees: EmployeesList;
    extendedEmployee: ExtendedEmployee | null;
    selectedRow: Employee | null;
    isSidebarOpened: boolean;
    isFilterOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const SE_SET_EMPLOYEES = 'SE_SET_EMPLOYEES';
export const SE_SET_EXTENDED_EMPLOYEE = 'SE_SET_EXTENDED_EMPLOYEE';
export const SE_SET_SELECTED_ROW = 'SE_SET_SELECTED_ROW';
export const SE_TOGGLE_IS_SIDEBAR_OPENED = 'SE_TOGGLE_IS_SIDEBAR_OPENED';
export const SE_TOGGLE_IS_FILTER_OPENED = 'SE_TOGGLE_IS_FILTER_OPENED';
export const SE_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'SE_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const SE_TOGGLE_IS_DELETED_DISPLAYED = 'SE_TOGGLE_IS_DELETED_DISPLAYED';

interface SESetEmployees {
    type: typeof SE_SET_EMPLOYEES;
    payload: EmployeesList;
}

interface SESetExtendedEmployee {
    type: typeof SE_SET_EXTENDED_EMPLOYEE;
    payload: ExtendedEmployee;
}

interface SESetSelectedRow {
    type: typeof SE_SET_SELECTED_ROW;
    payload: Employee | null;
}

interface SEToggleIsSidebarOpened {
    type: typeof SE_TOGGLE_IS_SIDEBAR_OPENED;
}

interface SEToggleIsFilterOpened {
    type: typeof SE_TOGGLE_IS_FILTER_OPENED;
}

interface SEToggleIsQuickFilterActive {
    type: typeof SE_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface SEToggleIsDeletedDisplayed {
    type: typeof SE_TOGGLE_IS_DELETED_DISPLAYED;
}

export type StaffEmployeesPageActions =
    | SESetEmployees
    | SESetExtendedEmployee
    | SESetSelectedRow
    | SEToggleIsSidebarOpened
    | SEToggleIsFilterOpened
    | SEToggleIsQuickFilterActive
    | SEToggleIsDeletedDisplayed;
