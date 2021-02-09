import {
    StaffPositionsPageState,
    StaffPositionsPageActions,
    SP_SET_POSITIONS,
    SP_SET_SELECTED_ROW,
    SP_TOGGLE_IS_SIDEBAR_OPENED,
    SP_TOGGLE_IS_FILTER_OPENED,
    SP_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SP_TOGGLE_IS_DELETED_DISPLAYED
} from './staffPositionsTypes';

const initialState: StaffPositionsPageState = {
    positions: [],
    selectedRow: null,
    isSidebarOpened: false,
    isFilterOpened: false,
    isQuickFilterActive: false,
    isDeletedDisplayed: false
};

const staffPositionsPageReducer = (
    state = initialState,
    action: StaffPositionsPageActions
): StaffPositionsPageState => {
    switch (action.type) {
        case SP_SET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            };
        case SP_SET_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case SP_TOGGLE_IS_SIDEBAR_OPENED:
            return {
                ...state,
                isSidebarOpened: !state.isSidebarOpened
            };
        case SP_TOGGLE_IS_FILTER_OPENED:
            return {
                ...state,
                isFilterOpened: !state.isFilterOpened
            };
        case SP_TOGGLE_IS_QUICK_FILTER_ACTIVE:
            return {
                ...state,
                isQuickFilterActive: !state.isQuickFilterActive
            };
        case SP_TOGGLE_IS_DELETED_DISPLAYED:
            return {
                ...state,
                isDeletedDisplayed: !state.isDeletedDisplayed
            };
        default:
            return state;
    }
};

export default staffPositionsPageReducer;
