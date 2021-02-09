import {
    AppState,
    AppActions,
    THEME,
    APP_USER,
    SET_WS_STATUS,
    GET_WS_EVENT,
    APP_TOAST_ADD,
    GET_SIDE_NAV_MENU,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR,
    APP_DETERM_WINDOW_SIZE,
    APP_TOAST_CLEAR
} from './appTypes';
import isDev from 'utils/isDev/isDev';
import { v4 as uuid } from 'uuid';

console.log(isDev());

const initialState: AppState = {
    config: {
        apiUrl: isDev()
            ? 'http://172.16.3.74:9998/api'
            : // eslint-disable-next-line
              `${location.protocol}//${location.hostname}${location.port && `:${location.port}`}/api`,
        apiWs: isDev()
            ? 'ws://172.16.3.74:9998/ws'
            : // eslint-disable-next-line
              `${location.protocol === 'http:' ? 'ws' : 'wss'}://${location.hostname}${
                  // eslint-disable-next-line
                  location.port && `:${location.port}`
              }/ws`
    },
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
                toasts: [...state.toasts, { ...action.payload, id: uuid() }]
            };
        case APP_TOAST_CLEAR:
            return {
                ...state,
                toasts: [...state.toasts.filter((toast) => toast.id !== action.payload)]
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
        default:
            return state;
    }
};

export default appReducer;
