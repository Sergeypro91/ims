import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { State } from 'redux/store';
import {
    settingsAccessPointsSequenceNotImportant,
    settingsAccessPointsPointAccessModuleDirection
} from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { Checkbox } from 'App/components/global/Checkbox/Checkbox';
import { Enter } from './Enter/Enter';
import { Exit } from './Exit/Exit';
import './AccessSequence.scss';

const AccessSequenceInner = () => {
    const dispatch = useDispatch();
    const { accessPointsWizard } = useSelector((state: State) => state.settings.settingsAccessPoints, shallowEqual);

    const sequenceNotImportant = () => {
        const copyArr = accessPointsWizard.accessModules;

        copyArr.map((item) => {
            item.sequence.onEnter = false;

            return item.sequence.onEnter;
        });

        copyArr.map((item) => {
            item.sequence.onEnter = false;

            return item.sequence.onExit;
        });

        dispatch(settingsAccessPointsPointAccessModuleDirection(copyArr));
        dispatch(settingsAccessPointsSequenceNotImportant());
    };

    return (
        <div className="access-sequence">
            <div className="access-sequence__settings">
                <div className="access-sequence__settings-header">
                    <div className="p--md--bold">Выберите последовательность проверки доступа</div>
                </div>

                <div
                    className={`access-sequence__settings-body ${
                        accessPointsWizard.sequenceNotImportant ? 'disabled' : ''
                    }`}>
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
                        checked={accessPointsWizard.sequenceNotImportant}
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
