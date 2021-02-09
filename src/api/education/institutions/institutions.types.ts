import { Department } from 'api/staff/departments/departments.types';

export type InstitutionsList = Array<Institute>;

export type Institute = Department;

export interface AddInstituteParams {
    depName?: string;
    parentDepartmentUuid?: string;
    chiefPersonUuid?: string;
}

export interface EditInstituteParams extends AddInstituteParams {
    departmentUuid: string;
}
