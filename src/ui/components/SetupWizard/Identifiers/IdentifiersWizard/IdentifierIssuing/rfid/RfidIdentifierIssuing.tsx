import React, { useEffect, memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { setupWizardIdentifiersHardwareType } from 'redux/SetupWizard/SetupWizardIdentifiers/setupWizardIdentifiersAction';
import { RadioButton } from 'ui/components/RadioButton/RadioButton';
import { Reserve } from './hardwareType/Reserve/Reserve';
import { EquipmentReader } from './hardwareType/EquipmentReader/EquipmentReader';
import { Manual } from './hardwareType/Manual/Manual';
import { DesktopReader } from './hardwareType/DesktopReader/DesktopReader';
import { requestIdentifiersRfidCardreaders } from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import './RfidIdentifierIssuing.scss';

const RfidIdentifierIssuingInner = () => {
    const dispatch = useDispatch();
    const { hardwareType } = useSelector((state: State) => state.setupWizard.setupWizardIdentifiers, shallowEqual);
    const { cardreaders } = useSelector((state: State) => state.identifiers.identifiersRfid, shallowEqual);

    useEffect(() => {
        dispatch(requestIdentifiersRfidCardreaders());
    }, [dispatch]);

    useEffect(() => {
        if (hardwareType.length === 0) {
            dispatch(setupWizardIdentifiersHardwareType('Из резерва'));
        } else if (cardreaders.length === 0 && hardwareType === 'Настольный считыватель') {
            dispatch(setupWizardIdentifiersHardwareType('Из резерва'));
        }
    }, [dispatch, hardwareType, cardreaders]);

    const radioHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        dispatch(setupWizardIdentifiersHardwareType(target.value));
    };

    return (
        <div className="rfid-identifier-issuing">
            <div className="rfid-identifier-issuing__hardware">
                <RadioButton name="hardwareType1" state={hardwareType} value="Из резерва" onChange={radioHandler} />
                <RadioButton name="hardwareType2" state={hardwareType} value="Ручной ввод данных" onChange={radioHandler} />
                <RadioButton
                    name="hardwareType3"
                    state={hardwareType}
                    value="Настольный считыватель"
                    onChange={radioHandler}
                    disabled={cardreaders.length === 0}
                />
                <RadioButton name="hardwareType4" state={hardwareType} value="Считыватель оборудования" onChange={radioHandler} disabled />
            </div>
            <div className="rfid-identifier-issuing__option">
                {hardwareType === 'Из резерва' && <Reserve />}
                {hardwareType === 'Ручной ввод данных' && <Manual />}
                {hardwareType === 'Настольный считыватель' && <DesktopReader />}
                {hardwareType === 'Считыватель оборудования' && <EquipmentReader />}
            </div>
        </div>
    );
};

export const RfidIdentifierIssuing = memo(RfidIdentifierIssuingInner);
