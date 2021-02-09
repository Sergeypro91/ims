export type IdentifierTypes = Array<IdentifierType>;

export interface IdentifierType {
    name: string;
    index: number;
    allow: boolean;
}

export interface SetupWizardIdentifiersState {
    identifierTypes: IdentifierTypes;
    identifierType: null | IdentifierType;
    hardwareType: string;
}

export const SETUP_WIZAR_IDENTIFIER_TYPES = 'SETUP_WIZAR_IDENTIFIER_TYPES';
export const SETUP_WIZAR_IDENTIFIER_TYPE = 'SETUP_WIZAR_IDENTIFIER_TYPE';
export const SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE = 'SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE';

interface SetupWizardIdentifiersIdentifierTypes {
    type: typeof SETUP_WIZAR_IDENTIFIER_TYPES;
    payload: IdentifierTypes;
}

interface SetupWizardIdentifiersIdentifierType {
    type: typeof SETUP_WIZAR_IDENTIFIER_TYPE;
    payload: IdentifierType;
}

interface SetupWizardIdentifiersHardwareType {
    type: typeof SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE;
    payload: string;
}

export type SetupWizardIdentifiersActions =
    | SetupWizardIdentifiersIdentifierTypes
    | SetupWizardIdentifiersIdentifierType
    | SetupWizardIdentifiersHardwareType;
