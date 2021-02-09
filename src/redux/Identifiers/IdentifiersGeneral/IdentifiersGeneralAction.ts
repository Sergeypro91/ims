import axios from 'axios';
import { Dispatch } from 'react';
import store from 'redux/store';
import { appToastAdd } from 'redux/App/appActions';
import { AppActions } from 'redux/App/appTypes';
import {
    IdentifiersActions,
    AccesPatterns,
    Newdentifiers,
    IDENTIFIERS_GENERAL_TYPE,
    IDENTIFIERS_GENERAL_ACCES_PATERNS,
    IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS,
    IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON,
    IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON,
    IDENTIFIERS_GENERAL_LIMIT_TIME_FROM,
    IDENTIFIERS_GENERAL_LIMIT_TIME_TO,
    IDENTIFIERS_GENERAL_LIMIT_PASS,
    IDENTIFIERS_GENERAL_CLOSE
} from './IdentifiersGeneralTypes';

export const identifierSetupWizardType = (payload: string): IdentifiersActions => {
    return {
        type: IDENTIFIERS_GENERAL_TYPE,
        payload
    };
};

export const identifierSetupWizardAccesPatterns = (
    accesPattAccesPattern: AccesPatterns
): IdentifiersActions => {
    return {
        type: IDENTIFIERS_GENERAL_ACCES_PATERNS,
        payload: accesPattAccesPattern
    };
};

export const identifierSetupWizardSelectedAccesPatterns = (
    selectedAccesPattern: AccesPatterns
): IdentifiersActions => {
    return {
        type: IDENTIFIERS_GENERAL_SELECTED_ACCES_PATERNS,
        payload: selectedAccesPattern
    };
};

export const identifierSetupWizardLimitTimeIsOn = (): IdentifiersActions => ({
    type: IDENTIFIERS_GENERAL_LIMIT_TIME_IS_ON
});

export const identifierSetupWizardLimitPassIsOn = (): IdentifiersActions => ({
    type: IDENTIFIERS_GENERAL_LIMIT_PASS_IS_ON
});

export const identifierSetupWizardLimitTimeFrom = (payload: string): IdentifiersActions => {
    return {
        type: IDENTIFIERS_GENERAL_LIMIT_TIME_FROM,
        payload
    };
};

export const identifierSetupWizardLimitTimeTo = (payload: string): IdentifiersActions => {
    return {
        type: IDENTIFIERS_GENERAL_LIMIT_TIME_TO,
        payload
    };
};

export const identifierSetupWizardLimitPass = (payload: string): IdentifiersActions => {
    return {
        type: IDENTIFIERS_GENERAL_LIMIT_PASS,
        payload
    };
};

export const identifierSetupWizardClear = (): IdentifiersActions => ({
    type: IDENTIFIERS_GENERAL_CLOSE
});

export const requestIdentifierSetupWizardAccesPatterns = () => async (
    dispatch: Dispatch<IdentifiersActions>
) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/acl/templates`)
        .then((response) => {
            dispatch(identifierSetupWizardAccesPatterns(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const createNewIdentifier = (newIdentifiers: Newdentifiers) => async (
    dispatch: Dispatch<IdentifiersActions | AppActions | Dispatch<any>>
) => {
    console.log(newIdentifiers);

    axios
        .put(`${store.getState().app.config.apiUrl}/identificators`, newIdentifiers)
        .then((response) => {
            console.log(response.data);

            if (response.data.code === 0) {
                const toast = {
                    type: 'success',
                    message: 'Идентификатор успешно создан!'
                };

                dispatch(appToastAdd(toast));
            } else if (response.data.code === 1) {
                const toast = {
                    type: 'error',
                    message: `Ошибка. Не получилось создать идентификатор!`
                };

                dispatch(appToastAdd(toast));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
