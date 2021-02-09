import { combineReducers } from 'redux';
import AppReducer from 'redux/App/appReducer';
import Security from 'redux/SecurityPost/securityPostReducer';
import Reports from 'redux/Reports/reportsReducer';
import Staff from 'redux/Staff/staffReducer';
import Education from 'redux/Education/educationReducer';
import Identifiers from 'redux/Identifiers/identifiersReducer';
import Settings from 'redux/Settings/SettingsReducer';
import SetupWizard from 'redux/SetupWizard/SetupWizardReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    securityPost: Security,
    reports: Reports,
    staff: Staff,
    education: Education,
    identifiers: Identifiers,
    settings: Settings,
    setupWizard: SetupWizard
});

export default rootReducer;
/* 
    Институт
    Факультет
    Кафедра
    Группы
*/
