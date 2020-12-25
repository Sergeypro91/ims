import {
    IdentifiersRfidState,
    IdentifiersRfidActions,
    GET_IDENTIFIERS_RFID_EVENTS,
    IDENTIFIERS_RFID_SELECTED_ROW,
    IDENTIFIERS_RFID_TOGGLE_SIDEBAR,
    IDENTIFIERS_RFID_TOGGLE_BAR,
    IDENTIFIERS_RFID_SIDE_FILTER
} from './identifiersRfidTypes';

const initialState: IdentifiersRfidState = {
    events: [],
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false,
    sideFilter: false
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
        default:
            return state;
    }
};

export default IdentifiersRfidReducer;
