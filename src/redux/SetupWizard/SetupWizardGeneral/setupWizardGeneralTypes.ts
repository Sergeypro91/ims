export interface SetupWizardGeneralState {
    stepsCount: number;
    currentStep: number;
    marckerElemWidth: number;
}

export const SETUP_WIZARD_GENERAL_STEPS = 'SETUP_WIZARD_GENERAL_STEPS';
export const SETUP_WIZARD_GENERAL_STEP = 'SETUP_WIZARD_GENERAL_STEP';
export const SETUP_WIZARD_GENERAL_MARCKER_WIDTH = 'SETUP_WIZARD_GENERAL_MARCKER_WIDTH';
export const SETUP_WIZARD_GENERAL_CLOSE = 'SETUP_WIZARD_GENERAL_CLOSE';

interface SetupWizardGeneralStepsCount {
    type: typeof SETUP_WIZARD_GENERAL_STEPS;
    payload: number;
}

interface SetupWizardGeneralCurrentStep {
    type: typeof SETUP_WIZARD_GENERAL_STEP;
    payload: number;
}

interface SetupWizardGeneralMarckerElemWidth {
    type: typeof SETUP_WIZARD_GENERAL_MARCKER_WIDTH;
    payload: number;
}

interface SetupWizardGeneralClose {
    type: typeof SETUP_WIZARD_GENERAL_CLOSE;
}

export type SetupWizardGeneralActions =
    | SetupWizardGeneralStepsCount
    | SetupWizardGeneralCurrentStep
    | SetupWizardGeneralMarckerElemWidth
    | SetupWizardGeneralClose;