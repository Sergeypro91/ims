import React, { useState, useEffect, memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from 'redux/store';
import {
    identifierSetupWizardClear,
    identifierSetupWizardSelectedAccesPatterns,
    createNewIdentifier
} from 'redux/Identifiers/IdentifiersGeneral/IdentifiersGeneralAction';
import { setupWizardCurrentStep } from 'redux/SetupWizard/SetupWizardGeneral/setupWizardGeneralActions';
import { Modal } from 'ui/components/Modal/Modal';
import { WizardProgressBar } from 'ui/components/WizardProgressBar/WizardProgressBar';
import { WizardWindow } from 'ui/components/WizardProgressBar/WizardWindow/WizardWindow';
import { IdentifiersType } from './IdentifiersType/IdentifiersType';
import { IdentifierIssuing } from './IdentifierIssuing/IdentifierIssuing';
import { AccessPatterns } from './AccessPatterns/AccessPatterns';
import { DataConfirmation } from './DataConfirmation/DataConfirmation';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import './IdentifiersWizard.scss';

const IdentifiersWizardInner = () => {
    const modalName = 'identifiers-wizard';
    const location = useLocation();
    const history = useHistory();
    const defaultPath = location.pathname.replace(`/${modalName}`, '');
    const dispatch = useDispatch();
    const { setupWizardGeneral, setupWizardIdentifiers } = useSelector((state: State) => state.setupWizard, shallowEqual);
    const { identifiersGeneral, identifiersRfid, identifiersFaceId, identifiersQr } = useSelector(
        (state: State) => state.identifiers,
        shallowEqual
    );
    const { parameters } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);
    const { selectedRow } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);
    const [firstStepIsValid, setFirstStepIsValid] = useState(false);
    const [secondStepIsValid, setSecondStepIsValid] = useState(false);
    const [thirdStepIsValid, setThirdStepIsValid] = useState(false);

    useEffect(() => {
        dispatch(setupWizardCurrentStep(0));
    }, [dispatch]);

    useEffect(() => {
        if (parameters.length > 0) {
            parameters.forEach((elem) => {
                if (elem.name === 'general') {
                    elem.options.forEach((item) => {
                        if (item.name === 'useZoning') {
                            if (!item.condition) {
                                if (identifiersGeneral.accesPatterns) {
                                    const accesPatterns = identifiersGeneral.accesPatterns;
                                    const autoSelectedPatterns = accesPatterns[findIndexFunc(accesPatterns, 'Доступ везде', 'name')];

                                    if (autoSelectedPatterns) {
                                        dispatch(identifierSetupWizardSelectedAccesPatterns([autoSelectedPatterns]));
                                    }
                                }
                            }
                        }
                    });
                }
            });
        }
    }, [dispatch, parameters, identifiersGeneral.accesPatterns]);

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

        return false;
    };

    const wizardClose = () => {
        history.push(defaultPath);

        dispatch(identifierSetupWizardClear());
    };

    const wizardSuccesClick = () => {
        if (!wizardSuccesDisabled()) {
            if (setupWizardGeneral.currentStep < setupWizardGeneral.stepsCount - 1) {
                dispatch(setupWizardCurrentStep(setupWizardGeneral.currentStep + 1));
            } else {
                dispatch(createNewIdentifier(newIdentifier()));

                wizardClose();
            }
        }
    };

    const wizardCancelClick = () => {
        dispatch(setupWizardCurrentStep(setupWizardGeneral.currentStep - 1));
    };

    // CHEKING FIRST STEP VALIDATION
    useEffect(() => {
        if (setupWizardIdentifiers.identifierType) {
            setFirstStepIsValid(true);
        } else {
            setFirstStepIsValid(false);
        }
    }, [setupWizardIdentifiers.identifierType]);

    // CHEKING SECOND STEP VALIDATION
    useEffect(() => {
        if (setupWizardIdentifiers.identifierType) {
            if (setupWizardIdentifiers.identifierType.index === 0) {
                if (
                    identifiersRfid.key.length > 1 &&
                    identifiersGeneral.limits.limitTime.limitTimeFrom.length === identifiersGeneral.limits.limitTime.limitTimeTo.length &&
                    (identifiersGeneral.limits.limitPass === '' || +identifiersGeneral.limits.limitPass >= 1)
                ) {
                    if (
                        new Date(identifiersGeneral.limits.limitTime.limitTimeFrom).getTime() >
                        new Date(identifiersGeneral.limits.limitTime.limitTimeTo).getTime()
                    ) {
                        setSecondStepIsValid(false);
                    } else {
                        setSecondStepIsValid(true);
                    }
                } else {
                    setSecondStepIsValid(false);
                }
            } else if (setupWizardIdentifiers.identifierType!.index === 1) {
                if (identifiersQr.qr) {
                    setSecondStepIsValid(true);
                } else {
                    setSecondStepIsValid(false);
                }
            } else if (setupWizardIdentifiers.identifierType!.index === 2) {
                if (identifiersFaceId.photo) {
                    setSecondStepIsValid(true);
                } else {
                    setSecondStepIsValid(false);
                }
            } else if (setupWizardIdentifiers.identifierType!.index === 3) {
                if (identifiersQr.qr) {
                    setSecondStepIsValid(true);
                } else {
                    setSecondStepIsValid(false);
                }
            } else {
                setSecondStepIsValid(false);
            }
        } else {
            setSecondStepIsValid(false);
        }
    }, [
        setupWizardIdentifiers.identifierType,
        identifiersRfid.key.length,
        identifiersFaceId.photo,
        identifiersQr.qr,
        identifiersGeneral.limits.limitPass,
        identifiersGeneral.limits.limitTime.limitTimeFrom,
        identifiersGeneral.limits.limitTime.limitTimeTo
    ]);

    // CHEKING THIRD STEP VALIDATION
    useEffect(() => {
        parameters.forEach((elem) => {
            if (elem.name === 'general') {
                elem.options.forEach((item) => {
                    if (item.name === 'allowAccessZones') {
                        if (item.condition) {
                            if (identifiersGeneral.selectedAccesPatterns.length > 0) {
                            } else {
                                setThirdStepIsValid(false);
                            }
                        } else {
                            setThirdStepIsValid(true);
                        }
                    }
                });
            }
        });
    }, [identifiersGeneral.selectedAccesPatterns, parameters]);

    // BUILD NEW IDENTIFICATOR
    const newIdentifier = () => {
        const identifier = {
            type: 0,
            content: '',
            status: 0,
            identificatorClass: 0,
            validFrom: '',
            validTo: '',
            passCount: 0,
            deleted: false,
            personId: '',
            personName: ''
        };

        if (selectedRow && identifiersGeneral && parameters.length > 0) {
            // IDENTIFIER TYPE
            if (identifiersGeneral.type === 'RFID ключ') {
                parameters.forEach((elem) => {
                    if (elem.name === 'identifiers') {
                        elem.options.forEach((item) => {
                            if (item.name === 'contactlessType') {
                                if (item.selected === 'EMMarin') {
                                    identifier.type = 1;
                                }

                                if (item.selected === 'Mifare') {
                                    identifier.type = 2;
                                }
                            }
                        });
                    }
                });
            } else if (identifiersGeneral.type === 'Face ID') {
                identifier.type = 5;
            } else if (identifiersGeneral.type === '2D штрих-коды') {
                identifier.type = 7;
            } else if (identifiersGeneral.type === 'Отпечаток пальца') {
                identifier.type = 4;
            }

            // IDENTIFIER CONTENT
            parameters.forEach((elem) => {
                if (elem.name === 'identifiers') {
                    elem.options.forEach((item) => {
                        if (item.name === 'outputFormat') {
                            if (item.selected === 'Десятичный') {
                                identifier.content = `${parseInt(identifiersRfid.key, 10)}`;
                            }

                            if (item.selected === 'Шестнадцатеричный') {
                                identifier.content = `${parseInt(identifiersRfid.key, 16)}`;
                            }
                        }
                    });
                }
            });

            // IDENTIFIER INDEX
            // identifier.index = ''; // Для отпечатоков

            // IDENTIFIER STATUS
            identifier.status = 2; // 1 "Резерв", 2 "Активен", 3 "Утрачен", 4 "Экспертиза", 5 "Поврежден"

            // IDENTIFIER CLASS
            identifier.identificatorClass = 1; // 1 "Простой", 2 "Мастер", 3 "Охрана"

            // IDENTIFIER VALID FROM/TO
            if (!identifiersGeneral.limits.limitTimeIsOff) {
                identifier.validFrom = identifiersGeneral.limits.limitTime.limitTimeFrom;
                identifier.validTo = identifiersGeneral.limits.limitTime.limitTimeTo;
            }

            // IDENTIFIER PASSCOUNT
            if (!identifiersGeneral.limits.limitPassIsOff) {
                identifier.passCount = +identifiersGeneral.limits.limitPass;
            }

            // IDENTIFIER DELETED
            identifier.deleted = selectedRow.dismissed === 1;

            // IDENTIFIER PERSONID
            identifier.personId = selectedRow.physpersonUuid;

            // IDENTIFIER PERSONNAME
            identifier.personName = selectedRow.physpersonName;
        }

        const newdentifiers = [identifier];

        return newdentifiers;
    };

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
                    <WizardWindow header="Выбор типа" index={0} isValid={firstStepIsValid}>
                        <IdentifiersType />
                    </WizardWindow>

                    <WizardWindow header="Выдача идентификатора" index={1} isValid={firstStepIsValid && secondStepIsValid === true}>
                        <IdentifierIssuing />
                    </WizardWindow>

                    <WizardWindow
                        header="Шаблоны доступа"
                        index={2}
                        isValid={firstStepIsValid && secondStepIsValid && thirdStepIsValid === true}
                    >
                        <AccessPatterns />
                    </WizardWindow>

                    <WizardWindow
                        header="Подтверждение данных"
                        index={3}
                        isValid={firstStepIsValid && secondStepIsValid && thirdStepIsValid === true}
                    >
                        <DataConfirmation />
                    </WizardWindow>
                </WizardProgressBar>
            </div>
        </Modal>
    );
};

export const IdentifiersWizard = memo(IdentifiersWizardInner);
