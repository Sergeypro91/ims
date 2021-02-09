import axios from 'axios';
import { Dispatch } from 'react';
import store from 'redux/store';
import {
    TableItem,
    SecurityAttendanceActions,
    SecurityAttendances,
    GET_SECURITY_ATTENDANCE,
    SECURITY_ATTENDANCE_SELECTED_ROW,
    SECURITY_ATTENDANCE_TOGGLE_SIDEBAR,
    SECURITY_ATTENDANCE_QUICK_FILTER
} from './securityAttendanceTypes';

export const securityAttendanceToggleSidebar = (): SecurityAttendanceActions => ({
    type: SECURITY_ATTENDANCE_TOGGLE_SIDEBAR
});

export const securityAttendanceSelectedRow = (payload: TableItem): SecurityAttendanceActions => {
    return {
        type: SECURITY_ATTENDANCE_SELECTED_ROW,
        payload
    };
};

export const securityAttendanceToggleQuickFilter = (): SecurityAttendanceActions => ({
    type: SECURITY_ATTENDANCE_QUICK_FILTER
});

export const getSecurityAttendance = (
    attendanceTable: SecurityAttendances
): SecurityAttendanceActions => ({
    type: GET_SECURITY_ATTENDANCE,
    payload: attendanceTable
});

export const requestAttendance = () => (dispatch: Dispatch<SecurityAttendanceActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}attendance`)
        .then((response) => {
            dispatch(getSecurityAttendance(response.data.attendanceTable));
        })
        .catch((error) => {
            console.log(error);
        });
};
