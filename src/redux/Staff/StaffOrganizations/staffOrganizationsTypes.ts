export interface Organization {
    _id: string;
    name: string;
    inn: string;
    status: string;
    createdAt: string;
    deleted: boolean;
}

export type Organizations = Array<Organization>;
export interface StaffOrganizationsState {
    organizationsTable: Organizations;
    selectedRow: Organization | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
}

export const STAFF_ORGANIZATIONS_SELECTED_ROW = 'STAFF_ORGANIZATIONS_SELECTED_ROW';
export const STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR = 'STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR';
export const STAFF_ORGANIZATIONS_TOGGLE_BAR = 'STAFF_ORGANIZATIONS_TOGGLE_BAR';

interface StaffOrganizationsSelectTableRow {
    type: typeof STAFF_ORGANIZATIONS_SELECTED_ROW;
    payload: Organization;
}

interface StaffOrganizationsToggleSidebar {
    type: typeof STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR;
}

interface StaffOrganizationsToggleBar {
    type: typeof STAFF_ORGANIZATIONS_TOGGLE_BAR;
}

export type StaffOrganizationsActions =
    | StaffOrganizationsSelectTableRow
    | StaffOrganizationsToggleSidebar
    | StaffOrganizationsToggleBar;
