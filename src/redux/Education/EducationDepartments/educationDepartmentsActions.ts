import { addEducationDepartment, editEducationDepartment, getEducationDepartmentsList } from 'api/education/departments/departments.api';
import {
    AddEducationDepartmentParams,
    EditEducationDepartmentParams,
    EducationDepartment,
    EducationDepartmentsList
} from 'api/education/departments/departments.types';
import { deleteDepartment } from 'api/staff/departments/departments.api';
import restoreDepartment from 'api/staff/departments/restore/restoreDepartment';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    EducationDepartmentsPageActions,
    ED_SET_DEPARTMENTS,
    ED_SET_SELECTED_ROW,
    ED_TOGGLE_IS_SIDEBAR_OPENED,
    ED_TOGGLE_IS_FILTER_OPENED,
    ED_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    ED_TOGGLE_IS_DELETED_DISPLAYED
} from './educationDepartmentsTypes';

export const EDSetDepartments = (departments: EducationDepartmentsList): EducationDepartmentsPageActions => ({
    type: ED_SET_DEPARTMENTS,
    payload: departments
});

export const EDSetSelectedRow = (row: EducationDepartment | null): EducationDepartmentsPageActions => ({
    type: ED_SET_SELECTED_ROW,
    payload: row
});

export const EDToggleIsSidebarOpened = (): EducationDepartmentsPageActions => ({
    type: ED_TOGGLE_IS_SIDEBAR_OPENED
});

export const EDToggleIsFilterOpened = (): EducationDepartmentsPageActions => ({
    type: ED_TOGGLE_IS_FILTER_OPENED
});

export const EDToggleIsQuickFilterActive = (): EducationDepartmentsPageActions => ({
    type: ED_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const EDToggleIsDeletedDisplayed = (): EducationDepartmentsPageActions => ({
    type: ED_TOGGLE_IS_DELETED_DISPLAYED
});

export const EDGetDepartments = () => async (dispatch: Dispatch<EducationDepartmentsPageActions | AppActions>) => {
    const departments = await getEducationDepartmentsList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (departments) {
        dispatch(EDSetDepartments(departments));
        resultToast = {
            type: 'success',
            message: `Список кафедр успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список кафедр'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EDAddDepartment = (params: AddEducationDepartmentParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование кафедры`
        };
    } else {
        const successfullyAdded = await addEducationDepartment(params);

        if (successfullyAdded) {
            resultToast = {
                type: 'success',
                message: `Кафедра ${params.depName} успешно добавлена`
            };

            dispatch(EDGetDepartments());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить кафедру ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EDEditDepartment = (params: EditEducationDepartmentParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование кафедры`
        };
    } else {
        const successfullyEdited = await editEducationDepartment(params);

        if (successfullyEdited) {
            resultToast = {
                type: 'success',
                message: `Кафедра ${params.depName} успешно изменена`
            };

            dispatch(EDGetDepartments());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить кафедру ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EDDeleteDepartment = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Кафедра ${departmentName} успешно удалена`
        };

        dispatch(EDGetDepartments());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить кафедру ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EDRestoreDepartment = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Кафедра ${departmentName} успешно восстановлена`
        };

        dispatch(EDGetDepartments());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить кафедру ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
