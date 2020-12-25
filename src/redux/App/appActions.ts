import { Dispatch } from 'react';
import config from 'config/config.json';
import { requestDevices } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import {SecurityPostCentralActions} from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import {
    User,
    Event,
    AppActions,
    SideNavMenu,
    WindowSizeObj,
    Toast,
    APP_USER,
    GET_WS_EVENT,
    APP_TOAST_ADD,
    APP_TOAST_CLEAR,
    GET_SIDE_NAV_MENU,
    THEME,
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
    APP_WIZARD_CLOSE,
    SET_WS_STATUS
} from './appTypes';
import menuData from './sideNavMenu.json';

export const appUser = (payload: User): AppActions => {
    return {
        type: APP_USER,
        payload
    };
};

export const setWsStatus = (status: number): AppActions => ({
    type: SET_WS_STATUS,
    payload: status
});

export const getWsEvent = (event: null | Event): AppActions => ({
    type: GET_WS_EVENT,
    payload: event
});

export const appToastAdd = (payload: Toast): AppActions => ({
    type: APP_TOAST_ADD,
    payload
});

export const appToastClear = (): AppActions => ({
    type: APP_TOAST_CLEAR
});

export const getSideNavMenu = (sideNavMenu: SideNavMenu): AppActions => ({
    type: GET_SIDE_NAV_MENU,
    payload: sideNavMenu
});

export const requestSideNavMenu = () => (dispatch: Dispatch<AppActions>) => {
    const menu = JSON.parse(JSON.stringify(menuData));

    dispatch(getSideNavMenu(menu));
};

export const appTheme = (payload: string): AppActions => ({
    type: THEME,
    payload
});

export const appShowProgressBar = (): AppActions => ({
    type: APP_SHOW_PROGRESS_BAR
});

export const appHideProgressBar = (): AppActions => ({
    type: APP_HIDE_PROGRESS_BAR
});

export const appToggleSidenav = (): AppActions => ({
    type: APP_TOGGLE_SIDENAV
});

export const appToggleSidebar = (): AppActions => ({
    type: APP_TOGGLE_SIDEBAR
});

export const appToggleBottombar = (): AppActions => ({
    type: APP_TOGGLE_BOTTOMBAR
});

export const appToggleBar = (): AppActions => ({
    type: APP_TOGGLE_BAR
});

export const appWindowSize = (payload: WindowSizeObj): AppActions => ({
    type: APP_DETERM_WINDOW_SIZE,
    payload
});

export const appWizardCurrentStep = (payload: number): AppActions => {
    return {
        type: APP_WIZARD_STEP,
        payload
    };
};

export const appWizardStepsCount = (payload: number): AppActions => {
    return {
        type: APP_WIZARD_STEPS,
        payload
    };
};

export const appWizardMarckerWidth = (payload: number): AppActions => {
    return {
        type: APP_WIZARD_MARCKER_WIDTH,
        payload
    };
};

export const appWizardClose = (): AppActions => ({
    type: APP_WIZARD_CLOSE
});

export const requestEvent = () => (dispatch: Dispatch<AppActions | SecurityPostCentralActions | Dispatch<any>>) => {
    let ws: WebSocket;

    const connectToEvent = () => {
        ws = new WebSocket(`${config.ws}`);

        ws.onopen = () => {
            console.log('WebSocket Client Connected');

            dispatch(setWsStatus(1));
            dispatch(requestDevices());
        };

        ws.onmessage = (event: MessageEvent) => {
            const timeEvent: Event = JSON.parse(event.data);
            let timeoutForEvent: null | number = null;

            console.log(timeEvent);

            dispatch(getWsEvent(timeEvent));

            if (timeoutForEvent) {
                clearTimeout(timeoutForEvent);
            }

            timeoutForEvent = setTimeout(() => {
                dispatch(getWsEvent(null));
            }, 100);
        };

        ws.onclose = () => {
            const toast = {
                type: 'warning',
                message: 'Производится переподключение WebSocket соединения'
            };
            let timeoutForReconnect: null | number = null;

            console.log('WebSocket Client Disconnect');

            dispatch(setWsStatus(0));

            if (timeoutForReconnect) {
                clearTimeout(timeoutForReconnect);
            }

            if (ws.readyState !== 1) {
                timeoutForReconnect = setTimeout(() => {
                    console.log('Try to reconnect');

                    connectToEvent();

                    dispatch(appToastAdd(toast));
                }, 5000);
            }
        };

        ws.onerror = () => {
            const toast = {
                type: 'error',
                message: 'WebSocket соединение было разорвано'
            };

            console.error(`Socket encountered error: Closing socket`);

            ws.close();

            dispatch(appToastAdd(toast));
        };
    };

    connectToEvent();
};
