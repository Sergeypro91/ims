import { combineReducers } from 'redux';
import EducationInstitutions from './EducationInstitutions/educationInstitutionsReducer';
import EducationFaculties from './EducationFaculties/educationFacultiesReducer';
import EducationDepartments from './EducationDepartments/educationDepartmentsReducer';
import EducationGroups from './EducationGroups/educationGroupsReducer';
import EducationStudents from './EducationStudents/educationStudentsReducer';
import EducationNames from './EducationNames/educationNamesReducer';

const educationReducer = combineReducers({
    educationInstitutions: EducationInstitutions,
    educationFaculties: EducationFaculties,
    educationDepartments: EducationDepartments,
    educationGroups: EducationGroups,
    educationStudents: EducationStudents,
    educationNames: EducationNames
});

export default educationReducer;
