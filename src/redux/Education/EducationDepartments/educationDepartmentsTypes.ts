import { EducationDepartment, EducationDepartmentsList } from 'api/education/departments/departments.types';

export interface EducationDepartmentsPageState {
    departments: EducationDepartmentsList;
    selectedRow: EducationDepartment | null;
    isSidebarOpened: boolean;
    isFilterOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const ED_SET_DEPARTMENTS = 'ED_SET_DEPARTMENTS';
export const ED_SET_SELECTED_ROW = 'ED_SET_SELECTED_ROW';
export const ED_TOGGLE_IS_SIDEBAR_OPENED = 'ED_TOGGLE_IS_SIDEBAR_OPENED';
export const ED_TOGGLE_IS_FILTER_OPENED = 'ED_TOGGLE_IS_FILTER_OPENED';
export const ED_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'ED_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const ED_TOGGLE_IS_DELETED_DISPLAYED = 'ED_TOGGLE_IS_DELETED_DISPLAYED';

interface EDSetDepartments {
    type: typeof ED_SET_DEPARTMENTS;
    payload: EducationDepartmentsList;
}

interface EDSetSelectedRow {
    type: typeof ED_SET_SELECTED_ROW;
    payload: EducationDepartment | null;
}

interface EDToggleIsSidebarOpened {
    type: typeof ED_TOGGLE_IS_SIDEBAR_OPENED;
}

interface EDToggleIsFilterOpened {
    type: typeof ED_TOGGLE_IS_FILTER_OPENED;
}

interface EDToggleIsQuickFilterActive {
    type: typeof ED_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface EDToggleIsDeletedDisplayed {
    type: typeof ED_TOGGLE_IS_DELETED_DISPLAYED;
}

export type EducationDepartmentsPageActions =
    | EDSetDepartments
    | EDSetSelectedRow
    | EDToggleIsSidebarOpened
    | EDToggleIsFilterOpened
    | EDToggleIsQuickFilterActive
    | EDToggleIsDeletedDisplayed;
