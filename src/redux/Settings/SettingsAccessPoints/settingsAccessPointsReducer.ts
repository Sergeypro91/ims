import {
    SettingsAccessPointsState,
    SettingsAccessPointsActions,
    SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR,
    SETTINGS_ACCESS_POINTS_TOGGLE_BAR
} from './settingsAccessPointsTypes';

const initialState: SettingsAccessPointsState = {
    sidebarOpened: false,
    toggleBar: false
};

const SettingsAccessPoints = (state = initialState, action: SettingsAccessPointsActions): SettingsAccessPointsState => {
    switch (action.type) {
        case SETTINGS_ACCESS_POINTS_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case SETTINGS_ACCESS_POINTS_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default SettingsAccessPoints;
