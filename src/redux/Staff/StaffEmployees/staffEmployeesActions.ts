import {
    addEmployee,
    addEmployeePhoto,
    deleteEmployee,
    deleteEmployeePhoto,
    editEmployee,
    getEmployee,
    getEmployeesList,
    getNewEmployeeNumber,
    restoreEmployee
} from 'api/staff/employees/employees.api';
import {
    AddEmployeeParams,
    AddEmployeePhotoParams,
    EditEmployeeParams,
    Employee,
    EmployeesList,
    ExtendedEmployee
} from 'api/staff/employees/employees.types';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    StaffEmployeesPageActions,
    SE_SET_EMPLOYEES,
    SE_SET_EXTENDED_EMPLOYEE,
    SE_SET_SELECTED_ROW,
    SE_TOGGLE_IS_SIDEBAR_OPENED,
    SE_TOGGLE_IS_FILTER_OPENED,
    SE_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SE_TOGGLE_IS_DELETED_DISPLAYED
} from './staffEmployeesTypes';

export const SESetEmployees = (employees: EmployeesList): StaffEmployeesPageActions => ({
    type: SE_SET_EMPLOYEES,
    payload: employees
});

export const SESetExtendedEmployee = (extendedEmployee: ExtendedEmployee): StaffEmployeesPageActions => ({
    type: SE_SET_EXTENDED_EMPLOYEE,
    payload: extendedEmployee
});

export const SESetSelectedRow = (row: Employee | null): StaffEmployeesPageActions => ({
    type: SE_SET_SELECTED_ROW,
    payload: row
});

export const SEToggleIsSidebarOpened = (): StaffEmployeesPageActions => ({
    type: SE_TOGGLE_IS_SIDEBAR_OPENED
});

export const SEToggleIsFilterOpened = (): StaffEmployeesPageActions => ({
    type: SE_TOGGLE_IS_FILTER_OPENED
});

export const SEToggleIsQuickFilterActive = (): StaffEmployeesPageActions => ({
    type: SE_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const SEToggleIsDeletedDisplayed = (): StaffEmployeesPageActions => ({
    type: SE_TOGGLE_IS_DELETED_DISPLAYED
});

export const SEGetEmployees = () => async (dispatch: Dispatch<StaffEmployeesPageActions | AppActions>) => {
    const employees = await getEmployeesList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (employees) {
        dispatch(SESetEmployees(employees));
        resultToast = {
            type: 'success',
            message: `Список сотрудников успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список сотрудников'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SEGetNewEmployeeNumber = (callback: (employeeNumber: string) => void) => async (
    dispatch: Dispatch<StaffEmployeesPageActions | AppActions>
) => {
    const number = await getNewEmployeeNumber();

    if (number) {
        callback(number);
    }
};

export const SEGetExtendedEmployee = (uuid: string) => async (dispatch: Dispatch<StaffEmployeesPageActions | AppActions>) => {
    const extendedEmployee = await getEmployee(uuid);
    let resultToast: IAddToast;

    if (extendedEmployee) {
        dispatch(SESetExtendedEmployee(extendedEmployee));
        resultToast = {
            type: 'success',
            message: `Данные сотрудника успешно получены`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить данные по сотруднику'
        };
    }
    
    dispatch(appToastAdd(resultToast));
};

export const SEAddEmployee = (params: AddEmployeeParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.lastName) {
        resultToast = {
            type: 'error',
            message: `Укажите фамилию`
        };
    } else if (!params.organizationUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите организацию`
        };
    } else if (!params.departmentUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите подразделение`
        };
    } else if (!params.positionUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите должность`
        };
    } else {
        const status = await addEmployee(params);

        if (status.successful) {
            resultToast = {
                type: 'success',
                message: `Сотрудник ${params.lastName} успешно добавлен`
            };

            dispatch(SEGetEmployees());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить сотрудника ${params.lastName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SEAddEmployeePhoto = (params: AddEmployeePhotoParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    const successfullyAdded = await addEmployeePhoto(params);

    if (successfullyAdded) {
        resultToast = {
            type: 'success',
            message: `Фото сотруднику успешно добавлено`
        };

        dispatch(SEGetEmployees());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось добавить фото сотрудника`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SEEditEmployee = (params: EditEmployeeParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.lastName) {
        resultToast = {
            type: 'error',
            message: `Укажите фамилию`
        };
    } else if (!params.organizationUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите организацию`
        };
    } else if (!params.departmentUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите подразделение`
        };
    } else if (!params.positionUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите должность`
        };
    } else {
        const status = await editEmployee(params);

        if (status.successful) {
            resultToast = {
                type: 'success',
                message: `Сотрудник ${params.lastName} успешно изменен`
            };

            dispatch(SEGetEmployees());
            dispatch(SEGetExtendedEmployee(params.employeeUuid));
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить сотрудника ${params.lastName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SEDeleteEmployee = (employeeUuid: string, employeeName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteEmployee(employeeUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Сотрудник ${employeeName} успешно уволен`
        };

        dispatch(SEGetEmployees());
        dispatch(SEGetExtendedEmployee(employeeUuid));
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось уволить сотрудника ${employeeName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SEDeleteEmployeePhoto = (employeeUuid: string, empUuid: string, employeeName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteEmployeePhoto(employeeUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Фото сотрудника ${employeeName} успешно удалено`
        };

        dispatch(SEGetEmployees());
        dispatch(SEGetExtendedEmployee(empUuid));
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить фото сотрудника ${employeeName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SERestoreEmployee = (employeeUuid: string, employeeName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreEmployee(employeeUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Сотрудник ${employeeName} успешно восстановлен`
        };

        dispatch(SEGetEmployees());
        dispatch(SEGetExtendedEmployee(employeeUuid));
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить сотрудника ${employeeName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
