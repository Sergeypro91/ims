import axios from 'axios';
import { Dispatch } from 'react';
import {
    IdentifiersQrEvents,
    IdentifiersQrActions,
    TableItem,
    GET_IDENTYFIERS_QR_EVENTS,
    IDENTYFIERS_QR_SELECTED_ROW,
    IDENTIFIERS_QR_TOGGLE_SIDEBAR,
    IDENTIFIERS_QR_TOGGLE_BAR,
    IDENTYFIERS_QR_SIDE_FILTER,
    IDENTIFIERS_QR_CODE
} from './identifiersQrTypes';
import store from 'redux/store';

export const getIdentifiersQrEvents = (eventsList: IdentifiersQrEvents): IdentifiersQrActions => {
    return {
        type: GET_IDENTYFIERS_QR_EVENTS,
        payload: eventsList
    };
};

export const identifiersQrSelectedRow = (payload: TableItem): IdentifiersQrActions => {
    return {
        type: IDENTYFIERS_QR_SELECTED_ROW,
        payload
    };
};

export const identifiersQrToggleSidebar = (): IdentifiersQrActions => ({
    type: IDENTIFIERS_QR_TOGGLE_SIDEBAR
});

export const identifiersQrToggleBar = (): IdentifiersQrActions => ({
    type: IDENTIFIERS_QR_TOGGLE_BAR
});

export const identifiersQrToggleSideFilter = (): IdentifiersQrActions => ({
    type: IDENTYFIERS_QR_SIDE_FILTER
});

export const identifiersQrCode = (payload: string | ArrayBuffer | null): IdentifiersQrActions => {
    return {
        type: IDENTIFIERS_QR_CODE,
        payload
    };
};

export const requestIdentifiersQrEvents = () => async (
    dispatch: Dispatch<IdentifiersQrActions>
) => {
    try {
        const res = await axios.get(
            `${store.getState().app.config.apiUrl}monitoring/base/online?count=100`
        );
        dispatch(getIdentifiersQrEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
