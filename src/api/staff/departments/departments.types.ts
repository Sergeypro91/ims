/**
 * Departments list
 */
export type DepartmentsList = Array<Department>;

/**
 * Department
 */
export interface Department {
    departmentUuid: string;
    level: number;
    deptType: number;
    deptTypeStr: string;
    depIdPers: string;
    depIdStruct: string;
    depName: string;
    emplCount: number;
    totalEmplCount: number;
    organizationUuid: string;
    orgName: string;
    parentDepartmentUuid: string;
    parentDepartmentName: string;
    chiefPersonUuid: string;
    chiefPersonName: string;
    isWorkCenter: number;
    isWorkCenterStr: string;
    qualityCheck: number;
    qualityCheckStr: string;
    whseCheck: number;
    whseCheck_str: string;
    deleted: number;
    deleted_str: string;
    creationDate: string;
    userCreated: string;
    externalId: string;
    depGuidPers: string;
    depGuidStruct: string;
    depTypeId: number;
    depTypeName: string;
}

/**
 * Add department params
 */
export interface AddDepartmentParams {
    depName: string;
    organizationUuid?: string;
    parentDepartmentUuid?: string;
    chiefPersonUuid?: string;
}

/**
 * Edit department params
 */
export interface EditDepartmentParams extends AddDepartmentParams {
    departmentUuid: string;
}
