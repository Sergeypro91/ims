import axios from 'axios';
import { Dispatch } from 'react';
import store from 'redux/store';
import {
    IdentifierTypes,
    IdentifierType,
    SetupWizardIdentifiersActions,
    SETUP_WIZAR_IDENTIFIER_TYPES,
    SETUP_WIZAR_IDENTIFIER_TYPE,
    SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE
} from './setupWizardIdentifiersTypes';

export const setupWizardIdentifiersIdentifierTypes = (identifierTypes: IdentifierTypes): SetupWizardIdentifiersActions => ({
    type: SETUP_WIZAR_IDENTIFIER_TYPES,
    payload: identifierTypes
});

export const setupWizardIdentifiersIdentifierType = (identifierType: IdentifierType): SetupWizardIdentifiersActions => ({
    type: SETUP_WIZAR_IDENTIFIER_TYPE,
    payload: identifierType
});

export const setupWizardIdentifiersHardwareType = (hardwareType: string): SetupWizardIdentifiersActions => ({
    type: SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE,
    payload: hardwareType
});

export const requestIdentifiersTypes = () => (dispatch: Dispatch<SetupWizardIdentifiersActions>) => {
    axios
        .get(`${store.getState().app.config.apiUrl}/identificators/types/master`)
        .then((response) => {
            dispatch(setupWizardIdentifiersIdentifierTypes(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
};