import { Department } from 'api/staff/departments/departments.types';

export type EducationDepartmentsList = Array<EducationDepartment>;

export interface EducationDepartment extends Department {
    instituteName: string;
    instituteUuid: string;
    facultyName: string;
    facultyUuid: string;
}

export interface AddEducationDepartmentParams {
    depName: string;
    parentDepartmentUuid: string;
    chiefPersonUuid?: string;
}

export interface EditEducationDepartmentParams extends AddEducationDepartmentParams {
    departmentUuid: string;
}
