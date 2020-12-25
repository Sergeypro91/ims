import {
    AppState,
    AppActions,
    THEME,
    APP_USER,
    SET_WS_STATUS,
    GET_WS_EVENT,
    APP_TOAST_ADD,
    APP_TOAST_CLEAR,
    GET_SIDE_NAV_MENU,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR,
    APP_DETERM_WINDOW_SIZE,
    APP_WIZARD_STEP,
    APP_WIZARD_STEPS,
    APP_WIZARD_MARCKER_WIDTH,
    APP_WIZARD_CLOSE
} from './appTypes';

const initialState: AppState = {
    user: {
        login: '',
        password: '',
        saved: false,
        isAuthenticated: false
    },
    wsEvent: {
        status: 0,
        event: null
    },
    toasts: [],
    sideNavMenu: [],
    theme: 'light',
    progressBarVisible: false,
    sidenavOpened: true,
    sidebarOpened: false,
    bottombarOpened: false,
    toggleBar: false,
    windowSize: {
        width: 0,
        height: 0
    },
    setupWizard: {
        stepsCount: 0,
        currentStep: 0,
        marckerElemWidth: 0
    }
};

const appReducer = (state = initialState, action: AppActions): AppState => {
    switch (action.type) {
        case APP_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    login: action.payload.login,
                    password: action.payload.password,
                    saved: action.payload.saved,
                    isAuthenticated: action.payload.isAuthenticated
                }
            };
        case SET_WS_STATUS:
            return {
                ...state,
                wsEvent: {
                    ...state.wsEvent,
                    status: action.payload
                }
            };
        case GET_WS_EVENT:
            return {
                ...state,
                wsEvent: {
                    ...state.wsEvent,
                    event: action.payload
                }
            };
        case APP_TOAST_ADD:
            return {
                ...state,
                toasts: [...state.toasts, action.payload]
            };
        case APP_TOAST_CLEAR:
            if (state.toasts.length > 1) {
                const newArr = state.toasts;
                newArr.shift();

                return {
                    ...state,
                    toasts: [...newArr]
                };
            }

            return {
                ...state,
                toasts: []
            };
        case GET_SIDE_NAV_MENU:
            return {
                ...state,
                sideNavMenu: action.payload
            };
        case THEME:
            return {
                ...state,
                theme: action.payload
            };
        case APP_HIDE_PROGRESS_BAR:
            return {
                ...state,
                progressBarVisible: false
            };
        case APP_SHOW_PROGRESS_BAR:
            return {
                ...state,
                progressBarVisible: true
            };
        case APP_TOGGLE_SIDENAV:
            return {
                ...state,
                sidenavOpened: !state.sidenavOpened
            };
        case APP_TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpened: !state.sidebarOpened
            };
        case APP_TOGGLE_BOTTOMBAR:
            return {
                ...state,
                bottombarOpened: !state.bottombarOpened
            };
        case APP_TOGGLE_BAR:
            return {
                ...state,
                toggleBar: !state.toggleBar
            };
        case APP_DETERM_WINDOW_SIZE:
            return {
                ...state,
                windowSize: action.payload
            };
        case APP_WIZARD_STEP:
            return {
                ...state,
                setupWizard: {
                    ...state.setupWizard,
                    currentStep: action.payload
                }
            };
        case APP_WIZARD_STEPS:
            return {
                ...state,
                setupWizard: {
                    ...state.setupWizard,
                    stepsCount: action.payload
                }
            };
        case APP_WIZARD_MARCKER_WIDTH:
            return {
                ...state,
                setupWizard: {
                    ...state.setupWizard,
                    marckerElemWidth: action.payload
                }
            };
        case APP_WIZARD_CLOSE:
            return {
                ...state,
                setupWizard: {
                    ...state.setupWizard,
                    stepsCount: 0,
                    currentStep: 0,
                    marckerElemWidth: 0
                }
            };
        default:
            return state;
    }
};

export default appReducer;
