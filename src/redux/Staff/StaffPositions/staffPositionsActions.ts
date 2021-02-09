import { addPosition, deletePosition, getPositionsList, editPosition } from 'api/staff/positions/positions.api';
import { AddPositionParams, Position, PositionsList, EditPositionParams } from 'api/staff/positions/positions.types';
import restorePosition from 'api/staff/positions/restore/restorePosition';
import { Dispatch } from 'react';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions, IAddToast } from 'redux/App/appTypes';
import {
    StaffPositionsPageActions,
    SP_SET_POSITIONS,
    SP_SET_SELECTED_ROW,
    SP_TOGGLE_IS_SIDEBAR_OPENED,
    SP_TOGGLE_IS_FILTER_OPENED,
    SP_TOGGLE_IS_QUICK_FILTER_ACTIVE,
    SP_TOGGLE_IS_DELETED_DISPLAYED
} from './staffPositionsTypes';

export const SPSetPositions = (positions: PositionsList): StaffPositionsPageActions => ({
    type: SP_SET_POSITIONS,
    payload: positions
});

export const SPSetSelectedRow = (row: Position | null): StaffPositionsPageActions => ({
    type: SP_SET_SELECTED_ROW,
    payload: row
});

export const SPToggleIsSidebarOpened = (): StaffPositionsPageActions => ({
    type: SP_TOGGLE_IS_SIDEBAR_OPENED
});

export const SPToggleIsFilterOpened = (): StaffPositionsPageActions => ({
    type: SP_TOGGLE_IS_FILTER_OPENED
});

export const SPToggleIsQuickFilterActive = (): StaffPositionsPageActions => ({
    type: SP_TOGGLE_IS_QUICK_FILTER_ACTIVE
});

export const SPToggleIsDeletedDisplayed = (): StaffPositionsPageActions => ({
    type: SP_TOGGLE_IS_DELETED_DISPLAYED
});

export const SPGetPositions = () => async (dispatch: Dispatch<StaffPositionsPageActions | AppActions>) => {
    const positions = await getPositionsList({ mode: 'simple' });
    let resultToast: IAddToast;

    if (positions) {
        dispatch(SPSetPositions(positions));
        resultToast = {
            type: 'success',
            message: `Список должностей успешно получен`
        };
    } else {
        resultToast = {
            type: 'error',
            message: 'Не удалось получить список должностей'
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SPAddPosition = (params: AddPositionParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    console.log(params);

    if (!params.posName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование должности`
        };
    } else if (!params.orgUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите организацию`
        };
    } else {
        const status = await addPosition(params);

        if (status.successful) {
            resultToast = {
                type: 'success',
                message: `Должность ${params.posName} успешно добавлена`
            };

            dispatch(SPGetPositions());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось добавить должность ${params.posName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SPEditPosition = (params: EditPositionParams, successCallback: () => void) => async (dispatch: Dispatch<any>) => {
    let resultToast: IAddToast;

    if (!params.posName) {
        resultToast = {
            type: 'error',
            message: `Укажите наименование должности`
        };
    } else if (!params.orgUuid) {
        resultToast = {
            type: 'error',
            message: `Укажите организацию`
        };
    } else {
        const status = await editPosition(params);

        if (status.successful) {
            resultToast = {
                type: 'success',
                message: `Должность ${params.posName} успешно изменена`
            };

            dispatch(SPGetPositions());
            successCallback();
        } else {
            resultToast = {
                type: 'error',
                message: `Не удалось изменить должность ${params.posName}`
            };
        }
    }

    dispatch(appToastAdd(resultToast));
};

export const SPDeletePosition = (positionUuid: string, positionName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyDeleted = await deletePosition(positionUuid);
    let resultToast: IAddToast;

    if (successfullyDeleted) {
        resultToast = {
            type: 'success',
            message: `Должность ${positionName} успешно удалена`
        };

        dispatch(SPGetPositions());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось удалить должность ${positionName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};

export const SPRestorePosition = (positionUuid: string, positionName: string, successCallback: () => void) => async (
    dispatch: Dispatch<any>
) => {
    const successfullyRestored = await restorePosition(positionUuid);
    let resultToast: IAddToast;

    if (successfullyRestored) {
        resultToast = {
            type: 'success',
            message: `Должность ${positionName} успешно восстановлена`
        };

        dispatch(SPGetPositions());
        successCallback();
    } else {
        resultToast = {
            type: 'error',
            message: `Не удалось восстановить должность ${positionName}`
        };
    }

    dispatch(appToastAdd(resultToast));
};
