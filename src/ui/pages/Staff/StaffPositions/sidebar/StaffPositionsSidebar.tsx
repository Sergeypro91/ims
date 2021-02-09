import React from 'react';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SPToggleIsSidebarOpened } from 'redux/Staff/StaffPositions/staffPositionsActions';
import { State } from 'redux/store';
import SidebarBlock from 'ui/components/Sidebar/SidebarBlock/SidebarBlock';
import SidebarHeader from 'ui/components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarValue from 'ui/components/Sidebar/SidebarValue/SidebarValue';
import nbsp from 'utils/nbsp/nbsp';
import PleaseSelectRow from 'ui/components/PleaseSelectRow/PleaseSelectRow';

const StaffPositionsSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);

    return (
        <Sidebar
            label="Данные о должности"
            icon="Star"
            isOpen={isSidebarOpened}
            toggleIsOpen={() => dispatch(SPToggleIsSidebarOpened())}
            deletedBadgeActive={selectedRow?.deleted === 1}
        >
            <TabBar>
                <Tab header="Общее" index={0}>
                    <div className="sidebar__wrapper">
                        {selectedRow ? (
                            <>
                                <SidebarBlock>
                                    <SidebarHeader>Наименование должности</SidebarHeader>
                                    <SidebarValue>{selectedRow?.posName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Наименование организации</SidebarHeader>
                                    <SidebarValue>{selectedRow?.shortName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Число сотрудников</SidebarHeader>
                                    <SidebarValue>{selectedRow?.emplCount}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Дата создания</SidebarHeader>
                                    <SidebarValue>{selectedRow?.creationDate || nbsp}</SidebarValue>
                                </SidebarBlock>
                            </>
                        ) : (
                            <PleaseSelectRow />
                        )}
                    </div>
                </Tab>
            </TabBar>
        </Sidebar>
    );
};

export default StaffPositionsSidebar;
