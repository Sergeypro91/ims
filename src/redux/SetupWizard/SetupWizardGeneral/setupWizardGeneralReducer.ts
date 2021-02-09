import {
    SetupWizardGeneralState,
    SetupWizardGeneralActions,
    SETUP_WIZARD_GENERAL_STEPS,
    SETUP_WIZARD_GENERAL_STEP,
    SETUP_WIZARD_GENERAL_MARCKER_WIDTH,
    SETUP_WIZARD_GENERAL_CLOSE
} from './setupWizardGeneralTypes';

const initialState: SetupWizardGeneralState = {    
    stepsCount: 0,
    currentStep: 0,
    marckerElemWidth: 0
};

const SetupWizardGeneral = (state = initialState, action: SetupWizardGeneralActions): SetupWizardGeneralState => {
    switch (action.type) {
        case SETUP_WIZARD_GENERAL_STEP:
            return {
                ...state,
                currentStep: action.payload
            };
        case SETUP_WIZARD_GENERAL_STEPS:
            return {
                ...state,
                stepsCount: action.payload
            };
        case SETUP_WIZARD_GENERAL_MARCKER_WIDTH:
            return {
                ...state,
                marckerElemWidth: action.payload
            };
        case SETUP_WIZARD_GENERAL_CLOSE:
            return {
                ...state,
                stepsCount: 0,
                currentStep: 0,
                marckerElemWidth: 0
            };
        default:
            return state;
    }
};

export default SetupWizardGeneral;
