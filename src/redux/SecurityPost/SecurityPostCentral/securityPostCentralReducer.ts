import {
    SecurityPostCentralState,
    SecurityPostCentralActions,
    SECURITY_POST_CENTRAL_GET_DEVICES,
    SECURITY_POST_CENTRAL_SELECT_DEVICE,
    SECURITY_POST_CENTRAL_CLEAR_DEVICES,
    SECURITY_POST_CENTRAL_GET_EVENTS,
    SECURITY_POST_CENTRAL_GET_EVENTS_ARR,
    SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR,
    SECURITY_POST_CENTRAL_TOGGLE_BAR
} from './securityPostCentralType';

const initialState: SecurityPostCentralState = {
    devices: [],
    selectedDevice: null,
    events: [],
    sidebarOpened: true,
    bottombarOpened: false,
    toggleBar: false
};

const securityPostCentralReducer = (
    state = initialState,
    action: SecurityPostCentralActions
): SecurityPostCentralState => {
    switch (action.type) {
        case SECURITY_POST_CENTRAL_GET_DEVICES:
            return {
                ...state,
                devices: action.payload
            };
        case SECURITY_POST_CENTRAL_SELECT_DEVICE:
            const findIndexFunc = (arr: any[], index: any) => {
                
                return arr.findIndex((elem) => {
                    const searchingElem = arr.find((elem) => elem.uuid === index);
                    
                    return elem === searchingElem;
                });
            };

            return {
                ...state,
                selectedDevice: state.devices[findIndexFunc(state.devices, action.payload)]
            };
        case SECURITY_POST_CENTRAL_CLEAR_DEVICES:
            return {
                ...state,
                devices: []
            };
        case SECURITY_POST_CENTRAL_GET_EVENTS_ARR:
            return {
                ...state,
                events: action.payload.filter((item) => item.codeChar === 'EV_AUTHENTIFICATION_DENIED' || item.codeChar === 'EV_AUTHENTIFICATION_ALLOWED' || item.codeChar === 'EV_INPUT_REGISTERED' || item.codeChar === 'EV_OUTPUT_REGISTERED')
            };
        case SECURITY_POST_CENTRAL_GET_EVENTS:
            if (state.events.length < 50) {
                return {
                    ...state,
                    events: [action.payload, ...state.events ]
                };
            }

            if (state.events.length >= 50) {
                const newArr = state.events;

                newArr.splice(newArr.length - 1, 1);

                return {
                    ...state,
                    events: [action.payload, ...newArr]
                };
            }

            return {
                ...state,
                events: [...state.events]
            };
        case SECURITY_POST_CENTRAL_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case SECURITY_POST_CENTRAL_TOGGLE_BOTTOMBAR:
            return {
                ...state,
                bottombarOpened: !state.bottombarOpened
            };
        case SECURITY_POST_CENTRAL_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        default:
            return state;
    }
};

export default securityPostCentralReducer;
