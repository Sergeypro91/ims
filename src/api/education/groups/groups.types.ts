import { Department } from 'api/staff/departments/departments.types';

export type GroupsList = Array<Group>;

export interface Group extends Department {
    instituteName: string;
    instituteUuid: string;
    facultyName: string;
    facultyUuid: string;
    tribuneName: string;
    tribuneUuid: string;
}

export interface AddGroupParams {
    depName: string;
    parentDepartmentUuid: string;
    chiefPersonUuid?: string;
}

export interface EditGroupParams extends AddGroupParams {
    departmentUuid: string;
}
