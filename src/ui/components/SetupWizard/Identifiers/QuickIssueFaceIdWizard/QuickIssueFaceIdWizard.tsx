import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from 'redux/store';
import { identifierSetupWizardClear } from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { setupWizardCurrentStep, setupWizardCleared } from 'redux/SetupWizard/SetupWizardGeneral/setupWizardGeneralActions';
import { Modal } from 'ui/components/Modal/Modal';
import { WizardProgressBar } from 'ui/components/WizardProgressBar/WizardProgressBar';
import { WizardWindow } from 'ui/components/WizardProgressBar/WizardWindow/WizardWindow';
import { IdentifierIssuing } from './IdentifierIssuing/IdentifierIssuing';
import { AccessPatterns } from './AccessPatterns/AccessPatterns';
import { DataConfirmation } from './DataConfirmation/DataConfirmation';

const QuickIssueFaceIdWizardInner = () => {
    const modalName = 'quick-issue-faceId-wizard';
    const location = useLocation();
    const history = useHistory();
    const defaultPath = location.pathname.replace(`/${modalName}`, '');
    const dispatch = useDispatch();
    const { setupWizardGeneral } = useSelector((state: State) => state.setupWizard, shallowEqual);
    const { identifiersGeneral, identifiersFaceId } = useSelector((state: State) => state.identifiers, shallowEqual);

    const [firstStepIsValid, setFirstStepIsValid] = useState(false);
    const [secondStepIsValid, setSecondStepIsValid] = useState(false);

    const wizardSuccesDisabled = () => {
        if (setupWizardGeneral.currentStep === 0) {
            return !firstStepIsValid;
        }

        if (setupWizardGeneral.currentStep === 1) {
            return !secondStepIsValid;
        }

        return false;
    };

    const wizardClose = () => {
        history.push(defaultPath);

        dispatch(identifierSetupWizardClear());
        dispatch(setupWizardCleared());
    };

    const wizardSuccesClick = () => {
        if (!wizardSuccesDisabled()) {
            if (setupWizardGeneral.currentStep < setupWizardGeneral.stepsCount - 1) {
                dispatch(setupWizardCurrentStep(setupWizardGeneral.currentStep + 1));
            } else {
                alert('Вы успешно сгенерировали идентификатор');

                wizardClose();
            }
        }
    };

    const wizardCancelClick = () => {
        dispatch(setupWizardCurrentStep(setupWizardGeneral.currentStep - 1));
    };

    // CHEKING FIRST STEP VALIDATION
    useEffect(() => {
        if (identifiersFaceId.photo) {
            setFirstStepIsValid(true);
        } else {
            setFirstStepIsValid(false);
        }
    }, [identifiersFaceId.photo]);

    // CHEKING SECOND STEP VALIDATION
    useEffect(() => {
        if (identifiersGeneral.accesPatterns.length > 0) {
            setSecondStepIsValid(true);
        } else {
            setSecondStepIsValid(false);
        }
    }, [identifiersGeneral.accesPatterns]);

    return (
        <Modal
            modalClassName="wizard"
            successButtonLabel={setupWizardGeneral.currentStep < setupWizardGeneral.stepsCount - 1 ? 'Далее' : 'Выдать'}
            onSuccessClick={wizardSuccesClick}
            succesDisabled={wizardSuccesDisabled()}
            denyButtonLabel={setupWizardGeneral.currentStep === 0 && 'Закрыть'}
            onDenyClick={wizardClose}
            cancelButtonLabel={setupWizardGeneral.currentStep > 0 && 'Назад'}
            onCancelClick={wizardCancelClick}
            modalHeader="Мастер выдачи идентификатора"
            modalName={modalName}
            modalIcon="Info"
        >
            <div className="setup-wizard">
                <WizardProgressBar>
                    <WizardWindow header="Выдача идентификатора" index={0} isValid={firstStepIsValid}>
                        <IdentifierIssuing />
                    </WizardWindow>

                    <WizardWindow header="Шаблоны доступа" index={1} isValid={secondStepIsValid}>
                        <AccessPatterns />
                    </WizardWindow>

                    <WizardWindow header="Подтверждение данных" index={2} isValid={firstStepIsValid && secondStepIsValid === true}>
                        <DataConfirmation />
                    </WizardWindow>
                </WizardProgressBar>
            </div>
        </Modal>
    );
};

export const QuickIssueFaceIdWizard = memo(QuickIssueFaceIdWizardInner);
