import axios from 'axios';
import { Dispatch } from 'react';
import {
    SettingsUsersAndRolesEvents,
    SettingsUsersAndRolesActions,
    TableItem,
    GET_SETTINGS_USERS_AND_ROLES_EVENTS,
    SETTINGS_USERS_AND_ROLES_SELECTED_ROW,
    SETTINGS_USERS_AND_ROLES_TOGGLE_BAR
} from './settingsUsersAndRolesTypes';
import config from '../../../config/config.json';

export const getSettingsUsersAndRolesEvents = (
    eventsList: SettingsUsersAndRolesEvents
): SettingsUsersAndRolesActions => {
    return {
        type: GET_SETTINGS_USERS_AND_ROLES_EVENTS,
        payload: eventsList
    };
};

export const settingsUsersAndRolesSelectedRow = (payload: TableItem): SettingsUsersAndRolesActions => {
    return {
        type: SETTINGS_USERS_AND_ROLES_SELECTED_ROW,
        payload
    };
};

export const settingsUsersAndRolesToggleBar = (): SettingsUsersAndRolesActions => ({
    type: SETTINGS_USERS_AND_ROLES_TOGGLE_BAR
});

export const requestSettingsUsersAndRolesEvents = () => async (dispatch: Dispatch<SettingsUsersAndRolesActions>) => {
    try {
        const res = await axios.get(`${config.apiUrl}monitoring/base/online?count=100`);
        dispatch(getSettingsUsersAndRolesEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
