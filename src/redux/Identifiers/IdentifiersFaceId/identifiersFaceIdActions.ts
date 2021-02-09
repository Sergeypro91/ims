import axios from 'axios';
import { Dispatch } from 'react';
import {
    IdentifiersFaceIdEvents,
    IdentifiersFaceIdActions,
    TableItem,
    GET_IDENTYFIERS_FACE_ID_EVENTS,
    IDENTYFIERS_FACE_ID_SELECTED_ROW,
    IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR,
    IDENTYFIERS_FACE_ID_TOGGLE_BAR,
    IDENTIFIER_PHOTO
} from './identifiersFaceIdTypes';
import store from 'redux/store';

export const getIdentifiersFaceIdEvents = (
    eventsList: IdentifiersFaceIdEvents
): IdentifiersFaceIdActions => {
    return {
        type: GET_IDENTYFIERS_FACE_ID_EVENTS,
        payload: eventsList
    };
};

export const identifiersFaceIdSelectedRow = (payload: TableItem): IdentifiersFaceIdActions => {
    return {
        type: IDENTYFIERS_FACE_ID_SELECTED_ROW,
        payload
    };
};

export const identifiersFaceIdToggleSidebar = (): IdentifiersFaceIdActions => ({
    type: IDENTYFIERS_FACE_ID_TOGGLE_SIDEBAR
});

export const identifiersFaceIdToggleBar = (): IdentifiersFaceIdActions => ({
    type: IDENTYFIERS_FACE_ID_TOGGLE_BAR
});

export const identifiersFaceIdPhoto = (
    payload: string | ArrayBuffer | null
): IdentifiersFaceIdActions => {
    return {
        type: IDENTIFIER_PHOTO,
        payload
    };
};

export const requestIdentifiersFaceIdEvents = () => async (
    dispatch: Dispatch<IdentifiersFaceIdActions>
) => {
    try {
        const res = await axios.get(
            `${store.getState().app.config.apiUrl}monitoring/base/online?count=100`
        );
        dispatch(getIdentifiersFaceIdEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
