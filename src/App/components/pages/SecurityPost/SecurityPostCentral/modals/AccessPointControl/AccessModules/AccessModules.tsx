import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { ModulesDirection } from './ModulesDirection/ModulesDirection';
import './AccessModules.scss';

const AccessModulesInner = () => {
    const { accessPointsWizard } = useSelector((state: State) => state.settings.settingsAccessPoints, shallowEqual);
    const { selectedDevice } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);

    return (
        <div className="access-point-modules">
            <div className="access-point-modules__settings">
                <div className="access-point-modules__settings-header">
                    <div className="p--md--bold">Выберите модули доступа</div>
                </div>

                <div
                    className={`access-point-modules__settings-body ${
                        accessPointsWizard.sequenceNotImportant ? 'disabled' : ''
                    }`}>
                    <TabBar>
                        <Tab header="Вход" index={0}>
                            <ModulesDirection
                                item={
                                    selectedDevice && selectedDevice.sensors
                                        ? selectedDevice.sensors.filter((item) => item.direction === 1)
                                        : []
                                }
                            />
                        </Tab>

                        <Tab header="Выход" index={1}>
                            <ModulesDirection
                                item={
                                    selectedDevice && selectedDevice.sensors
                                        ? selectedDevice.sensors.filter((item) => item.direction === 2)
                                        : []
                                }
                            />
                        </Tab>
                    </TabBar>
                </div>
            </div>

            <div className="access-point-modules__description">
                <div className="p--sm--normal">Вы можете отключить модули доступа при помощи переключателя</div>
            </div>
        </div>
    );
};

export const AccessModules = memo(AccessModulesInner);
