export interface StaffNamesState {
    organizations: Array<{
        [key: string]: string;
    }>;
    departments: Array<{
        [key: string]: string;
    }>;
    positions: Array<{
        [key: string]: string;
    }>;
    employees: Array<{
        [key: string]: string;
    }>;
}

export const SN_SET_ORGANIZATIONS = 'SN_SET_ORGANIZATIONS';
export const SN_SET_DEPARTMENTS = 'SN_SET_DEPARTMENTS';
export const SN_SET_POSITIONS = 'SN_SET_POSITIONS';
export const SN_SET_EMPLOYEES = 'SN_SET_EMPLOYEES';

interface SNSetOrganizations {
    type: typeof SN_SET_ORGANIZATIONS;
    payload: Array<{
        [key: string]: string;
    }>;
}

interface SNSetDepartments {
    type: typeof SN_SET_DEPARTMENTS;
    payload: Array<{
        [key: string]: string;
    }>;
}

interface SNSetPositions {
    type: typeof SN_SET_POSITIONS;
    payload: Array<{
        [key: string]: string;
    }>;
}

interface SNSetEmployees {
    type: typeof SN_SET_EMPLOYEES;
    payload: Array<{
        [key: string]: string;
    }>;
}

export type StaffNamesActions = SNSetOrganizations | SNSetDepartments | SNSetPositions | SNSetEmployees;
