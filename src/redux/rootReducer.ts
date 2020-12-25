import { combineReducers } from 'redux';
import AppReducer from 'redux/App/appReducer';
import Security from 'redux/SecurityPost/securityPostReducer';
import Reports from 'redux/Reports/reportsReducer';
import Staff from 'redux/Staff/staffReducer';
import Identifiers from 'redux/Identifiers/identifiersReducer';
import Settings from 'redux/Settings/SettingsReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    securityPost: Security,
    reports: Reports,
    staff: Staff,
    identifiers: Identifiers,
    settings: Settings
});

export default rootReducer;
