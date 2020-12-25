import {
    SettingsUsersAndRolesState,
    SettingsUsersAndRolesActions,
    GET_SETTINGS_USERS_AND_ROLES_EVENTS,
    SETTINGS_USERS_AND_ROLES_SELECTED_ROW,
    SETTINGS_USERS_AND_ROLES_TOGGLE_BAR
} from './settingsUsersAndRolesTypes';

const initialState: SettingsUsersAndRolesState = {
    events: [],
    selectedRow: null,
    toggleBar: false
};

const SettingsUsersAndRolesReducer = (
    state = initialState,
    action: SettingsUsersAndRolesActions
): SettingsUsersAndRolesState => {
    switch (action.type) {
        case GET_SETTINGS_USERS_AND_ROLES_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case SETTINGS_USERS_AND_ROLES_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case SETTINGS_USERS_AND_ROLES_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default SettingsUsersAndRolesReducer;
