import {
    EducationInstitutionsPageState,
    EducationInstitutionsPageActions,
    EI_SET_INSTITUTIONS,
    EI_SET_SELECTED_ROW,
    EI_TOGGLE_IS_SIDEBAR_OPENED,
    EI_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    EI_TOGGLE_IS_DELETED_DISPLAYED
} from './educationInstitutionsTypes';

const initialState: EducationInstitutionsPageState = {
    institutions: [],
    selectedRow: null,
    isSidebarOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const educationInstitutionsPageReducer = (
    state = initialState,
    action: EducationInstitutionsPageActions
): EducationInstitutionsPageState => {
    switch (action.type) {
        case EI_SET_INSTITUTIONS:
            return {
                ...state,
                institutions: action.payload
            };
        case EI_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case EI_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case EI_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case EI_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default educationInstitutionsPageReducer;
