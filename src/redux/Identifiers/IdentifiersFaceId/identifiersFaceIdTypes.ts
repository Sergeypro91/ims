export type IdentifiersFaceIdEvents = Array<TableItem>;

export interface TableItem {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export interface IdentifiersFaceIdState {
    events: IdentifiersFaceIdEvents;
    selectedRow: TableItem | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    photo: string | ArrayBuffer | null;
}

export const GET_IDENTYFIERS_FACE_ID_EVENTS = 'GET_IDENTYFIERS_FACE_ID_EVENTS';
export const IDENTYFIERS_FACE_ID_SELECTED_ROW = 'IDENTYFIERS_FACE_ID_SELECTED_ROW';
export const IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR = 'IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR';
export const IDENTYFIERS_FACE_ID_TOGGLE_BAR = 'IDENTYFIERS_FACE_ID_TOGGLE_BAR';
export const IDENTIFIER_PHOTO = 'IDENTIFIER_PHOTO';

interface IdentifiersFaceIdData {
    type: typeof GET_IDENTYFIERS_FACE_ID_EVENTS;
    payload: IdentifiersFaceIdEvents;
}

interface IdentifiersFaceIdSelectTableRow {
    type: typeof IDENTYFIERS_FACE_ID_SELECTED_ROW;
    payload: TableItem;
}

interface IdentifiersFaceIdToggleSidebar {
    type: typeof IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR;
}

interface IdentifiersFaceIdToggleBar {
    type: typeof IDENTYFIERS_FACE_ID_TOGGLE_BAR;
}

interface identifierPhoto {
    type: typeof IDENTIFIER_PHOTO;
    payload: string | ArrayBuffer | null;
}

export type IdentifiersFaceIdActions =
    | IdentifiersFaceIdData
    | IdentifiersFaceIdSelectTableRow
    | IdentifiersFaceIdToggleSidebar
    | IdentifiersFaceIdToggleBar
    | identifierPhoto;