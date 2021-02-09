import {
    StaffOrganizationsPageState,
    StaffOrganizationsPageActions,
    SO_SET_ORGANIZATIONS,
    SO_SET_SELECTED_ROW,
    SO_TOGGLE_IS_SIDEBAR_OPENED,
    SO_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SO_TOGGLE_IS_DELETED_DISPLAYED
} from './staffOrganizationsTypes';

const initialState: StaffOrganizationsPageState = {
    organizations: [],
    selectedRow: null,
    isSidebarOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const staffOrganizationsPageReducer = (
    state = initialState,
    action: StaffOrganizationsPageActions
): StaffOrganizationsPageState => {
    switch (action.type) {
        case SO_SET_ORGANIZATIONS:
            return {
                ...state,
                organizations: action.payload
            };
        case SO_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case SO_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case SO_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case SO_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default staffOrganizationsPageReducer;
