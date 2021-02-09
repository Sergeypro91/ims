import { addDepartment, deleteDepartment, getDepartmentsList, editDepartment } from 'api/staff/departments/departments.api';
import { AddDepartmentParams, Department, DepartmentsList, EditDepartmentParams } from 'api/staff/departments/departments.types';
import restoreDepartment from 'api/staff/departments/restore/restoreDepartment';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    StaffDepartmentsPageActions,
    SD_SET_DEPARTMENTS,
    SD_SET_SELECTED_ROW,
    SD_TOGGLE_IS_SIDEBAR_OPENED,
    SD_TOGGLE_IS_FILTER_OPENED,
    SD_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SD_TOGGLE_IS_DELETED_DISPLAYED
} from './staffDepartmentsTypes';

export const SDSetDepartments = (departments: DepartmentsList): StaffDepartmentsPageActions => ({
    type: SD_SET_DEPARTMENTS,
    payload: departments
});

export const SDSetSelectedRow = (row: Department | null): StaffDepartmentsPageActions => ({
    type: SD_SET_SELECTED_ROW,
    payload: row
});

export const SDToggleIsSidebarOpened = (): StaffDepartmentsPageActions => ({
    type: SD_TOGGLE_IS_SIDEBAR_OPENED
});

export const SDToggleIsFilterOpened = (): StaffDepartmentsPageActions => ({
    type: SD_TOGGLE_IS_FILTER_OPENED
});

export const SDToggleIsQuickFilterActive = (): StaffDepartmentsPageActions => ({
    type: SD_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const SDToggleIsDeletedDisplayed = (): StaffDepartmentsPageActions => ({
    type: SD_TOGGLE_IS_DELETED_DISPLAYED
});

export const SDGetDepartments = () => async (dispatch: Dispatch<StaffDepartmentsPageActions | AppActions>) => {
    const departments = await getDepartmentsList({ mode: 'simple' });
    let resultToast: IAddToast;

    console.log('Rerender');

    if (departments) {
        dispatch(SDSetDepartments(departments));
        resultToast = {
            type: 'success',
            message: `Список подразделений успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список подразделений'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SDAddDepartment = (params: AddDepartmentParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование подразделения`
        };
    } else if (!params.organizationUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите организацию`
        };
    } else if (!params.chiefPersonUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите руководителя подразделения`
        };
    } else {
        const successfullyAdded = await addDepartment(params);

        if (successfullyAdded) {
            resultToast = {
                type: 'success',
                message: `Подразделение ${params.depName} успешно добавлено`
            };

            dispatch(SDGetDepartments());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить подразделение ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SDEditDepartment = (params: EditDepartmentParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование подразделения`
        };
    } else if (!params.organizationUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите организацию`
        };
    } else if (!params.chiefPersonUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите руководителя подразделения`
        };
    } else {
        const successfullyEdited = await editDepartment(params);

        if (successfullyEdited) {
            resultToast = {
                type: 'success',
                message: `Подразделение ${params.depName} успешно изменено`
            };

            dispatch(SDGetDepartments());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить подразделение ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SDDeleteDepartment = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Подразделение ${departmentName} успешно удалено`
        };

        dispatch(SDGetDepartments());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить подразделение ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SDRestoreDepartment = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Подразделение ${departmentName} успешно восстановлено`
        };

        dispatch(SDGetDepartments());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить подразделение ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
