import {
    SetupWizardIdentifiersState,
    SetupWizardIdentifiersActions,
    SETUP_WIZAR_IDENTIFIER_TYPES,
    SETUP_WIZAR_IDENTIFIER_TYPE,    
    SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE,
} from './setupWizardIdentifiersTypes';

const initialState: SetupWizardIdentifiersState = {
    identifierTypes: [],
    identifierType: null,
    hardwareType: ''
};

const IdentifiersReducer = (state = initialState, action: SetupWizardIdentifiersActions): SetupWizardIdentifiersState => {
    switch (action.type) {
        case SETUP_WIZAR_IDENTIFIER_TYPES:
            return {
                ...state,
                identifierTypes: action.payload
            };
        case SETUP_WIZAR_IDENTIFIER_TYPE:
            return {
                ...state,
                identifierType: action.payload
            };
        case SETUP_WIZAR_IDENTIFIERS_HARDWARE_TYPE:
            return {
                ...state,
                hardwareType: action.payload
            };
        default:
            return state;
    }
};

export default IdentifiersReducer;
