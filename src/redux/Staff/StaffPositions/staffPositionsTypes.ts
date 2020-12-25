export interface Position {
    _id: string;
    name: string;
    count: number;
    createdAt: string;
    deleted: boolean;
}

export type Positions = Array<Position>;
export interface StaffPositionsState {
    positionsTable: Positions;
    selectedRow: Position | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    quickFilter: boolean;
}

export const STAFF_POSITIONS_SELECTED_ROW = 'STAFF_POSITIONS_SELECTED_ROW';
export const STAFF_POSITIONS_TOGGLE_SIDEBAR = 'STAFF_POSITIONS_TOGGLE_SIDEBAR';
export const STAFF_POSITIONS_TOGGLE_BAR = 'STAFF_POSITIONS_TOGGLE_BAR';
export const STAFF_POSITIONS_QUICK_FILTER = 'STAFF_POSITIONS_QUICK_FILTER';

interface StaffPositionsSelectTableRow {
    type: typeof STAFF_POSITIONS_SELECTED_ROW;
    payload: Position;
}

interface StaffPositionsToggleSidebar {
    type: typeof STAFF_POSITIONS_TOGGLE_SIDEBAR;
}

interface StaffPositionsToggleBar {
    type: typeof STAFF_POSITIONS_TOGGLE_BAR;
}

interface StaffPositionsToggleQuickFilter {
    type: typeof STAFF_POSITIONS_QUICK_FILTER;
}

export type StaffPositionsActions =
    | StaffPositionsSelectTableRow
    | StaffPositionsToggleSidebar
    | StaffPositionsToggleBar
    | StaffPositionsToggleQuickFilter;
