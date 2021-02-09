import axios from 'axios';
import { Dispatch } from 'react';
import { ReportsEvents, ReportsEventsActions, GET_REPORTS_EVENTS } from './reportsEventsTypes';
import store from 'redux/store';

const getReportsEvents = (eventsList: ReportsEvents): ReportsEventsActions => {
    return {
        type: GET_REPORTS_EVENTS,

        payload: eventsList
    };
};

export const requestReportsEvents = () => async (dispatch: Dispatch<ReportsEventsActions>) => {
    try {
        const res = await axios.get(
            `${store.getState().app.config.apiUrl}monitoring/base/online?count=100`
        );
        dispatch(getReportsEvents(res.data.list));
    } catch (e) {
        console.log(e.body);
    }
};
