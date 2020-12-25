import React, { memo } from 'react';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { General } from './tabs/General/General';
import { Customization } from './tabs/Customization/Customization';
import './AccessPointsSetup.scss';

const AccessPointsSetupInner = () => {
    return (
        <div className="access-points-setup">
            <div className="access-points-setup__title">
                <div className="p--md--bold">Выберите и настройте точку доступа</div>
            </div>

            <div className="access-points-setup__body">
                <TabBar>
                    <Tab header="Общие" index={0}>
                        <General />
                    </Tab>

                    <Tab header="Настройка" index={1}>
                        <Customization />
                    </Tab>
                </TabBar>
            </div>
        </div>
    );
};

export const AccessPointsSetup = memo(AccessPointsSetupInner);
