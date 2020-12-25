import {
    SecurityAttendanceState,
    SecurityAttendanceActions,
    GET_SECURITY_ATTENDANCE,
    SECURITY_ATTENDANCE_SELECTED_ROW,
    SECURITY_ATTENDANCE_TOGGLE_SIDEBAR,
    SECURITY_ATTENDANCE_QUICK_FILTER
} from './securityAttendanceTypes';

const initialState: SecurityAttendanceState = {
    attendanceTable: [],
    selectedRow: null,
    sidebarOpened: false,
    quickFilter: false
};

const SecurityAttendance = (state = initialState, action: SecurityAttendanceActions): SecurityAttendanceState => {
    switch (action.type) {
        case GET_SECURITY_ATTENDANCE:
            return {
                ...state,
                attendanceTable: action.payload
            };
        case SECURITY_ATTENDANCE_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case SECURITY_ATTENDANCE_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case SECURITY_ATTENDANCE_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        default:
            return state;
    }
};

export default SecurityAttendance;
