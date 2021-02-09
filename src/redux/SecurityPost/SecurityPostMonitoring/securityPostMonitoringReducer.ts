import {
    SecurityPostMonitoringState,
    SecurityPostMonitoringActions,
    GET_SECURITY_POST_MONITORING_EVENTS,
    SECURITY_POST_MONITORING_TABLE_ROW,
    SECURITY_POST_MONITORING_QUICK_FILTER,
    SECURITY_POST_MONITORING_SIDE_FILTER
} from './securityPostMonitoringTypes';

const initialState: SecurityPostMonitoringState = {
    events: [],
    tableRow: null,
    quickFilter: false,
    sideFilter: false
};

const SecurityPostMonitoringReducer = (
    state = initialState,
    action: SecurityPostMonitoringActions
): SecurityPostMonitoringState => {
    switch (action.type) {
        case GET_SECURITY_POST_MONITORING_EVENTS:
            const rebuildEventsArr = action.payload;

            rebuildEventsArr.map((elem) => {
                const newDate = new Date(elem.date)

                const timeStampCon = 
                    `${newDate.getHours()}:${
                    (newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes()} / ${
                    newDate.getDate()}.${
                    newDate.getMonth() + 1}.${
                    newDate.getFullYear()}`;

                return elem.date = `${timeStampCon}`;
            });

            rebuildEventsArr.map((elem) => {
                if (elem.personLastName === 'Не определено') {
                    return elem.personLastName = 'Не определено'
                }

                return elem.personLastName = `${elem.personLastName} ${elem.personFirstName} ${elem.personMiddleName}`
            });

            return {
                ...state,
                events: rebuildEventsArr
            };
        case SECURITY_POST_MONITORING_TABLE_ROW:
            return {
                ...state,
                tableRow: action.payload
            };
        case SECURITY_POST_MONITORING_QUICK_FILTER:
            return {
                ...state,
                quickFilter: !state.quickFilter
            };
        case SECURITY_POST_MONITORING_SIDE_FILTER:
            return {
                ...state,
                sideFilter: !state.sideFilter
            };
        default:
            return state;
    }
};

export default SecurityPostMonitoringReducer;
