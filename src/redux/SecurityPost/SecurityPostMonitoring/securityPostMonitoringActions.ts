import axios from 'axios';
import { Dispatch } from 'react';
import store from 'redux/store';
import {
    MonitoringEvents,
    SecurityPostMonitoringActions,
    TableItem,
    GET_SECURITY_POST_MONITORING_EVENTS,
    SECURITY_POST_MONITORING_TABLE_ROW,
    SECURITY_POST_MONITORING_QUICK_FILTER,
    SECURITY_POST_MONITORING_SIDE_FILTER
} from './securityPostMonitoringTypes';

export const getSecurityPostMonitoringEvents = (
    eventsList: MonitoringEvents
): SecurityPostMonitoringActions => {
    return {
        type: GET_SECURITY_POST_MONITORING_EVENTS,
        payload: eventsList
    };
};

export const selectSecurityPostMonitoringTableRow = (
    payload: TableItem
): SecurityPostMonitoringActions => {
    return {
        type: SECURITY_POST_MONITORING_TABLE_ROW,
        payload
    };
};

export const toggleSecurityPostMonitoringQuickFilter = (): SecurityPostMonitoringActions => ({
    type: SECURITY_POST_MONITORING_QUICK_FILTER
});

export const toggleSecurityPostMonitoringSideFilter = (): SecurityPostMonitoringActions => ({
    type: SECURITY_POST_MONITORING_SIDE_FILTER
});

export const requestSecurityPostMonitoringEvents = () => (
    dispatch: Dispatch<SecurityPostMonitoringActions>
) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/devices/events?limit=100`)
        .then((response) => {
            dispatch(getSecurityPostMonitoringEvents(response.data.payload));
        })
        .catch((error) => {
            console.log(error);
        });
};
