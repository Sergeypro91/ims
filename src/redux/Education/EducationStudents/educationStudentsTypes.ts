export interface EducationStudentsPageState {
    students: [];
    selectedRow: {} | null;
    isSidebarOpened: boolean;
    isFilterOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const ES_SET_STUDENTS = 'ES_SET_STUDENTS';
export const ES_SET_SELECTED_ROW = 'ES_SET_SELECTED_ROW';
export const ES_TOGGLE_IS_SIDEBAR_OPENED = 'ES_TOGGLE_IS_SIDEBAR_OPENED';
export const ES_TOGGLE_IS_FILTER_OPENED = 'ES_TOGGLE_IS_FILTER_OPENED';
export const ES_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'ES_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const ES_TOGGLE_IS_DELETED_DISPLAYED = 'ES_TOGGLE_IS_DELETED_DISPLAYED';

interface ESSetStudents {
    type: typeof ES_SET_STUDENTS;
    payload: [];
}

interface ESSetSelectedRow {
    type: typeof ES_SET_SELECTED_ROW;
    payload: {} | null;
}

interface ESToggleIsSidebarOpened {
    type: typeof ES_TOGGLE_IS_SIDEBAR_OPENED;
}

interface ESToggleIsFilterOpened {
    type: typeof ES_TOGGLE_IS_FILTER_OPENED;
}

interface ESToggleIsQuickFilterActive {
    type: typeof ES_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface ESToggleIsDeletedDisplayed {
    type: typeof ES_TOGGLE_IS_DELETED_DISPLAYED;
}

export type EducationStudentsPageActions =
    | ESSetStudents
    | ESSetSelectedRow
    | ESToggleIsSidebarOpened
    | ESToggleIsFilterOpened
    | ESToggleIsQuickFilterActive
    | ESToggleIsDeletedDisplayed;
