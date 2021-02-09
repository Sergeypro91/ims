import axios from 'axios';
import { Dispatch } from 'react';
import store from 'redux/store';
import {
    Parameters,
    SettingsParametersActions,
    UPDATE_SETTINGS_PARAMETERS_CHANGE,
    SETTINGS_PARAMETERS_COPY
} from './settingsParametersTypes';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions } from 'redux/App/appTypes';

export const updateSettingsParameters = (parameters: Parameters): SettingsParametersActions => ({
    type: UPDATE_SETTINGS_PARAMETERS_CHANGE,
    payload: parameters
});

export const copySettingsParameters = (copyParam: Parameters): SettingsParametersActions => ({
    type: SETTINGS_PARAMETERS_COPY,
    payload: copyParam
});

export const requestSettingsParameters = () => (dispatch: Dispatch<SettingsParametersActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/params`)
        .then((response) => {
            dispatch(updateSettingsParameters(JSON.parse(response.data.content)));
            dispatch(copySettingsParameters(JSON.parse(response.data.content)));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const setSettingsParams = (parameters: Parameters) => (
    dispatch: Dispatch<SettingsParametersActions | AppActions | Dispatch<any>>
) => {
    axios
        .post(`${store.getState().app.config.apiUrl}/params`, parameters)
        .then((response) => {
            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: 'Параметры успешно сохранены.'
                };

                dispatch(requestSettingsParameters());
                dispatch(appToastAdd(toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: 'Сохранить параметры не удалось.'
                };

                dispatch(appToastAdd(toast));
            }
        })

        .catch((error) => {
            console.log(error);
        });
};
