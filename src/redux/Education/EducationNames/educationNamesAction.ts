import { getEducationDepartmentsList } from 'api/education/departments/departments.api';
import { getFacultiesList } from 'api/education/faculties/faculties.api';
import { getGroupsList } from 'api/education/groups/groups.api';
import { getInstitutionsList } from 'api/education/institutions/institutions.api';
import { Dispatch } from 'react';
import { EducationNamesActions, EN_SET_INSTITUTIONS, EN_SET_DEPARTMENTS, EN_SET_GROUPS, EN_SET_FACULTIES } from './educationNamesTypes';

export const ENSetInstitutions = (
    institutions: Array<{
        [key: string]: string;
    }>
): EducationNamesActions => ({
    type: EN_SET_INSTITUTIONS,
    payload: institutions
});

export const ENSetDepartments = (
    departments: Array<{
        [key: string]: string;
    }>
): EducationNamesActions => ({
    type: EN_SET_DEPARTMENTS,
    payload: departments
});

export const ENSetGroups = (
    groups: Array<{
        [key: string]: string;
    }>
): EducationNamesActions => ({
    type: EN_SET_GROUPS,
    payload: groups
});

export const ENSetFaculties = (
    employees: Array<{
        [key: string]: string;
    }>
): EducationNamesActions => ({
    type: EN_SET_FACULTIES,
    payload: employees
});

export const ENGetInstitutions = () => async (dispatch: Dispatch<any>) => {
    const institutions = await getInstitutionsList({ mode: 'simple' });

    if (institutions) {
        dispatch(
            ENSetInstitutions(
                institutions.map((institute): any => {
                    return { name: institute.depName, id: institute.departmentUuid };
                })
            )
        );
    } else {
        dispatch(ENGetInstitutions());
    }
};

export const ENGetDepartments = () => async (dispatch: any) => {
    const departments = await getEducationDepartmentsList({ mode: 'simple' });

    if (departments) {
        dispatch(
            ENSetDepartments(
                departments.map((department): any => {
                    return { name: department.depName, id: department.departmentUuid };
                })
            )
        );
    } else {
        dispatch(ENGetDepartments());
    }
};

export const ENGetGroups = () => async (dispatch: any) => {
    const groups = await getGroupsList({ mode: 'simple' });

    if (groups) {
        dispatch(
            ENSetGroups(
                groups.map((position): any => {
                    return { name: position.depName, id: position.departmentUuid };
                })
            )
        );
    } else {
        dispatch(ENGetGroups());
    }
};

export const ENGetFaculties = () => async (dispatch: any) => {
    const faculties = await getFacultiesList({ mode: 'simple' });

    if (faculties) {
        dispatch(
            ENSetFaculties(
                faculties.map((faculty): any => {
                    return { name: faculty.depName, id: faculty.departmentUuid };
                })
            )
        );
    } else {
        dispatch(ENGetFaculties);
    }
};
