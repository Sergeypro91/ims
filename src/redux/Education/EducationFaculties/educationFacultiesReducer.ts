import {
    EducationFacultiesPageState,
    EducationFacultiesPageActions,
    EF_SET_FACULTIES,
    EF_SET_SELECTED_ROW,
    EF_TOGGLE_IS_SIDEBAR_OPENED,
    EF_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    EF_TOGGLE_IS_DELETED_DISPLAYED
} from './educationFacultiesTypes';

const initialState: EducationFacultiesPageState = {
    faculties: [],
    selectedRow: null,
    isSidebarOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const educationFacultiesPageReducer = (
    state = initialState,
    action: EducationFacultiesPageActions
): EducationFacultiesPageState => {
    switch (action.type) {
        case EF_SET_FACULTIES:
            return {
                ...state,
                faculties: action.payload
            };
        case EF_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case EF_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case EF_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case EF_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default educationFacultiesPageReducer;
