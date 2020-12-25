import { combineReducers } from 'redux';
import ReportsDeviationsReducer from 'redux/Reports/ReportsDeviations/reportsDeviationsReducer';
import ReportsEventsReducer from 'redux/Reports/ReportsEvents/reportsEventsReducer';
import ReportsStatisticsReducer from 'redux/Reports/ReportsStatistics/reportsStatisticsReducer';
import ReportsWorkingTimeReducer from 'redux/Reports/ReportsWorkingTime/reportsWorkingTimeReducer';

const Reports = combineReducers({
    reportsDeviations: ReportsDeviationsReducer,
    reportsEvents: ReportsEventsReducer,
    reportsStatistics: ReportsStatisticsReducer,
    reportsWorking: ReportsWorkingTimeReducer,
});

export default Reports;