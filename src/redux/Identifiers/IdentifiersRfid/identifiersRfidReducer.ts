import {
    IdentifiersRfidState,
    IdentifiersRfidActions,
    GET_IDENTIFIERS_RFID_EVENTS,
    IDENTIFIERS_RFID_SELECTED_ROW,
    IDENTIFIERS_RFID_TOGGLE_SIDEBAR,
    IDENTIFIERS_RFID_TOGGLE_BAR,
    IDENTIFIERS_RFID_SIDE_FILTER,
    IDENTIFIERS_RFID_KEY,
    IDENTIFIERS_RFID_CARDREADER,
    GET_IDENTIFIERS_CARDREADERS,
    IDENTIFIERS_RFID_PORT,
    IDENTIFIERS_RFID_PORTS,
    GET_IDENTIFIERS_RESERVED_KEY
} from './identifiersRfidTypes';

const initialState: IdentifiersRfidState = {
    events: [],
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false,
    sideFilter: false,
    key: '',    
    cardreader: null,
    port: null,
    ports: [],
    reservedKeys: [],
    cardreaders: []
};

const IdentifiersRfidReducer = (state = initialState, action: IdentifiersRfidActions): IdentifiersRfidState => {
    switch (action.type) {
        case GET_IDENTIFIERS_RFID_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case IDENTIFIERS_RFID_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case IDENTIFIERS_RFID_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case IDENTIFIERS_RFID_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case IDENTIFIERS_RFID_SIDE_FILTER:
            return {
                ...state,
                sideFilter: !state.sideFilter
            };
        case IDENTIFIERS_RFID_KEY:
            return {
                ...state,
                key: action.payload
            };
        case IDENTIFIERS_RFID_CARDREADER:
            return {
                ...state,
                cardreader: action.payload
            };
        case GET_IDENTIFIERS_CARDREADERS:
            return {
                ...state,
                cardreaders: action.payload
            };
        case IDENTIFIERS_RFID_PORT:
            return {
                ...state,
                port: action.payload
            };
        case IDENTIFIERS_RFID_PORTS:
            return {
                ...state,
                ports: action.payload
            };
        case GET_IDENTIFIERS_RESERVED_KEY:
            return {
                ...state,
                reservedKeys: action.payload
            };
        default:
            return state;
    }
};

export default IdentifiersRfidReducer;
