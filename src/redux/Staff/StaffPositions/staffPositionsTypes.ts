import { Position, PositionsList } from 'api/staff/positions/positions.types';

export interface StaffPositionsPageState {
    positions: PositionsList;
    selectedRow: Position | null;
    isSidebarOpened: boolean;
    isFilterOpened: boolean;
    isQuickFilterActive: boolean;
    isDeletedDisplayed: boolean;
}

export const SP_SET_POSITIONS = 'SP_SET_POSITIONS';
export const SP_SET_SELECTED_ROW = 'SP_SET_SELECTED_ROW';
export const SP_TOGGLE_IS_SIDEBAR_OPENED = 'SP_TOGGLE_IS_SIDEBAR_OPENED';
export const SP_TOGGLE_IS_FILTER_OPENED = 'SP_TOGGLE_IS_FILTER_OPENED';
export const SP_TOGGLE_IS_QUICK_FILTER_ACTIVE = 'SP_TOGGLE_IS_QUICK_FILTER_ACTIVE';
export const SP_TOGGLE_IS_DELETED_DISPLAYED = 'SP_TOGGLE_IS_DELETED_DISPLAYED';

interface SPSetPositions {
    type: typeof SP_SET_POSITIONS;
    payload: PositionsList;
}

interface SPSetSelectedRow {
    type: typeof SP_SET_SELECTED_ROW;
    payload: Position | null;
}

interface SPToggleIsSidebarOpened {
    type: typeof SP_TOGGLE_IS_SIDEBAR_OPENED;
}

interface SPToggleIsFilterOpened {
    type: typeof SP_TOGGLE_IS_FILTER_OPENED;
}

interface SPToggleIsQuickFilterActive {
    type: typeof SP_TOGGLE_IS_QUICK_FILTER_ACTIVE;
}

interface SPToggleIsDeletedDisplayed {
    type: typeof SP_TOGGLE_IS_DELETED_DISPLAYED;
}

export type StaffPositionsPageActions =
    | SPSetPositions
    | SPSetSelectedRow
    | SPToggleIsSidebarOpened
    | SPToggleIsFilterOpened
    | SPToggleIsQuickFilterActive
    | SPToggleIsDeletedDisplayed;
