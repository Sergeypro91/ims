import { Institute, InstitutionsList } from 'api/education/institutions/institutions.types';

export interface EducationInstitutionsPageState {
    institutions: InstitutionsList;
    selectedRow: Institute | null;
    isSidebarOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const EI_SET_INSTITUTIONS = 'EI_SET_INSTITUTIONS';
export const EI_SET_SELECTED_ROW = 'EI_SET_SELECTED_ROW';
export const EI_TOGGLE_IS_SIDEBAR_OPENED = 'EI_TOGGLE_IS_SIDEBAR_OPENED';
export const EI_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'EI_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const EI_TOGGLE_IS_DELETED_DISPLAYED = 'EI_TOGGLE_IS_DELETED_DISPLAYED';

interface EISetInstitutions {
    type: typeof EI_SET_INSTITUTIONS;
    payload: InstitutionsList;
}

interface EISetSelectedRow {
    type: typeof EI_SET_SELECTED_ROW;
    payload: Institute | null;
}

interface EIToggleIsSidebarOpened {
    type: typeof EI_TOGGLE_IS_SIDEBAR_OPENED;
}

interface EIToggleIsQuickFilterActive {
    type: typeof EI_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface EIToggleIsDeletedDisplayed {
    type: typeof EI_TOGGLE_IS_DELETED_DISPLAYED;
}

export type EducationInstitutionsPageActions =
    | EISetInstitutions
    | EISetSelectedRow
    | EIToggleIsSidebarOpened
    | EIToggleIsQuickFilterActive
    | EIToggleIsDeletedDisplayed;
