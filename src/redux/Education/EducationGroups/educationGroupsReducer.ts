import {
    EducationGroupsPageState,
    EducationGroupsPageActions,
    EG_SET_GROUPS,
    EG_SET_SELECTED_ROW,
    EG_TOGGLE_IS_SIDEBAR_OPENED,
    EG_TOGGLE_IS_FILTER_OPENED,
    EG_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    EG_TOGGLE_IS_DELETED_DISPLAYED
} from './educationGroupsTypes';

const initialState: EducationGroupsPageState = {
    groups: [],
    selectedRow: null,
    isSidebarOpened: false,
    isFilterOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const educationGroupsPageReducer = (
    state = initialState,
    action: EducationGroupsPageActions
): EducationGroupsPageState => {
    switch (action.type) {
        case EG_SET_GROUPS:
            return {
                ...state,
                groups: action.payload
            };
        case EG_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case EG_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case EG_TOGGLE_IS_FILTER_OPENED:
            return {
                ...state,
                isFilterOpened: !state.isFilterOpened
            };
        case EG_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case EG_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default educationGroupsPageReducer;
