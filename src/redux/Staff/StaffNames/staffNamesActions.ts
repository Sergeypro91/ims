import { getDepartmentsList } from 'api/staff/departments/departments.api';
import { getEmployeesList } from 'api/staff/employees/employees.api';
import { getOrganizationsList } from 'api/staff/organizations/organizations.api';
import { getPositionsList } from 'api/staff/positions/positions.api';
import { Dispatch } from 'react';
import {
    StaffNamesActions,
    SN_SET_ORGANIZATIONS,
    SN_SET_DEPARTMENTS,
    SN_SET_POSITIONS,
    SN_SET_EMPLOYEES
} from './staffNamesTypes';

export const SNSetOrganizations = (
    organizations: Array<{
        [key: string]: string;
    }>
): StaffNamesActions => ({
    type: SN_SET_ORGANIZATIONS,
    payload: organizations
});

export const SNSetDepartments = (
    departments: Array<{
        [key: string]: string;
    }>
): StaffNamesActions => ({
    type: SN_SET_DEPARTMENTS,
    payload: departments
});

export const SNSetPositions = (
    positions: Array<{
        [key: string]: string;
    }>
): StaffNamesActions => ({
    type: SN_SET_POSITIONS,
    payload: positions
});

export const SNSetEmployees = (
    employees: Array<{
        [key: string]: string;
    }>
): StaffNamesActions => ({
    type: SN_SET_EMPLOYEES,
    payload: employees
});

export const SNGetOrganizations = () => async (dispatch: Dispatch<any>) => {
    const organizations = await getOrganizationsList({ mode: 'simple' });

    if (organizations) {
        dispatch(
            SNSetOrganizations(
                organizations.map((organization): any => {
                    return { name: organization.shortName, id: organization.organizationUuid };
                })
            )
        );
    } else {
        dispatch(SNGetOrganizations());
    }
};

export const SNGetDepartments = () => async (dispatch: any) => {
    const departments = await getDepartmentsList({ mode: 'simple' });

    if (departments) {
        dispatch(
            SNSetDepartments(
                departments.map((department): any => {
                    return { name: department.depName, id: department.departmentUuid };
                })
            )
        );
    } else {
        dispatch(SNGetDepartments());
    }
};

export const SNGetPositions = () => async (dispatch: any) => {
    const positions = await getPositionsList({ mode: 'simple' });

    if (positions) {
        dispatch(
            SNSetPositions(
                positions.map((position): any => {
                    return { name: position.posName, id: position.positionUuid };
                })
            )
        );
    } else {
        dispatch(SNGetPositions());
    }
};

export const SNGetEmployees = () => async (dispatch: any) => {
    const employees = await getEmployeesList({ mode: 'simple' });

    if (employees) {
        dispatch(
            SNSetEmployees(
                employees.map((employee): any => {
                    return { name: employee.physpersonName, id: employee.physpersonUuid };
                })
            )
        );
    } else {
        dispatch(SNGetEmployees);
    }
};
