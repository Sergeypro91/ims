import { combineReducers } from 'redux';
import StaffDepartments from 'redux/Staff/StaffDepartments/staffDepartmentsReducer';
import StaffEmployees from 'redux/Staff/StaffEmployees/staffEmployeesReducer';
import StaffOrganizations from 'redux/Staff/StaffOrganizations/staffOrganizationsReducer';
import StaffPositionsReducer from 'redux/Staff/StaffPositions/staffPositionsReducer';
import StaffNamesReducer from 'redux/Staff/StaffNames/staffNamesReducer';

const StaffReducer = combineReducers({
    staffDepartments: StaffDepartments,
    staffEmployees: StaffEmployees,
    staffOrganizations: StaffOrganizations,
    staffPositions: StaffPositionsReducer,
    staffNames: StaffNamesReducer
});

export default StaffReducer;
