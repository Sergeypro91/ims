import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { settingsAccessPointsToggleSidebar } from 'redux/Settings/SettingsAccessPoints/settingsAccessPointsActions';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import { TabGeneral } from './tabs/TabGeneral/TabGeneral';
import { TabModules } from './tabs/TabModules/TabModules';
import { TabPassages } from './tabs/TabPassages/TabPassages';

const SettingsAccessPointsSidebarInner = () => {
    const dispatch = useDispatch();
    const { sidebarOpened, toggleBar } = useSelector((state: State) => state.settings.settingsAccessPoints, shallowEqual);
    return (
        <Sidebar
            label="Данные об оборудовании"
            icon="Events"
            isOpen={sidebarOpened}
            toggleIsOpen={() => dispatch(settingsAccessPointsToggleSidebar())}
        >
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
