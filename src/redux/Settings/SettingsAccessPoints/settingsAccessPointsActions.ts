import {
    SettingsAccessPointsActions,
    SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR,
    SETTINGS_ACCESS_POINTS_TOGGLE_BAR
} from './settingsAccessPointsTypes';

export const settingsAccessPointsToggleSidebar = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR
});

export const settingsAccessPointsToggleBar = (): SettingsAccessPointsActions => ({
    type: SETTINGS_ACCESS_POINTS_TOGGLE_BAR
});
