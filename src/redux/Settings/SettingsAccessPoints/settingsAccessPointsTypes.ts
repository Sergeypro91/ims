export interface SettingsAccessPointsState {
    sidebarOpened: boolean;
    toggleBar: boolean;
}

export const SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR = 'SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR';
export const SETTINGS_ACCESS_POINTS_TOGGLE_BAR = 'SETTINGS_ACCESS_POINTS_TOGGLE_BAR';

interface SettingsAccessPointsToggleSidebar {
    type: typeof SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR;
}

interface SettingsAccessPointsToggleBar {
    type: typeof SETTINGS_ACCESS_POINTS_TOGGLE_BAR;
}

export type SettingsAccessPointsActions =
    | SettingsAccessPointsToggleSidebar
    | SettingsAccessPointsToggleBar;
