import {
    StaffDepartmentsPageState,
    StaffDepartmentsPageActions,
    SD_SET_DEPARTMENTS,
    SD_SET_SELECTED_ROW,
    SD_TOGGLE_IS_SIDEBAR_OPENED,
    SD_TOGGLE_IS_FILTER_OPENED,
    SD_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SD_TOGGLE_IS_DELETED_DISPLAYED
} from './staffDepartmentsTypes';

const initialState: StaffDepartmentsPageState = {
    departments: [],
    selectedRow: null,
    isSidebarOpened: false,
    isFilterOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const staffDepartmentsPageReducer = (
    state = initialState,
    action: StaffDepartmentsPageActions
): StaffDepartmentsPageState => {
    switch (action.type) {
        case SD_SET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            };
        case SD_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case SD_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case SD_TOGGLE_IS_FILTER_OPENED:
            return {
                ...state,
                isFilterOpened: !state.isFilterOpened
            };
        case SD_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case SD_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default staffDepartmentsPageReducer;
