import {
    StaffDepartmentsActions,
    Department,
    STAFF_DEPARTMENTS_SELECTED_ROW,
    STAFF_DEPARTMENTS_TOGGLE_SIDEBAR,
    STAFF_DEPARTMENTS_TOGGLE_BAR,
    STAFF_DEPARTMENTS_QUICK_FILTER
} from './staffDepartmentsTypes';

export const staffDepartmentsSelectedRow = (payload: Department): StaffDepartmentsActions => {
    return {
        type: STAFF_DEPARTMENTS_SELECTED_ROW,
        payload
    };
};

export const staffDepartmentsToggleSidebar = (): StaffDepartmentsActions => ({
    type: STAFF_DEPARTMENTS_TOGGLE_SIDEBAR
});

export const staffDepartmentsToggleToggleBar = (): StaffDepartmentsActions => ({
    type: STAFF_DEPARTMENTS_TOGGLE_BAR
});

export const staffDepartmentsToggleQuickFilter = (): StaffDepartmentsActions => ({
    type: STAFF_DEPARTMENTS_QUICK_FILTER
});
