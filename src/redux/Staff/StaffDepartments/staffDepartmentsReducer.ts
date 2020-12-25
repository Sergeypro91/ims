import data from 'App/components/pages/Staff/StaffDepartments/fakeData';
import {
    StaffDepartmentsState,
    StaffDepartmentsActions,
    STAFF_DEPARTMENTS_SELECTED_ROW,
    STAFF_DEPARTMENTS_TOGGLE_SIDEBAR,
    STAFF_DEPARTMENTS_TOGGLE_BAR,
    STAFF_DEPARTMENTS_QUICK_FILTER
} from './staffDepartmentsTypes';

const initialState: StaffDepartmentsState = {
    departmentsTable: data,
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false,
    quickFilter: false
};

const StaffDepartments = (state = initialState, action: StaffDepartmentsActions): StaffDepartmentsState => {
    switch (action.type) {
        case STAFF_DEPARTMENTS_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case STAFF_DEPARTMENTS_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case STAFF_DEPARTMENTS_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case STAFF_DEPARTMENTS_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        default:
            return state;
    }
};

export default StaffDepartments;
