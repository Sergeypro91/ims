import {
    StaffEmployeesPageState,
    StaffEmployeesPageActions,
    SE_SET_EMPLOYEES,
    SE_SET_EXTENDED_EMPLOYEE,
    SE_SET_SELECTED_ROW,
    SE_TOGGLE_IS_SIDEBAR_OPENED,
    SE_TOGGLE_IS_FILTER_OPENED,
    SE_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SE_TOGGLE_IS_DELETED_DISPLAYED
} from './staffEmployeesTypes';

const initialState: StaffEmployeesPageState = {
    employees: [],
    extendedEmployee: null,
    selectedRow: null,
    isSidebarOpened: false,
    isFilterOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const staffEmployeesPageReducer = (state = initialState, action: StaffEmployeesPageActions): StaffEmployeesPageState => {
    switch (action.type) {
        case SE_SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };
        case SE_SET_EXTENDED_EMPLOYEE:
            return {
                ...state,
                extendedEmployee: action.payload
            };
        case SE_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case SE_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case SE_TOGGLE_IS_FILTER_OPENED:
            return {
                ...state,
                isFilterOpened: !state.isFilterOpened
            };
        case SE_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case SE_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default staffEmployeesPageReducer;
