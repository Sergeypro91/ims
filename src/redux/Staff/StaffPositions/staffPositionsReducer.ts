import fakeData from 'App/components/pages/Staff/StaffPositions/fakeData';
import {
    StaffPositionsState,
    StaffPositionsActions,
    STAFF_POSITIONS_SELECTED_ROW,
    STAFF_POSITIONS_TOGGLE_SIDEBAR,
    STAFF_POSITIONS_TOGGLE_BAR,
    STAFF_POSITIONS_QUICK_FILTER
} from './staffPositionsTypes';

const initialState: StaffPositionsState = {
    positionsTable: fakeData,
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false,
    quickFilter: false
};

const StaffPositionsReducer = (state = initialState, action: StaffPositionsActions): StaffPositionsState => {
    switch (action.type) {
        case STAFF_POSITIONS_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case STAFF_POSITIONS_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case STAFF_POSITIONS_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case STAFF_POSITIONS_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        default:
            return state;
    }
};

export default StaffPositionsReducer;
