import axios from 'axios';
import { Dispatch } from 'react';
import {
    IdentifiersRfidEvents,
    IdentifiersRfidActions,
    TableItem,
    GET_IDENTIFIERS_RFID_EVENTS,
    IDENTIFIERS_RFID_SELECTED_ROW,
    IDENTIFIERS_RFID_TOGGLE_SIDEBAR,
    IDENTIFIERS_RFID_TOGGLE_BAR,
    IDENTIFIERS_RFID_SIDE_FILTER
} from './identifiersRfidTypes';
import config from '../../../config/config.json';

export const getIdentifiersRfidEvents = (eventsList: IdentifiersRfidEvents): IdentifiersRfidActions => {
    return {
        type: GET_IDENTIFIERS_RFID_EVENTS,
        payload: eventsList
    };
};

export const identifiersRfidSelectedRow = (payload: TableItem): IdentifiersRfidActions => {
    return {
        type: IDENTIFIERS_RFID_SELECTED_ROW,
        payload
    };
};

export const identifiersRfidToggleSidebar = (): IdentifiersRfidActions => ({
    type: IDENTIFIERS_RFID_TOGGLE_SIDEBAR
});

export const identifiersRfidToggleBar = (): IdentifiersRfidActions => ({
    type: IDENTIFIERS_RFID_TOGGLE_BAR
});

export const identifiersRfidToggleSideFilter = (): IdentifiersRfidActions => ({
    type: IDENTIFIERS_RFID_SIDE_FILTER
});

export const requestIdentifiersRfidEvents = () => async (dispatch: Dispatch<IdentifiersRfidActions>) => {
    try {
        const res = await axios.get(`${config.apiUrl}monitoring/base/online?count=100`);
        dispatch(getIdentifiersRfidEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
