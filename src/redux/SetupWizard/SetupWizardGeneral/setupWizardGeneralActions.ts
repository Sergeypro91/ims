import {
    SetupWizardGeneralActions,
    SETUP_WIZARD_GENERAL_STEPS,
    SETUP_WIZARD_GENERAL_STEP,
    SETUP_WIZARD_GENERAL_MARCKER_WIDTH,
    SETUP_WIZARD_GENERAL_CLOSE
} from './setupWizardGeneralTypes';

export const setupWizardCurrentStep = (payload: number): SetupWizardGeneralActions => {
    return {
        type: SETUP_WIZARD_GENERAL_STEP,
        payload
    };
};

export const setupWizardStepsCount = (payload: number): SetupWizardGeneralActions => {
    return {
        type: SETUP_WIZARD_GENERAL_STEPS,
        payload
    };
};

export const setupWizardMarckerWidth = (payload: number): SetupWizardGeneralActions => {
    return {
        type: SETUP_WIZARD_GENERAL_MARCKER_WIDTH,
        payload
    };
};

export const setupWizardCleared = (): SetupWizardGeneralActions => ({
    type: SETUP_WIZARD_GENERAL_CLOSE
});