import axios from 'axios';
import { Dispatch } from 'react';
import config from 'config/config.json';
import {
    StaffEmployeesActions,
    StaffEmployees,
    TableItem,
    GET_STAFF_EMPLOYEES,
    STAFF_EMPLOYEES_SELECTED_ROW,
    STAFF_EMPLOYEES_TOGGLE_SIDEBAR,
    STAFF_EMPLOYEES_TOGGLE_BAR,
    STAFF_EMPLOYEES_QUICK_FILTER,
    STAFF_EMPLOYEES_SETUP_WIZARD_TYPE,
    STAFF_EMPLOYEES_SETUP_WIZARD_KEY,
    STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO,
    STAFF_EMPLOYEES_SETUP_WIZARD_QR,
    STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO,
    STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS,
    STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE
} from './staffEmployeesTypes';

export const getStaffEmployees = (employees: StaffEmployees): StaffEmployeesActions => ({
    type: GET_STAFF_EMPLOYEES,
    payload: employees
});

export const staffEmployeesSelectedRow = (payload: TableItem): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SELECTED_ROW,
        payload
    };
};

export const staffEmployeesToggleSidebar = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_TOGGLE_SIDEBAR
});

export const staffEmployeesToggleToggleBar = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_TOGGLE_BAR
});

export const staffEmployeesToggleQuickFilter = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_QUICK_FILTER
});

export const staffEmployeesSetupWizardType = (payload: string): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_TYPE,
        payload
    };
};

export const staffEmployeesSetupWizardKey = (payload: string): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_KEY,
        payload
    };
};

export const staffEmployeesSetupWizardPhoto = (payload: string | ArrayBuffer | null): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_PHOTO,
        payload
    };
};

export const staffEmployeesSetupWizardQr = (payload: string | ArrayBuffer | null): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_QR,
        payload
    };
};

export const staffEmployeesSetupWizardAccesZones = (payload: string[]): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_ACCES_ZONES,
        payload
    };
};

export const staffEmployeesSetupWizardLimitTimeIsOn = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_IS_ON
});

export const staffEmployeesSetupWizardLimitPassIsOn = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS_IS_ON
});

export const staffEmployeesSetupWizardLimitTimeFrom = (payload: string): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_FROM,
        payload
    };
};

export const staffEmployeesSetupWizardLimitTimeTo = (payload: string): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_TIME_TO,
        payload
    };
};

export const staffEmployeesSetupWizardLimitPass = (payload: string): StaffEmployeesActions => {
    return {
        type: STAFF_EMPLOYEES_SETUP_WIZARD_LIMIT_PASS,
        payload
    };
};

export const staffEmployeesSetupWizardClose = (): StaffEmployeesActions => ({
    type: STAFF_EMPLOYEES_SETUP_WIZARD_CLOSE
});

export const requestEmployees = () => (dispatch: Dispatch<StaffEmployeesActions>) => {
    axios
        .get(`${config.apiUrl}employees`)
        .then((response) => {
            dispatch(getStaffEmployees(response.data.employees));
        })
        .catch((error) => {
            console.log(error);
        });
};
