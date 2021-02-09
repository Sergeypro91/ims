import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    setupWizardDevicesSequenceNotImportant,
    setupWizardDeviceAccessModuleDirection
} from 'redux/SetupWizard/SetupWizardDevices/setupWizardDevicesActions';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';
import { Enter } from './Enter/Enter';
import { Exit } from './Exit/Exit';
import './AccessSequence.scss';

const AccessSequenceInner = () => {
    const dispatch = useDispatch();
    const { setupWizardEquipments } = useSelector((state: State) => state.setupWizard, shallowEqual);

    const sequenceNotImportant = () => {
        const copyArr = setupWizardEquipments.accessModules;

        copyArr.map((item) => {
            item.sequence.onEnter = false;

            return item.sequence.onEnter;
        });

        copyArr.map((item) => {
            item.sequence.onExit = false;

            return item.sequence.onExit;
        });

        dispatch(setupWizardDeviceAccessModuleDirection(copyArr));
        dispatch(setupWizardDevicesSequenceNotImportant());
    };

    return (
        <div className="access-sequence">
            <div className="access-sequence__settings">
                <div className="access-sequence__settings-header">
                    <div className="p--md--bold">Выберите последовательность проверки доступа</div>
                </div>

                <div className={`access-sequence__settings-body ${setupWizardEquipments.sequenceNotImportant ? 'disabled' : ''}`}>
                    <TabBar>
                        <Tab header="Вход" index={0}>
                            <Enter />
                        </Tab>

                        <Tab header="Выход" index={1}>
                            <Exit />
                        </Tab>
                    </TabBar>
                </div>

                <div className="access-sequence__settings-footer">
                    <Checkbox
                        name="sequenceNotImportant"
                        checked={setupWizardEquipments.sequenceNotImportant}
                        label="Последовательность не важна"
                        onChange={sequenceNotImportant}
                    />
                </div>
            </div>

            <div className="access-sequence__description">
                <div className="p--sm--normal">Выберите необходимую последовательность при помощи стрелок.</div>

                <div className="p--sm--normal">Отключите необязательные модули контроля при помощи переключателя.</div>
            </div>
        </div>
    );
};

export const AccessSequence = memo(AccessSequenceInner);
