import { addOrganization, deleteOrganization, getOrganizationsList, editOrganization } from 'api/staff/organizations/organizations.api';
import { AddOrganizationParams, Organization, OrganizationsList, EditOrganiationParams } from 'api/staff/organizations/organizations.types';
import restoreOrganization from 'api/staff/organizations/restore/restoreOrganization';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    StaffOrganizationsPageActions,
    SO_SET_ORGANIZATIONS,
    SO_SET_SELECTED_ROW,
    SO_TOGGLE_IS_SIDEBAR_OPENED,
    SO_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SO_TOGGLE_IS_DELETED_DISPLAYED
} from './staffOrganizationsTypes';

export const SOSetOrganizations = (organizations: OrganizationsList): StaffOrganizationsPageActions => ({
    type: SO_SET_ORGANIZATIONS,
    payload: organizations
});

export const SOSetSelectedRow = (row: Organization | null): StaffOrganizationsPageActions => ({
    type: SO_SET_SELECTED_ROW,
    payload: row
});

export const SOToggleIsSidebarOpened = (): StaffOrganizationsPageActions => ({
    type: SO_TOGGLE_IS_SIDEBAR_OPENED
});

export const SOToggleIsQuickFilterActive = (): StaffOrganizationsPageActions => ({
    type: SO_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const SOToggleIsDeletedDisplayed = (): StaffOrganizationsPageActions => ({
    type: SO_TOGGLE_IS_DELETED_DISPLAYED
});

export const SOGetOrganizations = (successCallback?: () => void) => async (
    dispatch: Dispatch<StaffOrganizationsPageActions | AppActions>
) => {
    const organizations = await getOrganizationsList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (organizations) {
        dispatch(SOSetOrganizations(organizations));
        resultToast = {
            type: 'success',
            message: `Список организаций успешно получен`
        };

        if (successCallback) successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список организаций'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SOAddOrganization = (params: AddOrganizationParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.shortName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование организации`
        };
    } else if (!params.legalName) {
        resultToast = {
            type: 'error',
            message: `Укажите полное наименование`
        };
    } else if (!params.inn) {
        resultToast = {
            type: 'error',
            message: `Укажите ИНН`
        };
    } else if (!params.legalAddress) {
        resultToast = {
            type: 'error',
            message: `Укажите юридический адрес`
        };
    } else if (!params.phoneNumber) {
        resultToast = {
            type: 'error',
            message: `Укажите контактный телефон`
        };
    } else {
        const status = await addOrganization(params);

        if (status.successful) {
            resultToast = {
                type: 'success',
                message: `Организация ${params.shortName} успешно добавлена`
            };

            dispatch(SOGetOrganizations());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить организацию ${params.shortName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SOEditOrganization = (params: EditOrganiationParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.shortName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование организации`
        };
    } else if (!params.legalName) {
        resultToast = {
            type: 'error',
            message: `Укажите полное наименование`
        };
    } else if (!params.inn) {
        resultToast = {
            type: 'error',
            message: `Укажите ИНН`
        };
    } else if (!params.legalAddress) {
        resultToast = {
            type: 'error',
            message: `Укажите юридический адрес`
        };
    } else if (!params.phoneNumber) {
        resultToast = {
            type: 'error',
            message: `Укажите контактный телефон`
        };
    } else {
        const status = await editOrganization(params);

        if (status.successful) {
            resultToast = {
                type: 'success',
                message: `Организация ${params.shortName} успешно изменена`
            };

            dispatch(SOGetOrganizations());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить организацию ${params.shortName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SODeleteOrganization = (organizationUuid: string, organizationName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deleteOrganization(organizationUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Организация ${organizationName} успешно удалена`
        };

        dispatch(SOGetOrganizations());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить организацию ${organizationName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SORestoreOrganization = (organizationUuid: string, organizationName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restoreOrganization(organizationUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Организация ${organizationName} успешно восстановлена`
        };

        dispatch(SOGetOrganizations());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить организацию ${organizationName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
