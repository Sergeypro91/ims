import { Group, GroupsList } from 'api/education/groups/groups.types';

export interface EducationGroupsPageState {
    groups: GroupsList;
    selectedRow: Group | null;
    isSidebarOpened: boolean;
    isFilterOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const EG_SET_GROUPS = 'EG_SET_GROUPS';
export const EG_SET_SELECTED_ROW = 'EG_SET_SELECTED_ROW';
export const EG_TOGGLE_IS_SIDEBAR_OPENED = 'EG_TOGGLE_IS_SIDEBAR_OPENED';
export const EG_TOGGLE_IS_FILTER_OPENED = 'EG_TOGGLE_IS_FILTER_OPENED';
export const EG_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'EG_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const EG_TOGGLE_IS_DELETED_DISPLAYED = 'EG_TOGGLE_IS_DELETED_DISPLAYED';

interface EGSetGroups {
    type: typeof EG_SET_GROUPS;
    payload: GroupsList;
}

interface EGSetSelectedRow {
    type: typeof EG_SET_SELECTED_ROW;
    payload: Group | null;
}

interface EGToggleIsSidebarOpened {
    type: typeof EG_TOGGLE_IS_SIDEBAR_OPENED;
}

interface EGToggleIsFilterOpened {
    type: typeof EG_TOGGLE_IS_FILTER_OPENED;
}

interface EGToggleIsQuickFilterActive {
    type: typeof EG_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface EGToggleIsDeletedDisplayed {
    type: typeof EG_TOGGLE_IS_DELETED_DISPLAYED;
}

export type EducationGroupsPageActions =
    | EGSetGroups
    | EGSetSelectedRow
    | EGToggleIsSidebarOpened
    | EGToggleIsFilterOpened
    | EGToggleIsQuickFilterActive
    | EGToggleIsDeletedDisplayed;
