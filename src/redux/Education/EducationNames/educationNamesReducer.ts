import {
    EducationNamesState,
    EducationNamesActions,
    EN_SET_FACULTIES,
    EN_SET_DEPARTMENTS,
    EN_SET_GROUPS,
    EN_SET_INSTITUTIONS
} from './educationNamesTypes';

const initialState: EducationNamesState = {
    faculties: [],
    departments: [],
    groups: [],
    institutions: []
};

const educationNamesReducer = (state = initialState, action: EducationNamesActions): EducationNamesState => {
    switch (action.type) {
        case EN_SET_INSTITUTIONS:
            return {
                ...state,
                institutions: action.payload
            };
        case EN_SET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            };
        case EN_SET_GROUPS:
            return {
                ...state,
                groups: action.payload
            };
        case EN_SET_FACULTIES:
            return {
                ...state,
                faculties: action.payload
            };
        default:
            return state;
    }
};

export default educationNamesReducer;
