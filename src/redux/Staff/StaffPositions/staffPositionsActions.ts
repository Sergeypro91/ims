import {
    StaffPositionsActions,
    Position,
    STAFF_POSITIONS_SELECTED_ROW,
    STAFF_POSITIONS_TOGGLE_SIDEBAR,
    STAFF_POSITIONS_TOGGLE_BAR,
    STAFF_POSITIONS_QUICK_FILTER
} from './staffPositionsTypes';

export const staffPositionsSelectedRow = (payload: Position): StaffPositionsActions => {
    return {
        type: STAFF_POSITIONS_SELECTED_ROW,
        payload
    };
};

export const staffPositionsToggleSidebar = (): StaffPositionsActions => ({
    type: STAFF_POSITIONS_TOGGLE_SIDEBAR
});

export const staffPositionsToggleToggleBar = (): StaffPositionsActions => ({
    type: STAFF_POSITIONS_TOGGLE_BAR
});

export const staffPositionsToggleQuickFilter = (): StaffPositionsActions => ({
    type: STAFF_POSITIONS_QUICK_FILTER
});
