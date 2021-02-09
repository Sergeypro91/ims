import { EditFacultyParams } from 'api/education/faculties/faculties.types';
import { addGroup, editGroup, getGroupsList } from 'api/education/groups/groups.api';
import { AddGroupParams, Group, GroupsList } from 'api/education/groups/groups.types';
import { deleteDepartment } from 'api/staff/departments/departments.api';
import restoreDepartment from 'api/staff/departments/restore/restoreDepartment';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    EducationGroupsPageActions,
    EG_SET_GROUPS,
    EG_SET_SELECTED_ROW,
    EG_TOGGLE_IS_SIDEBAR_OPENED,
    EG_TOGGLE_IS_FILTER_OPENED,
    EG_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    EG_TOGGLE_IS_DELETED_DISPLAYED
} from './educationGroupsTypes';

export const EGSetGroups = (groups: GroupsList): EducationGroupsPageActions => ({
    type: EG_SET_GROUPS,
    payload: groups
});

export const EGSetSelectedRow = (row: Group | null): EducationGroupsPageActions => ({
    type: EG_SET_SELECTED_ROW,
    payload: row
});

export const EGToggleIsSidebarOpened = (): EducationGroupsPageActions => ({
    type: EG_TOGGLE_IS_SIDEBAR_OPENED
});

export const EGToggleIsFilterOpened = (): EducationGroupsPageActions => ({
    type: EG_TOGGLE_IS_FILTER_OPENED
});

export const EGToggleIsQuickFilterActive = (): EducationGroupsPageActions => ({
    type: EG_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const EGToggleIsDeletedDisplayed = (): EducationGroupsPageActions => ({
    type: EG_TOGGLE_IS_DELETED_DISPLAYED
});

export const EGGetGroups = () => async (dispatch: Dispatch<EducationGroupsPageActions | AppActions>) => {
    const groups = await getGroupsList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (groups) {
        dispatch(EGSetGroups(groups));
        resultToast = {
            type: 'success',
            message: `Список групп успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список групп'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EGAddGroup = (params: AddGroupParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование группы`
        };
    } else {
        const successfullyAdded = await addGroup(params);

        if (successfullyAdded) {
            resultToast = {
                type: 'success',
                message: `Группа ${params.depName} успешно добавлена`
            };

            dispatch(EGGetGroups());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить группу ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EGEditGroup = (params: EditFacultyParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.depName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование группы`
        };
    } else {
        const successfullyEdited = await editGroup(params);

        if (successfullyEdited) {
            resultToast = {
                type: 'success',
                message: `Группа ${params.depName} успешно изменена`
            };

            dispatch(EGGetGroups());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить группу ${params.depName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const EGDeleteGroup = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Группа ${departmentName} успешно удалена`
        };

        dispatch(EGGetGroups());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить группу ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const EGRestoreGroup = (departmentUuid: string, departmentName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreDepartment(departmentUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Группа ${departmentName} успешно восстановлена`
        };

        dispatch(EGGetGroups());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить группу ${departmentName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
