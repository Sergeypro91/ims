import React from 'react';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { EIToggleIsSidebarOpened } from 'redux/Education/EducationInstitutions/educationInstitutionsActions';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import SidebarHeader from 'ui/components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarValue from 'ui/components/Sidebar/SidebarValue/SidebarValue';
import SidebarBlock from 'ui/components/Sidebar/SidebarBlock/SidebarBlock';
import nbsp from 'utils/nbsp/nbsp';
import PleaseSelectRow from 'ui/components/PleaseSelectRow/PleaseSelectRow';

const EducationInstitutionsSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpened, selectedRow } = useSelector((state: State) => state.education.educationInstitutions, shallowEqual);

    return (
        <Sidebar
            label="Данные об институте"
            icon="Institutions"
            isOpen={isSidebarOpened}
            toggleIsOpen={() => dispatch(EIToggleIsSidebarOpened())}
            deletedBadgeActive={
                // @ts-ignore
                selectedRow?.deleted === 1
            }
        >
            <TabBar>
                <Tab header="Общие" index={0}>
                    <div className="sidebar__wrapper">
                        {selectedRow ? (
                            <>
                                <SidebarBlock>
                                    <SidebarHeader>Наименование института</SidebarHeader>
                                    <SidebarValue>{selectedRow.depName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Руководитель</SidebarHeader>
                                    <SidebarValue>{selectedRow.chiefPersonName || nbsp}</SidebarValue>
                                </SidebarBlock>
                                <SidebarBlock>
                                    <SidebarHeader>Дата создания</SidebarHeader>
                                    <SidebarValue>{selectedRow.creationDate || nbsp}</SidebarValue>
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

export default EducationInstitutionsSidebar;
