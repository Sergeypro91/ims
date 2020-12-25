import { combineReducers } from 'redux';
import SettingsProductionCalendarReducer from 'redux/Settings/SettingsProductionCalendar/settingsProductionCalendarReducer';
import SettingsAccessPointsReducer from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsReducer';
import SettingsUsersAndRolesReducer from 'redux/Settings/SettingsUsersAndRoles/settingsUsersAndRolesReducer';

const SettingsReducer = combineReducers({
    productionCalendar: SettingsProductionCalendarReducer,
    settingsAccessPoints: SettingsAccessPointsReducer,
    settingsUsersAndRoles: SettingsUsersAndRolesReducer
});

export default SettingsReducer;
