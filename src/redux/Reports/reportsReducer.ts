import { combineReducers } from 'redux';
import ReportsEventsReducer from 'redux/Reports/ReportsEvents/reportsEventsReducer';
import ReportsWorkingTimeReducer from 'redux/Reports/ReportsWorkingTime/reportsWorkingTimeReducer';

const Reports = combineReducers({
    reportsEvents: ReportsEventsReducer,
    reportsWorking: ReportsWorkingTimeReducer
});

export default Reports;
