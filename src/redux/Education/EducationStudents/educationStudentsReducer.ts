import {
    EducationStudentsPageState,
    EducationStudentsPageActions,
    ES_SET_STUDENTS,
    ES_SET_SELECTED_ROW,
    ES_TOGGLE_IS_SIDEBAR_OPENED,
    ES_TOGGLE_IS_FILTER_OPENED,
    ES_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    ES_TOGGLE_IS_DELETED_DISPLAYED
} from './educationStudentsTypes';

const initialState: EducationStudentsPageState = {
    students: [],
    selectedRow: null,
    isSidebarOpened: false,
    isFilterOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const educationStudentsPageReducer = (
    state = initialState,
    action: EducationStudentsPageActions
): EducationStudentsPageState => {
    switch (action.type) {
        case ES_SET_STUDENTS:
            return {
                ...state,
                students: action.payload
            };
        case ES_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case ES_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case ES_TOGGLE_IS_FILTER_OPENED:
            return {
                ...state,
                isFilterOpened: !state.isFilterOpened
            };
        case ES_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case ES_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default educationStudentsPageReducer;
