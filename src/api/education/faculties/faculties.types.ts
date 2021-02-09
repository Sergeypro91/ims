import { Department } from 'api/staff/departments/departments.types';

export type FacultiesList = Array<Faculty>;

export interface Faculty extends Department {
    instituteName: string;
    instituteUuid: string;
}

export interface AddFacultyParams {
    depName: string;
    parentDepartmentUuid: string;
    chiefPersonUuid?: string;
}

export interface EditFacultyParams extends AddFacultyParams {
    departmentUuid: string;
}
