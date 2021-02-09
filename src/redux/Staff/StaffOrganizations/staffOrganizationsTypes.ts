import { Organization, OrganizationsList } from 'api/staff/organizations/organizations.types';

export interface StaffOrganizationsPageState {
    organizations: OrganizationsList;
    selectedRow: Organization | null;
    isSidebarOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const SO_SET_ORGANIZATIONS = 'SO_SET_ORGANIZATIONS';
export const SO_SET_SELECTED_ROW = 'SO_SET_SELECTED_ROW';
export const SO_TOGGLE_IS_SIDEBAR_OPENED = 'SO_TOGGLE_IS_SIDEBAR_OPENED';
export const SO_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'SO_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const SO_TOGGLE_IS_DELETED_DISPLAYED = 'SO_TOGGLE_IS_DELETED_DISPLAYED';

interface SOSetOrganizations {
    type: typeof SO_SET_ORGANIZATIONS;
    payload: OrganizationsList;
}

interface SOSetSelectedRow {
    type: typeof SO_SET_SELECTED_ROW;
    payload: Organization | null;
}

interface SOToggleIsSidebarOpened {
    type: typeof SO_TOGGLE_IS_SIDEBAR_OPENED;
}

interface SOToggleIsQuickFilterActive {
    type: typeof SO_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface SOToggleIsDeletedDisplayed {
    type: typeof SO_TOGGLE_IS_DELETED_DISPLAYED;
}

export type StaffOrganizationsPageActions =
    | SOSetOrganizations
    | SOSetSelectedRow
    | SOToggleIsSidebarOpened
    | SOToggleIsQuickFilterActive
    | SOToggleIsDeletedDisplayed;
