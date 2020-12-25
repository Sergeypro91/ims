import {
    IdentifiersQrState,
    IdentifiersQrActions,
    GET_IDENTYFIERS_QR_EVENTS,
    IDENTYFIERS_QR_SELECTED_ROW,
    IDENTIFIERS_QR_TOGGLE_SIDEBAR,
    IDENTIFIERS_QR_TOGGLE_BAR,
    IDENTYFIERS_QR_SIDE_FILTER
} from './identifiersQrTypes';

const initialState: IdentifiersQrState = {
    events: [],
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false,
    sideFilter: false
};

const IdentifiersQrReducer = (
    state = initialState,
    action: IdentifiersQrActions
): IdentifiersQrState => {
    switch (action.type) {
        case GET_IDENTYFIERS_QR_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case IDENTYFIERS_QR_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case IDENTIFIERS_QR_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case IDENTIFIERS_QR_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case IDENTYFIERS_QR_SIDE_FILTER:
            return {
                ...state,
                sideFilter: !state.sideFilter
            };
        default:
            return state;
    }
};

export default IdentifiersQrReducer;
