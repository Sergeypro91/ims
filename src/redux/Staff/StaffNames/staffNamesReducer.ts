import {
    StaffNamesState,
    StaffNamesActions,
    SN_SET_ORGANIZATIONS,
    SN_SET_DEPARTMENTS,
    SN_SET_POSITIONS,
    SN_SET_EMPLOYEES
} from './staffNamesTypes';

const initialState: StaffNamesState = {
    organizations: [],
    departments: [],
    positions: [],
    employees: []
};

const staffNamesReducer = (state = initialState, action: StaffNamesActions): StaffNamesState => {
    switch (action.type) {
        case SN_SET_ORGANIZATIONS:
            return {
                ...state,
                organizations: action.payload
            };
        case SN_SET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            };
        case SN_SET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            };
        case SN_SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            };
        default:
            return state;
    }
};

export default staffNamesReducer;
