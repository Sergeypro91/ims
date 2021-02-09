import React from 'react';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SOToggleIsSidebarOpened } from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import SidebarHeader from 'ui/components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarValue from 'ui/components/Sidebar/SidebarValue/SidebarValue';
import SidebarBlock from 'ui/components/Sidebar/SidebarBlock/SidebarBlock';
import { Accordion } from 'ui/components/Accordion/Accordion';
import nbsp from 'utils/nbsp/nbsp';
import PleaseSelectRow from 'ui/components/PleaseSelectRow/PleaseSelectRow';

const StaffOrganizationsSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffOrganizations, shallowEqual);

    return (
        <Sidebar
            label="Данные об организации"
            icon="Organization"
            isOpen={isSidebarOpened}
            toggleIsOpen={() => dispatch(SOToggleIsSidebarOpened())}
            deletedBadgeActive={selectedRow?.deleted === 1}
        >
            <TabBar>
                <Tab header="Общие" index={0}>
                    <div className="sidebar__wrapper">
                        {selectedRow ? (
                            <>
                                <Accordion type="simple" header="Общие сведения">
                                    <>
                                        <SidebarBlock>
                                            <SidebarHeader>Наименование краткое</SidebarHeader>
                                            <SidebarValue>{selectedRow?.shortName || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                        <SidebarBlock>
                                            <SidebarHeader>Наименование полное</SidebarHeader>
                                            <SidebarValue>{selectedRow?.legalName || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                        <SidebarBlock>
                                            <SidebarHeader>Ведущая организация</SidebarHeader>
                                            <SidebarValue>{selectedRow?.parentOrgName || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                        <SidebarBlock>
                                            <SidebarHeader>ИНН</SidebarHeader>
                                            <SidebarValue>{selectedRow?.inn || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                        <SidebarBlock>
                                            <SidebarHeader>Дата создания</SidebarHeader>
                                            <SidebarValue>{selectedRow?.creationDate || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                    </>
                                </Accordion>
                                <Accordion type="simple" header="Контакты">
                                    <>
                                        <SidebarBlock>
                                            <SidebarHeader>Юридический адрес</SidebarHeader>
                                            <SidebarValue>{selectedRow?.legalAddress || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                        <SidebarBlock>
                                            <SidebarHeader>Контактный телефон</SidebarHeader>
                                            <SidebarValue>{selectedRow?.phoneNumber || nbsp}</SidebarValue>
                                        </SidebarBlock>
                                    </>
                                </Accordion>
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

export default StaffOrganizationsSidebar;
