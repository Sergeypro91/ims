export type SettingsUsersAndRolesEvents = Array<TableItem>;

export interface TableItem {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export interface SettingsUsersAndRolesState {
    events: SettingsUsersAndRolesEvents;
    selectedRow: TableItem | null;
    toggleBar: boolean;
}

export const GET_SETTINGS_USERS_AND_ROLES_EVENTS = 'GET_SETTINGS_USERS_AND_ROLES_EVENTS';
export const SETTINGS_USERS_AND_ROLES_SELECTED_ROW = 'SETTINGS_USERS_AND_ROLES_SELECTED_ROW';
export const SETTINGS_USERS_AND_ROLES_TOGGLE_BAR = 'SETTINGS_USERS_AND_ROLES_TOGGLE_BAR';

interface SettingsUsersAndRolesData {
    type: typeof GET_SETTINGS_USERS_AND_ROLES_EVENTS;
    payload: SettingsUsersAndRolesEvents;
}

interface SettingsUsersAndRolesSelectTableRow {
    type: typeof SETTINGS_USERS_AND_ROLES_SELECTED_ROW;
    payload: TableItem;
}

interface SettingsUsersAndRolesToggleBar {
    type: typeof SETTINGS_USERS_AND_ROLES_TOGGLE_BAR;
}

export type SettingsUsersAndRolesActions =
    | SettingsUsersAndRolesData
    | SettingsUsersAndRolesSelectTableRow
    | SettingsUsersAndRolesToggleBar;
