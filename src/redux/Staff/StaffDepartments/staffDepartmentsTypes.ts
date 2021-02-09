import { Department, DepartmentsList } from 'api/staff/departments/departments.types';

export interface StaffDepartmentsPageState {
    departments: DepartmentsList;
    selectedRow: Department | null;
    isSidebarOpened: boolean;
    isFilterOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const SD_SET_DEPARTMENTS = 'SD_SET_DEPARTMENTS';
export const SD_SET_SELECTED_ROW = 'SD_SET_SELECTED_ROW';
export const SD_TOGGLE_IS_SIDEBAR_OPENED = 'SD_TOGGLE_IS_SIDEBAR_OPENED';
export const SD_TOGGLE_IS_FILTER_OPENED = 'SD_TOGGLE_IS_FILTER_OPENED';
export const SD_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'SD_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const SD_TOGGLE_IS_DELETED_DISPLAYED = 'SD_TOGGLE_IS_DELETED_DISPLAYED';

interface SDSetDepartments {
    type: typeof SD_SET_DEPARTMENTS;
    payload: DepartmentsList;
}

interface SDSetSelectedRow {
    type: typeof SD_SET_SELECTED_ROW;
    payload: Department | null;
}

interface SDToggleIsSidebarOpened {
    type: typeof SD_TOGGLE_IS_SIDEBAR_OPENED;
}

interface SDToggleIsFilterOpened {
    type: typeof SD_TOGGLE_IS_FILTER_OPENED;
}

interface SDToggleIsQuickFilterActive {
    type: typeof SD_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface SDToggleIsDeletedDisplayed {
    type: typeof SD_TOGGLE_IS_DELETED_DISPLAYED;
}

export type StaffDepartmentsPageActions =
    | SDSetDepartments
    | SDSetSelectedRow
    | SDToggleIsSidebarOpened
    | SDToggleIsFilterOpened
    | SDToggleIsQuickFilterActive
    | SDToggleIsDeletedDisplayed;
