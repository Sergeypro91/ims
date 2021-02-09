import { addFaculty, editFaculty, getFacultiesList } from 'api/education/faculties/faculties.api';
import { AddFacultyParams, EditFacultyParams, FacultiesList, Faculty } from 'api/education/faculties/faculties.types';
import { deleteDepartment } from 'api/staff/departments/departments.api';
import restoreDepartment from 'api/staff/departments/restore/restoreDepartment';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    EducationFacultiesPageActions,
    EF_SET_FACULTIES,
    EF_SET_SELECTED_ROW,
    EF_TOGGLE_IS_SIDEBAR_OPENED,
    EF_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    EF_TOGGLE_IS_DELETED_DISPLAYED
} from './educationFacultiesTypes';

export const EFSetFaculties = (faculties: FacultiesList): EducationFacultiesPageActions => ({
    type: EF_SET_FACULTIES,
    payload: faculties
});

export const EFSetSelectedRow = (row: Faculty | null): EducationFacultiesPageActions => ({
    type: EF_SET_SELECTED_ROW,
    payload: row
});

export const EFToggleIsSidebarOpened = (): EducationFacultiesPageActions => ({
    type: EF_TOGGLE_IS_SIDEBAR_OPENED
});

export const EFToggleIsQuickFilterActive = (): EducationFacultiesPageActions => ({
    type: EF_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const EFToggleIsDeletedDisplayed = (): EducationFacultiesPageActions => ({
    type: EF_TOGGLE_IS_DELETED_DISPLAYED
});

export const EFGetFaculties = () => async (dispatch: Dispatch<EducationFacultiesPageActions | AppActions>) => {
    const faculties = await getFacultiesList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (faculties) {
        dispatch(EFSetFaculties(faculties));
        resultToast = {
            type: 'success',
            message: `Список факультетов успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список факультетов'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EFAddFaculty = (params: AddFacultyParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование факультета`
        };
    } else {
        const successfullyAdded = await addFaculty(params);

        if (successfullyAdded) {
            resultToast = {
                type: 'success',
                message: `Факультет ${params.depName} успешно добавлен`
            };

            dispatch(EFGetFaculties());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить факультет ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EFEditFaculty = (params: EditFacultyParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование факультета`
        };
    } else {
        const successfullyEdited = await editFaculty(params);

        if (successfullyEdited) {
            resultToast = {
                type: 'success',
                message: `Факультет ${params.depName} успешно изменен`
            };

            dispatch(EFGetFaculties());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить факультет ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EFDeleteFaculty = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Факультет ${departmentName} успешно удален`
        };

        dispatch(EFGetFaculties());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить факультет ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EFRestoreFaculty = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Факультет ${departmentName} успешно восстановлен`
        };

        dispatch(EFGetFaculties());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить факультет ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
