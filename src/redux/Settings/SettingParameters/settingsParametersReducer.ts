import {
    SettingsParametersActions,
    SettingsParametersState,
    UPDATE_SETTINGS_PARAMETERS_CHANGE,
    SET_SETTINGS_PARAMETERS_CHANGE,
    SETTINGS_PARAMETERS_COPY
} from './settingsParametersTypes';

const initialState: SettingsParametersState = {
    parameters: [],
    copyParam: []
};

const SettingsParametersReducer = (state = initialState, action: SettingsParametersActions): SettingsParametersState => {
    switch (action.type) {
        case UPDATE_SETTINGS_PARAMETERS_CHANGE:
            return {
                ...state,
                parameters: action.payload
            };
        case SET_SETTINGS_PARAMETERS_CHANGE:
            return {
                ...state,
                parameters: action.payload
            };
        case SETTINGS_PARAMETERS_COPY:
            return {
                ...state,
                copyParam: action.payload
            };
        default:
            return state;
    }
};

export default SettingsParametersReducer;
