import {
    EducationDepartmentsPageState,
    EducationDepartmentsPageActions,
    ED_SET_DEPARTMENTS,
    ED_SET_SELECTED_ROW,
    ED_TOGGLE_IS_SIDEBAR_OPENED,
    ED_TOGGLE_IS_FILTER_OPENED,
    ED_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    ED_TOGGLE_IS_DELETED_DISPLAYED
} from './educationDepartmentsTypes';

const initialState: EducationDepartmentsPageState = {
    departments: [],
    selectedRow: null,
    isSidebarOpened: false,
    isFilterOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const educationDepartmentsPageReducer = (
    state = initialState,
    action: EducationDepartmentsPageActions
): EducationDepartmentsPageState => {
    switch (action.type) {
        case ED_SET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            };
        case ED_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case ED_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case ED_TOGGLE_IS_FILTER_OPENED:
            return {
                ...state,
                isFilterOpened: !state.isFilterOpened
            };
        case ED_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case ED_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default educationDepartmentsPageReducer;
