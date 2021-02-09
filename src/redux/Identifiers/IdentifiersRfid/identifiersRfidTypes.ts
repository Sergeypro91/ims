export type IdentifiersRfidEvents = Array<TableItem>;

export interface TableItem {
    eventDate: string;
    physpersonName: string;
    physpersonUuid: string;
    eventCodeName: string;
    sourceName: string;
}

export type ReservedKeys = Array<ReservedKey>;

export interface ReservedKey {
    uuid: string;
    content: string;
    index: string;
    indexInt: number;
    indexSysFormat: string;
    typeId: number;
    typeName: string;
}

export type Cardreaders = Array<Cardreader>;

export interface Cardreader {
    id: number;
    uuid: string;
    name: string;
    description: string;
    identificatorTypeId: number;
    identificatorTypeName: string;
    supportAutoread: boolean;
    supportAutoreadStr: string;
    useRemoteService: boolean;
    useRemoteServiceStr: string;
    enabled: boolean;
    enabledStr: string;
    creationDate: string;
    userCreated: string;
}

export type Ports = Array<Port>;

export interface Port {
     name: string;
     reader: string;
}

export interface IdentifiersRfidState {
    events: IdentifiersRfidEvents;
    selectedRow: TableItem | null;
    sidebarOpened: boolean;
    toggleBar: boolean;
    sideFilter: boolean;
    key: string;
    cardreader: Cardreader | null;
    cardreaders: Cardreaders;
    port: Port | null;
    ports: Ports;
    reservedKeys: ReservedKeys;
}

export const GET_IDENTIFIERS_RFID_EVENTS = 'GET_IDENTIFIERS_RFID_EVENTS';
export const IDENTIFIERS_RFID_SELECTED_ROW = 'IDENTIFIERS_RFID_SELECTED_ROW';
export const IDENTIFIERS_RFID_TOGGLE_SIDEBAR = 'IDENTIFIERS_RFID_TOGGLE_SIDEBAR';
export const IDENTIFIERS_RFID_TOGGLE_BAR = 'IDENTIFIERS_RFID_TOGGLE_BAR';
export const IDENTIFIERS_RFID_SIDE_FILTER = 'IDENTIFIERS_RFID_SIDE_FILTER';
export const IDENTIFIERS_RFID_KEY = 'IDENTIFIERS_RFID_KEY';
export const IDENTIFIERS_RFID_CARDREADER = 'IDENTIFIERS_RFID_CARDREADER';
export const GET_IDENTIFIERS_CARDREADERS = 'GET_IDENTIFIERS_CARDREADERS';
export const IDENTIFIERS_RFID_PORT = 'IDENTIFIERS_RFID_PORT';
export const IDENTIFIERS_RFID_PORTS = 'IDENTIFIERS_RFID_PORTS';
export const GET_IDENTIFIERS_RESERVED_KEY = 'GET_IDENTIFIERS_RESERVED_KEY';

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

interface IdentifiersRfidKey {
    type: typeof IDENTIFIERS_RFID_KEY;
    payload: string;
}

interface IdentifiersRfidReader {
    type: typeof IDENTIFIERS_RFID_CARDREADER;
    payload: Cardreader;
}

interface IdentifiersRfidCardreaders {
    type: typeof GET_IDENTIFIERS_CARDREADERS;
    payload: Cardreaders;
}

interface IdentifiersRfidPort {
    type: typeof IDENTIFIERS_RFID_PORT;
    payload: Port;
}

interface IdentifiersRfidPorts {
    type: typeof IDENTIFIERS_RFID_PORTS;
    payload: Ports;
}

interface IdentifiersRfidReservedKey {
    type: typeof GET_IDENTIFIERS_RESERVED_KEY;
    payload: ReservedKeys;
}

export type IdentifiersRfidActions =
    | IdentifiersRfidData
    | IdentifiersRfidSelectTableRow
    | IdentifiersRfidToggleSidebar
    | IdentifiersRfidToggleBar
    | IdentifiersRfidToggleSideFilter
    | IdentifiersRfidKey
    | IdentifiersRfidReader
    | IdentifiersRfidCardreaders
    | IdentifiersRfidPort
    | IdentifiersRfidPorts
    | IdentifiersRfidReservedKey;
