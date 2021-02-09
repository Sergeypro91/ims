import { combineReducers } from 'redux';
import SetupWizardIdentifiers from './SetupWizardIdentifiers/setupWizardIdentifiersReducer';
import SetupWizardEquipments from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesReducer';
import SetupWizardGeneralReducer from './SetupWizardGeneral/setupWizardGeneralReducer'

const SetupWizard = combineReducers({
    setupWizardIdentifiers: SetupWizardIdentifiers,
    setupWizardEquipments: SetupWizardEquipments,
    setupWizardGeneral: SetupWizardGeneralReducer
});

export default SetupWizard;
