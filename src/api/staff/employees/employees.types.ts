export type EmployeesList = Array<Employee>;

export interface Employee {
    employeeUuid: string;
    empId: string;
    physpersonUuid: string;
    physpersonName: string;
    organizationUuid: string;
    organizationName: string;
    employmentDate: string;
    dismissedDate: string;
    departmentUuid: string;
    departmentName: string;
    positionUuid: string;
    positionName: string;
    dismissed: number;
    dismissedStr: string;
    deleted: number;
    deletedStr: string;
}

export interface ExtendedEmployee {
    employeeUuid: string;
    empId: string;
    physpersonUuid: string;
    physpersonName: string;
    phone: string;
    email: string;
    chiefEmployeeUuid: string;
    chiefEmployeeName: string;
    organizationUuid: string;
    organizationName: string;
    employmentDate: string;
    dismissedDate: string;
    departmentUuid: string;
    departmentName: string;
    positionUuid: string;
    positionName: string;
    dismissed: number;
    dismissedStr: string;
    deleted: number;
    deletedStr: string;
    creationDate: string;
    userCreated: string;
    externalId: string;
    extensionPhone: string;
    corporateEmail: string;
    lastName: string;
    firstName: string;
    middleName: string;
    gender: number;
    genderStr: string;
    photoCompressed: string;
}

export interface AddEmployeeParams {
    /** табельный номер */
    empId?: string;
    phone?: string;
    email?: string;
    corporateEmail?: string;
    organizationUuid?: string;
    employmentDate?: string;
    dismissedDate?: any;
    departmentUuid?: string;
    positionUuid?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    birthDay?: string;
    inn?: string;
    extensionPhone?: string;
    passportSeries?: string;
    passportNumber?: string;
    gender?: number;
    photoCompressed?: string;
}

export interface AddEmployeePhotoParams {
    physpersonUuid: string;
    isMain: 1;
    photoCompressed: string;
}

export interface EditEmployeeParams extends AddEmployeeParams {
    employeeUuid: string;
    physpersonUuid: string;
}
