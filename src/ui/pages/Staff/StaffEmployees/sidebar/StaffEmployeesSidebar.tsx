import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { State } from 'redux/store';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import { TabBar } from 'ui/components/TabBar/TabBar';
// import { SDToggleIsSidebarOpened } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import SidebarBlock from 'ui/components/Sidebar/SidebarBlock/SidebarBlock';
import SidebarHeader from 'ui/components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarValue from 'ui/components/Sidebar/SidebarValue/SidebarValue';
import nbsp from 'utils/nbsp/nbsp';
import PleaseSelectRow from 'ui/components/PleaseSelectRow/PleaseSelectRow';
import { SEToggleIsSidebarOpened } from 'redux/Staff/StaffEmployees/staffEmployeesActions';
import imgPlacehoder from 'utils/userImgPlaceholder';

const StaffEmployeesSidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpened, extendedEmployee } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    return (
        <Sidebar
            label="Данные о сотруднике"
            icon="Departments"
            isOpen={isSidebarOpened}
            toggleIsOpen={() => dispatch(SEToggleIsSidebarOpened())}
            deletedBadgeActive={extendedEmployee?.deleted === 1}
        >
            <TabBar>
                <Tab header="Общие" index={0}>
                    <div className="sidebar__wrapper">
                        {extendedEmployee ? (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '180px',
                                                height: '160px'
                                            }}
                                        >
                                            <img
                                                alt="employee"
                                                style={{ height: '160px', borderRadius: '10px' }}
                                                src={`data:image/jpeg;base64,${extendedEmployee.photoCompressed || imgPlacehoder}`}
                                            />
                                        </div>
                                        <div style={{ marginLeft: '20px' }} />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <SidebarBlock>
                                                <SidebarHeader>Фамилия</SidebarHeader>
                                                <SidebarValue>{extendedEmployee.lastName || nbsp}</SidebarValue>
                                                <div style={{ marginTop: '18px' }} />
                                                <SidebarHeader>Имя</SidebarHeader>
                                                <SidebarValue>{extendedEmployee.firstName || nbsp}</SidebarValue>
                                                <div style={{ marginTop: '18px' }} />
                                                <SidebarHeader>Отчество</SidebarHeader>
                                                <SidebarValue>{extendedEmployee.middleName || nbsp}</SidebarValue>
                                            </SidebarBlock>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '30px' }} />
                                    <SidebarBlock>
                                        <SidebarHeader>Организация</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.organizationName || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Подразделение</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.departmentName || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Должность</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.positionName || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Руководитель подразделения</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.chiefEmployeeName || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Дата приёма</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.employmentDate || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Дата увольнения</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.dismissedDate || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Телефон</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.extensionPhone || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                    <SidebarBlock>
                                        <SidebarHeader>Электронная почта</SidebarHeader>
                                        <SidebarValue>{extendedEmployee.corporateEmail || nbsp}</SidebarValue>
                                    </SidebarBlock>
                                </div>
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

export default StaffEmployeesSidebar;
