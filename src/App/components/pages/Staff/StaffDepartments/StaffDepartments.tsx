import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import _ from 'lodash';
import {
    staffDepartmentsToggleSidebar,
    staffDepartmentsToggleToggleBar
} from 'redux/Staff/StaffDepartments/staffDepartmentsAction';
import StaffDepartmentsToolbar from './toolbar/StaffDepartmentsToolbar';
import StaffDepartmentsTable from './table/StaffDepartmentsTable';
import StaffDepartmentsFilter from './filter/StaffDepartmentsFilter';
import StaffDepartmentsModals from './modals/StaffDepartmentsModals';
import LinkIcon from '../StaffOrganizations/Icon.svg';
import './StaffDepartments.scss';

const StaffDepartments = () => {
    const dispatch = useDispatch();

    const { sidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffDepartments, shallowEqual);

    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const triggerFilterDebounce = _.debounce(toggleSideFilter, 250);

    return (
        <div className="page staff-departments" aria-label="page content">
            <StaffDepartmentsToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <StaffDepartmentsModals />

            <section className="page__wrapper">
                <StaffDepartmentsTable />

                <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                    <StaffDepartmentsFilter />
                </SideFilter>

                <Sidebar
                    sidebarName="Данные о подразделении"
                    icon="Departments"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(staffDepartmentsToggleSidebar())}
                    sidebarTrigger={() => dispatch(staffDepartmentsToggleToggleBar())}>
                    <TabBar>
                        <Tab header="Общие" index={0}>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 15px' }}>
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Наименование подразделения
                                </span>
                                <span
                                    style={{
                                        color: '#293440',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        marginTop: '14px'
                                    }}>
                                    {selectedRow?.name}
                                </span>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Организация
                                </span>
                                <span
                                    style={{
                                        color: '#293440',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        marginTop: '14px'
                                    }}>
                                    {selectedRow?.organization}
                                </span>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Ведущее подразделение
                                </span>
                                <span
                                    style={{
                                        color: '#293440',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        marginTop: '14px'
                                    }}>
                                    Администрация
                                </span>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Руководитель подразделения
                                </span>
                                <span
                                    style={{
                                        color: '#293440',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        marginTop: '14px'
                                    }}>
                                    {selectedRow?.director}
                                </span>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Тип учета
                                </span>
                                <span
                                    style={{
                                        color: '#293440',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        marginTop: '14px'
                                    }}>
                                    2220202020202
                                </span>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Создано
                                </span>
                                <span
                                    style={{
                                        color: '#293440',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        marginTop: '14px'
                                    }}>
                                    5 дней
                                </span>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Код интеграции в 1С
                                </span>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
                                    <img src={LinkIcon} alt="" style={{ cursor: 'pointer' }} />
                                    <span
                                        style={{
                                            marginLeft: '7px',
                                            color: '#293440',
                                            textDecorationLine: 'underline',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            cursor: 'pointer'
                                        }}>
                                        Скопировать код
                                    </span>
                                </div>
                                <div style={{ marginTop: '30px' }} />
                                <span
                                    style={{
                                        color: '#848484',
                                        fontSize: '12px'
                                    }}>
                                    Код внешней интеграции
                                </span>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
                                    <img src={LinkIcon} alt="" style={{ cursor: 'pointer' }} />
                                    <span
                                        style={{
                                            marginLeft: '7px',
                                            color: '#293440',
                                            textDecorationLine: 'underline',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            cursor: 'pointer'
                                        }}>
                                        Скопировать код
                                    </span>
                                </div>
                            </div>
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export default StaffDepartments;
