import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import { useHistory, useLocation } from 'react-router-dom';
import { setupWizardCurrentStep } from 'redux/SetupWizard/SetupWizardGeneral/setupWizardGeneralActions';
import { setupWizardDevicesClear } from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { Modal } from 'ui/components/Modal/Modal';
import { WizardProgressBar } from 'ui/components/WizardProgressBar/WizardProgressBar';
import { WizardWindow } from 'ui/components/WizardProgressBar/WizardWindow/WizardWindow';
import { AccessPointsModules } from './AccessPointsModules/AccessPointsModules';
import { AccessPointsGeneral } from './AccessPointsGeneral/AccessPointsGeneral';
import { AccessPointsSetup } from './AccessPointsSetup/AccessPointsSetup';
import { AccessPointsType } from './AccessPointsType/AccessPointsType';
import { AccessSequence } from './AccessSequence/AccessSequence';
import { DataConfirmation } from './DataConfirmation/DataConfirmation';
import './EquipmentsWizard.scss';

const EquipmentsWizardInner = () => {
    const modalName = 'access-point-wizard';
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const defaultPath = location.pathname.replace(`/${modalName}`, '');
    const { setupWizardGeneral, setupWizardEquipments } = useSelector((state: State) => state.setupWizard, shallowEqual);

    const [firstStepIsValid, setFirstStepIsValid] = useState(false);
    const [secondStepIsValid, setSecondStepIsValid] = useState(false);
    const [thirdStepIsValid, setThirdStepIsValid] = useState(true);
    const [fourthStepIsValid, setFourthStepIsValid] = useState(false);
    const [fifthStepIsValid, setFifthStepIsValid] = useState(false);
    const [sixStepIsValid, setSixStepIsValid] = useState(false);

    useEffect(() => {
        dispatch(setupWizardCurrentStep(0));
    }, [dispatch]);

    const wizardSuccesDisabled = () => {
        if (setupWizardGeneral.currentStep === 0) {
            return !firstStepIsValid;
        }
        if (setupWizardGeneral.currentStep === 1) {
            return !secondStepIsValid;
        }
        if (setupWizardGeneral.currentStep === 2) {
            return !thirdStepIsValid;
        }
        if (setupWizardGeneral.currentStep === 3) {
            return !fourthStepIsValid;
        }
        if (setupWizardGeneral.currentStep === 4) {
            return !fifthStepIsValid;
        }
        if (setupWizardGeneral.currentStep === 5) {
            return !sixStepIsValid;
        }
        return false;
    };

    const wizardClose = () => {
        history.push(defaultPath);

        dispatch(setupWizardDevicesClear());
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
        if (setupWizardEquipments.device.deviceType) {
            setFirstStepIsValid(true);
        } else {
            setFirstStepIsValid(false);
        }
    }, [setupWizardEquipments.device.deviceType]);

    // CHEKING SECOND STEP VALIDATION
    useEffect(() => {
        if (
            setupWizardEquipments.configs.deviceSetup.name.length > 0 &&
            setupWizardEquipments.zonning.accessZoneOnIn &&
            setupWizardEquipments.zonning.accessZoneOnOut
        ) {
            setSecondStepIsValid(true);
        } else {
            setSecondStepIsValid(false);
        }
    }, [
        setupWizardEquipments.configs.deviceSetup.name,
        setupWizardEquipments.zonning.accessZoneOnIn,
        setupWizardEquipments.zonning.accessZoneOnOut
    ]);

    // CHEKING THIRD STEP VALIDATION
    useEffect(() => {}, []);

    // CHEKING FOURTH STEP VALIDATION
    useEffect(() => {
        if (setupWizardEquipments.accessModules.length < 1) {
            setFourthStepIsValid(false);
        } else {
            setFourthStepIsValid(true);
        }
    }, [setupWizardEquipments.accessModules.length]);

    // CHEKING FIFTH STEP VALIDATION
    useEffect(() => {
        if (thirdStepIsValid === false) {
            setFifthStepIsValid(false);
        } else {
            setFifthStepIsValid(true);
        }
    }, [thirdStepIsValid]);

    // CHEKING SIX STEP VALIDATION
    useEffect(() => {
        if (firstStepIsValid === false || secondStepIsValid === false || thirdStepIsValid === false || fourthStepIsValid === false) {
            setSixStepIsValid(false);
        } else {
            setSixStepIsValid(true);
        }
    }, [firstStepIsValid, secondStepIsValid, thirdStepIsValid, fourthStepIsValid]);

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
            modalHeader="Мастер настройки точек доступа"
            modalName={modalName}
            modalIcon="Info"
        >
            <div className="access-point-wizard">
                <WizardProgressBar>
                    <WizardWindow header="Выбор точки доступа" index={0} isValid={firstStepIsValid}>
                        <AccessPointsType />
                    </WizardWindow>

                    <WizardWindow header="Общие данные" index={1} isValid={secondStepIsValid}>
                        <AccessPointsGeneral />
                    </WizardWindow>

                    <WizardWindow header="Настройка точки доступа" index={2} isValid={thirdStepIsValid}>
                        <AccessPointsSetup />
                    </WizardWindow>

                    <WizardWindow header="Модули доступа" index={3} isValid={fourthStepIsValid}>
                        <AccessPointsModules />
                    </WizardWindow>

                    <WizardWindow header="Последовательность доступа" index={4} isValid={fifthStepIsValid}>
                        <AccessSequence />
                    </WizardWindow>

                    <WizardWindow header="Подтверждение данных" index={5} isValid={sixStepIsValid}>
                        <DataConfirmation />
                    </WizardWindow>
                </WizardProgressBar>
            </div>
        </Modal>
    );
};

export const EquipmentsWizard = memo(EquipmentsWizardInner);
