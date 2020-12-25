import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from 'redux/store';
import { staffEmployeesSetupWizardClose } from 'redux/Staff/StaffEmployees/staffEmployeesAction';
import { appWizardCurrentStep, appWizardClose } from 'redux/App/appActions';
import { Modal } from 'App/components/global/Modal/Modal';
import { WizardProgressBar } from 'App/components/global/WizardProgressBar/WizardProgressBar';
import { WizardWindow } from 'App/components/global/WizardProgressBar/WizardWindow/WizardWindow';
import { IdentifiersType } from './IdentifiersType/IdentifiersType';
import { IdentifierIssuing } from './IdentifierIssuing/IdentifierIssuing';
import { AccessPatterns } from './AccessPatterns/AccessPatterns';
import { DataConfirmation } from './DataConfirmation/DataConfirmation';
import './IdentifiersWizard.scss';

const IdentifiersWizardInner = () => {
    const modalName = 'identifiers-wizard';
    const location = useLocation();
    const history = useHistory();
    const defaultPath = location.pathname.replace(`/${modalName}`, '');
    const dispatch = useDispatch();
    const { setupWizard } = useSelector((state: State) => state.app, shallowEqual);
    const { identifiersWizard } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const [firstStepIsValid, setFirstStepIsValid] = useState(false);
    const [secondStepIsValid, setSecondStepIsValid] = useState(false);
    const [thirdStepIsValid, setThirdStepIsValid] = useState(false);

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

        return false;
    };

    const wizardClose = () => {
        history.push(defaultPath);

        dispatch(staffEmployeesSetupWizardClose());
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
        if (identifiersWizard.type.length < 1) {
            setFirstStepIsValid(false);
        } else {
            setFirstStepIsValid(true);
        }
    }, [identifiersWizard.type]);

    // CHEKING SECOND STEP VALIDATION
    useEffect(() => {
        if (identifiersWizard.type === 'RFID ключ') {
            if (
                identifiersWizard.key.length > 1 &&
                identifiersWizard.limits.limitTime.limitTimeFrom.length ===
                    identifiersWizard.limits.limitTime.limitTimeTo.length &&
                (identifiersWizard.limits.limitPass === '' || +identifiersWizard.limits.limitPass >= 1)
            ) {
                if (
                    new Date(identifiersWizard.limits.limitTime.limitTimeFrom).getTime() >
                    new Date(identifiersWizard.limits.limitTime.limitTimeTo).getTime()
                ) {
                    setSecondStepIsValid(false);
                } else {
                    setSecondStepIsValid(true);
                }
            } else {
                setSecondStepIsValid(false);
            }
        } else if (identifiersWizard.type === 'Face ID') {
            if (identifiersWizard.photo) {
                setSecondStepIsValid(true);
            } else {
                setSecondStepIsValid(false);
            }
        } else if (identifiersWizard.type === '2D штрих-коды') {
            if (identifiersWizard.qr) {
                setSecondStepIsValid(true);
            } else {
                setSecondStepIsValid(false);
            }
        } else if (identifiersWizard.type === 'Отпечаток пальца') {
            if (identifiersWizard.qr) {
                setSecondStepIsValid(true);
            } else {
                setSecondStepIsValid(false);
            }
        } else {
            setSecondStepIsValid(false);
        }
    }, [
        identifiersWizard.type,
        identifiersWizard.key.length,
        identifiersWizard.photo,
        identifiersWizard.qr,
        identifiersWizard.limits.limitPass,
        identifiersWizard.limits.limitTime.limitTimeFrom,
        identifiersWizard.limits.limitTime.limitTimeTo
    ]);

    // CHEKING THIRD STEP VALIDATION
    useEffect(() => {
        if (identifiersWizard.accesZones.length > 0) {
            setThirdStepIsValid(true);
        } else {
            setThirdStepIsValid(false);
        }
    }, [identifiersWizard.accesZones]);

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
            modalHeader="Мастер выдачи идентификатора"
            modalName={modalName}
            modalIcon="Info">
            <div className="setup-wizard">
                <WizardProgressBar>
                    <WizardWindow header="Выбор типа" index={0} isValid={firstStepIsValid}>
                        <IdentifiersType />
                    </WizardWindow>

                    <WizardWindow header="Выдача идентификатора" index={1} isValid={secondStepIsValid}>
                        <IdentifierIssuing />
                    </WizardWindow>

                    <WizardWindow header="Шаблоны доступа" index={2} isValid={thirdStepIsValid}>
                        <AccessPatterns />
                    </WizardWindow>

                    <WizardWindow
                        header="Подтверждение данных"
                        index={3}
                        isValid={firstStepIsValid && secondStepIsValid && thirdStepIsValid === true}>
                        <DataConfirmation />
                    </WizardWindow>
                </WizardProgressBar>
            </div>
        </Modal>
    );
};

export const IdentifiersWizard = memo(IdentifiersWizardInner);
