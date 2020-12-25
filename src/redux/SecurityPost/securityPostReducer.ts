import { combineReducers } from 'redux';
import SecurityAttendanceReducer from 'redux/SecurityPost/SecurityAttendance/securityAttendanceReducer';
import SecurityPostCentralReducer from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralReducer';
import SecurityPostMonitoringReducer from 'redux/SecurityPost/SecurityPostMonitoring/securityPostMonitoringReducer';

const Security = combineReducers({
    postCentral: SecurityPostCentralReducer,
    postAttendance: SecurityAttendanceReducer,
    postMonitoring: SecurityPostMonitoringReducer
});

export default Security;
