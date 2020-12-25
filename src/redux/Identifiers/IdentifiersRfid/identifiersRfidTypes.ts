export type IdentifiersRfidEvents = Array<TableItem>;

export interface TableItem {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export interface IdentifiersRfidState {
    events: IdentifiersRfidEvents;
    selectedRow: TableItem | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    sideFilter: boolean;
}

export const GET_IDENTIFIERS_RFID_EVENTS = 'GET_IDENTIFIERS_RFID_EVENTS';
export const IDENTIFIERS_RFID_SELECTED_ROW = 'IDENTIFIERS_RFID_SELECTED_ROW';
export const IDENTIFIERS_RFID_TOGGLE_SIDEBAR = 'IDENTIFIERS_RFID_TOGGLE_SIDEBAR';
export const IDENTIFIERS_RFID_TOGGLE_BAR = 'IDENTIFIERS_RFID_TOGGLE_BAR';
export const IDENTIFIERS_RFID_SIDE_FILTER = 'IDENTIFIERS_RFID_SIDE_FILTER';

interface IdentifiersRfidData {
    type: typeof GET_IDENTIFIERS_RFID_EVENTS;
    payload: IdentifiersRfidEvents;
}

interface IdentifiersRfidSelectTableRow {
    type: typeof IDENTIFIERS_RFID_SELECTED_ROW;
    payload: TableItem;
}

interface IdentifiersRfidToggleSidebar {
    type: typeof IDENTIFIERS_RFID_TOGGLE_SIDEBAR;
}

interface IdentifiersRfidToggleBar {
    type: typeof IDENTIFIERS_RFID_TOGGLE_BAR;
}

interface IdentifiersRfidToggleSideFilter {
    type: typeof IDENTIFIERS_RFID_SIDE_FILTER;
}

export type IdentifiersRfidActions =
    | IdentifiersRfidData
    | IdentifiersRfidSelectTableRow
    | IdentifiersRfidToggleSidebar
    | IdentifiersRfidToggleBar
    | IdentifiersRfidToggleSideFilter;
