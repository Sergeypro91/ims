export type IdentifiersQrEvents = Array<TableItem>;

export interface TableItem {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export interface IdentifiersQrState {
    events: IdentifiersQrEvents;
    selectedRow: TableItem | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    sideFilter: boolean;
}

export const GET_IDENTYFIERS_QR_EVENTS = 'GET_IDENTYFIERS_QR_EVENTS';
export const IDENTYFIERS_QR_SELECTED_ROW = 'IDENTYFIERS_QR_SELECTED_ROW';
export const IDENTIFIERS_QR_TOGGLE_SIDEBAR = 'IDENTIFIERS_QR_TOGGLE_SIDEBAR';
export const IDENTIFIERS_QR_TOGGLE_BAR = 'IDENTIFIERS_QR_TOGGLE_BAR';
export const IDENTYFIERS_QR_SIDE_FILTER = 'IDENTYFIERS_QR_SIDE_FILTER';

interface IdentifiersQrData {
    type: typeof GET_IDENTYFIERS_QR_EVENTS;
    payload: IdentifiersQrEvents;
}

interface IdentifiersQrSelectTableRow {
    type: typeof IDENTYFIERS_QR_SELECTED_ROW;
    payload: TableItem;
}

interface IdentifiersQrToggleSidebar {
    type: typeof IDENTIFIERS_QR_TOGGLE_SIDEBAR;
}

interface IdentifiersQrToggleBar {
    type: typeof IDENTIFIERS_QR_TOGGLE_BAR;
}

interface IdentifiersQrToggleSideFilter {
    type: typeof IDENTYFIERS_QR_SIDE_FILTER;
}

export type IdentifiersQrActions =
    | IdentifiersQrData
    | IdentifiersQrSelectTableRow
    | IdentifiersQrToggleSidebar
    | IdentifiersQrToggleBar
    | IdentifiersQrToggleSideFilter;
