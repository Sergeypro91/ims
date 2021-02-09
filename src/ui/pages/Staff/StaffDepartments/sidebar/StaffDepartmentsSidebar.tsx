import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { State } from 'redux/store';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { SDToggleIsSidebarOpened } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import SidebarBlock from 'ui/components/Sidebar/SidebarBlock/SidebarBlock';
import SidebarHeader from 'ui/components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarValue from 'ui/components/Sidebar/SidebarValue/SidebarValue';
import nbsp from 'utils/nbsp/nbsp';
import PleaseSelectRow from 'ui/components/PleaseSelectRow/PleaseSelectRow';

const StaffDepartmentsSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffDepartments, shallowEqual);

    return (
        <Sidebar
            label="Данные о подразделении"
            icon="Departments"
            isOpen={isSidebarOpened}
            toggleIsOpen={() => dispatch(SDToggleIsSidebarOpened())}
            deletedBadgeActive={selectedRow?.deleted === 1}
        >
            <TabBar>
                <Tab header="Общие" index={0}>
                    <div className="sidebar__wrapper">
                        {selectedRow ? (
                            <>
                                <SidebarBlock>
                                    <SidebarHeader>Наименование подразделения</SidebarHeader>
                                    <SidebarValue>{selectedRow?.depName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Штатный состав</SidebarHeader>
                                    <SidebarValue>{selectedRow?.emplCount}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Организация</SidebarHeader>
                                    <SidebarValue>{selectedRow?.orgName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Ведущее подразделение</SidebarHeader>
                                    <SidebarValue>{selectedRow?.parentDepartmentName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Руководитель подразделения</SidebarHeader>
                                    <SidebarValue>{selectedRow?.chiefPersonName || nbsp}</SidebarValue>
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

export default StaffDepartmentsSidebar;
