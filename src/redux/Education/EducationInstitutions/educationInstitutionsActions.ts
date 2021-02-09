import { addInstitute, editInstitute, getInstitutionsList } from 'api/education/institutions/institutions.api';
import { AddInstituteParams, EditInstituteParams, Institute, InstitutionsList } from 'api/education/institutions/institutions.types';
import { deleteDepartment } from 'api/staff/departments/departments.api';
import restoreDepartment from 'api/staff/departments/restore/restoreDepartment';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    EducationInstitutionsPageActions,
    EI_SET_INSTITUTIONS,
    EI_SET_SELECTED_ROW,
    EI_TOGGLE_IS_SIDEBAR_OPENED,
    EI_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    EI_TOGGLE_IS_DELETED_DISPLAYED
} from './educationInstitutionsTypes';

export const EISetInstitutions = (institutions: InstitutionsList): EducationInstitutionsPageActions => ({
    type: EI_SET_INSTITUTIONS,
    payload: institutions
});

export const EISetSelectedRow = (row: Institute | null): EducationInstitutionsPageActions => ({
    type: EI_SET_SELECTED_ROW,
    payload: row
});

export const EIToggleIsSidebarOpened = (): EducationInstitutionsPageActions => ({
    type: EI_TOGGLE_IS_SIDEBAR_OPENED
});

export const EIToggleIsQuickFilterActive = (): EducationInstitutionsPageActions => ({
    type: EI_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const EIToggleIsDeletedDisplayed = (): EducationInstitutionsPageActions => ({
    type: EI_TOGGLE_IS_DELETED_DISPLAYED
});

export const EIGetInstitutions = () => async (dispatch: Dispatch<EducationInstitutionsPageActions | AppActions>) => {
    const institutions = await getInstitutionsList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (institutions) {
        dispatch(EISetInstitutions(institutions));
        resultToast = {
            type: 'success',
            message: `Список институтов успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список институтов'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EIAddInstitute = (params: AddInstituteParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование института`
        };
    } else {
        const successfullyAdded = await addInstitute(params);

        if (successfullyAdded) {
            resultToast = {
                type: 'success',
                message: `Институт ${params.depName} успешно добавлена`
            };

            dispatch(EIGetInstitutions());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить институт ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EIEditInstitute = (params: EditInstituteParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование института`
        };
    } else {
        const successfullyEdited = await editInstitute(params);

        if (successfullyEdited) {
            resultToast = {
                type: 'success',
                message: `Институт ${params.depName} успешно изменен`
            };

            dispatch(EIGetInstitutions());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить институт ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EIDeleteInstitute = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Институт ${departmentName} успешно удален`
        };

        dispatch(EIGetInstitutions());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить институт ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EIRestoreInstitute = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Институт ${departmentName} успешно восстановлен`
        };

        dispatch(EIGetInstitutions());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить институт ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
