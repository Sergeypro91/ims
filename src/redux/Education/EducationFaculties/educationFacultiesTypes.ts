import { FacultiesList, Faculty } from 'api/education/faculties/faculties.types';

export interface EducationFacultiesPageState {
    faculties: FacultiesList;
    selectedRow: Faculty | null;
    isSidebarOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const EF_SET_FACULTIES = 'EF_SET_FACULTIES';
export const EF_SET_SELECTED_ROW = 'EF_SET_SELECTED_ROW';
export const EF_TOGGLE_IS_SIDEBAR_OPENED = 'EF_TOGGLE_IS_SIDEBAR_OPENED';
export const EF_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'EF_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const EF_TOGGLE_IS_DELETED_DISPLAYED = 'EF_TOGGLE_IS_DELETED_DISPLAYED';

interface EFSetFaculties {
    type: typeof EF_SET_FACULTIES;
    payload: FacultiesList;
}

interface EFSetSelectedRow {
    type: typeof EF_SET_SELECTED_ROW;
    payload: Faculty | null;
}

interface EFTogglEFsSidebarOpened {
    type: typeof EF_TOGGLE_IS_SIDEBAR_OPENED;
}

interface EFTogglEFsQuickFilterActive {
    type: typeof EF_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface EFTogglEFsDeletedDisplayed {
    type: typeof EF_TOGGLE_IS_DELETED_DISPLAYED;
}

export type EducationFacultiesPageActions =
    | EFSetFaculties
    | EFSetSelectedRow
    | EFTogglEFsSidebarOpened
    | EFTogglEFsQuickFilterActive
    | EFTogglEFsDeletedDisplayed;
