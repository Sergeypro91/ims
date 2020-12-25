import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import {
    settingsAccessPointsToggleSidebar,
    settingsAccessPointsToggleBar
} from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { TabGeneral } from './tabs/TabGeneral/TabGeneral';
import { TabModules } from './tabs/TabModules/TabModules';
import { TabPassages } from './tabs/TabPassages/TabPassages';

const SettingsAccessPointsSidebarInner = () => {
    const dispatch = useDispatch();
    const { sidebarOpened, toggleBar } = useSelector(
        (state: State) => state.settings.settingsAccessPoints,
        shallowEqual
    );
    return (
        <Sidebar
            sidebarName="Данные об оборудовании"
            icon="Events"
            isOpen={sidebarOpened}
            sidebarToggler={() => dispatch(settingsAccessPointsToggleSidebar())}
            sidebarTrigger={() => dispatch(settingsAccessPointsToggleBar())}>
            <TabBar trigger={toggleBar}>
                <Tab header="Общие" index={0}>
                    <TabGeneral />
                </Tab>

                <Tab header="Модули" index={1}>
                    <TabModules />
                </Tab>

                <Tab header="Проходы" index={2}>
                    <TabPassages />
                </Tab>
            </TabBar>
        </Sidebar>
    );
};

export const SettingsAccessPointsSidebar = memo(SettingsAccessPointsSidebarInner);
