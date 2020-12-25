import {
    IdentifiersFaceIdState,
    IdentifiersFaceIdActions,
    GET_IDENTYFIERS_FACE_ID_EVENTS,
    IDENTYFIERS_FACE_ID_SELECTED_ROW,
    IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR,
    IDENTYFIERS_FACE_ID_TOGGLE_BAR
} from './identifiersFaceIdTypes';

const initialState: IdentifiersFaceIdState = {
    events: [],
    selectedRow: null,
    sidebarOpened: false,
    toggleBar: false
};

const IdentifiersFaceIdReducer = (state = initialState, action: IdentifiersFaceIdActions): IdentifiersFaceIdState => {
    switch (action.type) {
        case GET_IDENTYFIERS_FACE_ID_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case IDENTYFIERS_FACE_ID_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.payload
            };
        case IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case IDENTYFIERS_FACE_ID_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default IdentifiersFaceIdReducer;
