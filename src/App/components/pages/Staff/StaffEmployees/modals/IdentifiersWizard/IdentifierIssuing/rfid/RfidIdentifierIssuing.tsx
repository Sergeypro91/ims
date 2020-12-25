import React, { useState, memo } from 'react';
import { RadioButton } from 'App/components/global/RadioButton/RadioButton';
import { Reserve } from './hardwareType/Reserve/Reserve';
import { EquipmentReader } from './hardwareType/EquipmentReader/EquipmentReader';
import { Manual } from './hardwareType/Manual/Manual';
import { DesktopReader } from './hardwareType/DesktopReader/DesktopReader';
import './RfidIdentifierIssuing.scss';

const RfidIdentifierIssuingInner = () => {
    const initialState = {
        hardwareType: 'Из резерва'
    };

    const [inputsState, setInputsState] = useState(initialState);

    const radioHandler = (ev: React.ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    return (
        <div className="rfid-identifier-issuing">
            <div className="rfid-identifier-issuing__hardware">
                <RadioButton
                    name="hardwareType"
                    state={inputsState.hardwareType}
                    value="Из резерва"
                    onChange={radioHandler}
                />
                <RadioButton
                    name="hardwareType"
                    state={inputsState.hardwareType}
                    value="Ручной ввод данных"
                    onChange={radioHandler}
                />
                <RadioButton
                    name="hardwareType"
                    state={inputsState.hardwareType}
                    value="Настольный считыватель"
                    onChange={radioHandler}
                />
                <RadioButton
                    name="hardwareType"
                    state={inputsState.hardwareType}
                    value="Считыватель оборудования"
                    onChange={radioHandler}
                />
            </div>
            <div className="rfid-identifier-issuing__option">
                {inputsState.hardwareType === 'Из резерва' && <Reserve />}
                {inputsState.hardwareType === 'Ручной ввод данных' && <Manual />}
                {inputsState.hardwareType === 'Настольный считыватель' && <DesktopReader />}
                {inputsState.hardwareType === 'Считыватель оборудования' && <EquipmentReader />}
            </div>
        </div>
    );
};

export const RfidIdentifierIssuing = memo(RfidIdentifierIssuingInner);
