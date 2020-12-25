import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import { useHistory, useLocation } from 'react-router-dom';
import { appWizardCurrentStep, appWizardClose } from 'redux/App/appActions';
import { Modal } from 'App/components/global/Modal/Modal';
import { WizardProgressBar } from 'App/components/global/WizardProgressBar/WizardProgressBar';
import { WizardWindow } from 'App/components/global/WizardProgressBar/WizardWindow/WizardWindow';
import { AccessPointsModules } from './AccessPointsModules/AccessPointsModules';
import { AccessPointsSetup } from './AccessPointsSetup/AccessPointsSetup';
import { AccessPointsType } from './AccessPointsType/AccessPointsType';
import { AccessSequence } from './AccessSequence/AccessSequence';
import { DataConfirmation } from './DataConfirmation/DataConfirmation';
import './AccessPointWizard.scss';

const AccessPointWizardInner = () => {
    const modalName = 'access-point-wizard';
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const defaultPath = location.pathname.replace(`/${modalName}`, '');
    const { setupWizard } = useSelector((state: State) => state.app, shallowEqual);
    const { accessPointsWizard } = useSelector((state: State) => state.settings.settingsAccessPoints, shallowEqual);

    const [firstStepIsValid, setFirstStepIsValid] = useState(false);
    const [secondStepIsValid, setSecondStepIsValid] = useState(false);
    const [thirdStepIsValid, setThirdStepIsValid] = useState(false);
    const [fourthStepIsValid, setFourthStepIsValid] = useState(false);
    const [fifthStepIsValid, setFifthStepIsValid] = useState(false);

    const wizardSuccesDisabled = () => {
        if (setupWizard.currentStep === 0) {
            return !firstStepIsValid;
        }
        if (setupWizard.currentStep === 1) {
            return !secondStepIsValid;
        }
        if (setupWizard.currentStep === 2) {
            return !thirdStepIsValid;
        }
        if (setupWizard.currentStep === 3) {
            return !fourthStepIsValid;
        }
        if (setupWizard.currentStep === 4) {
            return !fifthStepIsValid;
        }
        return false;
    };

    const wizardClose = () => {
        history.push(defaultPath);

        dispatch(appWizardClose());
    };

    const wizardSuccesClick = () => {
        if (!wizardSuccesDisabled()) {
            if (setupWizard.currentStep < setupWizard.stepsCount - 1) {
                dispatch(appWizardCurrentStep(setupWizard.currentStep + 1));
            } else {
                alert('Вы успешно сгенерировали идентификатор');

                wizardClose();
            }
        }
    };

    const wizardCancelClick = () => {
        dispatch(appWizardCurrentStep(setupWizard.currentStep - 1));
    };

    // CHEKING FIRST STEP VALIDATION
    useEffect(() => {
        if (accessPointsWizard.type.length < 1) {
            setFirstStepIsValid(false);
        } else {
            setFirstStepIsValid(true);
        }
    }, [accessPointsWizard.type]);

    // CHEKING SECOND STEP VALIDATION
    useEffect(() => {
        if (accessPointsWizard.accessPoint.serialNumber === '' || accessPointsWizard.accessPoint.name === '') {
            setSecondStepIsValid(false);
        } else {
            setSecondStepIsValid(true);
        }
    }, [accessPointsWizard.accessPoint.name, accessPointsWizard.accessPoint.serialNumber]);

    // CHEKING THIRD STEP VALIDATION
    useEffect(() => {
        if (accessPointsWizard.accessModules.length < 1) {
            setThirdStepIsValid(false);
        } else {
            setThirdStepIsValid(true);
        }
    }, [accessPointsWizard.accessModules.length]);

    // CHEKING FOURTH STEP VALIDATION
    useEffect(() => {
        if (thirdStepIsValid === false) {
            setFourthStepIsValid(false);
        } else {
            setFourthStepIsValid(true);
        }
    }, [thirdStepIsValid]);

    // CHEKING FIFTH STEP VALIDATION
    useEffect(() => {
        if (
            firstStepIsValid === false ||
            secondStepIsValid === false ||
            thirdStepIsValid === false ||
            fourthStepIsValid === false
        ) {
            setFifthStepIsValid(false);
        } else {
            setFifthStepIsValid(true);
        }
    }, [firstStepIsValid, secondStepIsValid, thirdStepIsValid, fourthStepIsValid]);

    return (
        <Modal
            modalClassName="wizard"
            successButtonLabel={setupWizard.currentStep < setupWizard.stepsCount - 1 ? 'Далее' : 'Выдать'}
            onSuccessClick={wizardSuccesClick}
            succesDisabled={wizardSuccesDisabled()}
            denyButtonLabel={setupWizard.currentStep === 0 && 'Закрыть'}
            onDenyClick={wizardClose}
            cancelButtonLabel={setupWizard.currentStep > 0 && 'Назад'}
            onCancelClick={wizardCancelClick}
            modalHeader="Мастер настройки точек доступа"
            modalName={modalName}
            modalIcon="Info">
            <div className="access-point-wizard">
                <WizardProgressBar>
                    <WizardWindow header="Выбор точки доступа" index={0} isValid={firstStepIsValid}>
                        <AccessPointsType />
                    </WizardWindow>

                    <WizardWindow header="Настройка точки доступа" index={1} isValid={secondStepIsValid}>
                        <AccessPointsSetup />
                    </WizardWindow>

                    <WizardWindow header="Модули доступа" index={2} isValid={thirdStepIsValid}>
                        <AccessPointsModules />
                    </WizardWindow>

                    <WizardWindow header="Последовательность доступа" index={3} isValid={fourthStepIsValid}>
                        <AccessSequence />
                    </WizardWindow>

                    <WizardWindow header="Подтверждение данных" index={4} isValid={fifthStepIsValid}>
                        <DataConfirmation />
                    </WizardWindow>
                </WizardProgressBar>
            </div>
        </Modal>
    );
};

export const AccessPointWizard = memo(AccessPointWizardInner);
