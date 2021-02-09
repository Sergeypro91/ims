import { Dispatch } from 'react';
import store from 'redux/store';
import { requestDevices } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import { identifiersRfidKey } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import { SecurityPostCentralActions } from 'redux/SecurityPost/SecurityPostCentral/securityPostCentralType';
import { IdentifiersRfidActions } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidTypes';
import {
    User,
    Event,
    AppActions,
    SideNavMenu,
    WindowSizeObj,
    IAddToast,
    APP_USER,
    GET_WS_EVENT,
    APP_TOAST_ADD,
    GET_SIDE_NAV_MENU,
    THEME,
    APP_HIDE_PROGRESS_BAR,
    APP_SHOW_PROGRESS_BAR,
    APP_TOGGLE_SIDENAV,
    APP_TOGGLE_SIDEBAR,
    APP_TOGGLE_BOTTOMBAR,
    APP_TOGGLE_BAR,
    APP_DETERM_WINDOW_SIZE,
    SET_WS_STATUS,
    APP_TOAST_CLEAR
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

export const appToastAdd = (payload: IAddToast): AppActions => ({
    type: APP_TOAST_ADD,
    payload
});

export const appToastClear = (payload: string): AppActions => ({
    type: APP_TOAST_CLEAR,
    payload
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

export const requestEvent = () => (
    dispatch: Dispatch<AppActions | SecurityPostCentralActions | IdentifiersRfidActions | Dispatch<any>>
) => {
    let ws: WebSocket;

    const connectToEvent = () => {
        ws = new WebSocket(`${store.getState().app.config.apiWs}`);

        ws.onopen = () => {
            console.log('WebSocket Client Connected');

            dispatch(setWsStatus(1));
            dispatch(requestDevices());
        };

        ws.onmessage = (event: MessageEvent) => {
            const timeEvent = JSON.parse(event.data);
            let timeoutForEvent: null | number = null;

            console.log(timeEvent);

            if (timeEvent.code === 10003) {
                dispatch(identifiersRfidKey(timeEvent.payload));
            } else {
                dispatch(getWsEvent(timeEvent));

                if (timeoutForEvent) {
                    clearTimeout(timeoutForEvent);
                }

                timeoutForEvent = window.setTimeout(() => {
                    dispatch(getWsEvent(null));
                }, 100);
            }
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
                timeoutForReconnect = window.setTimeout(() => {
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
