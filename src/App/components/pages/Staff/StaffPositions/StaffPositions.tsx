/* React */
import _ from 'lodash';
import React, { useState } from 'react';
/* Styles */
import './StaffPositions.scss';
/* Components */
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import {
    staffPositionsToggleSidebar,
    staffPositionsToggleToggleBar
} from 'redux/Staff/StaffPositions/staffPositionsActions';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import StaffPositionsModals from './modals/StaffPositionsModals';
import StaffPositionsFilter from './filter/StaffPositionsFilter';
import StaffPositionsTable from './table/StaffPositionsTable';
import StaffPositionsToolbar from './toolbar/StaffPositionsToolbar';

/* StaffPositions */
const StaffPositions = () => {
    const dispatch = useDispatch();
    const { sidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);

    /* SideFilter */
    const [sideFilter, setSideFilter] = useState(false);

    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    const triggerFilterDebounce = _.debounce(toggleSideFilter, 250);
    /*  */

    return (
        <div className="page staff-positions" aria-label="page content">
            <StaffPositionsToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <StaffPositionsModals />

            <section className="page__wrapper">
                <StaffPositionsTable />

                <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                    <StaffPositionsFilter />
                </SideFilter>

                <Sidebar
                    sidebarName="Данные о должности"
                    icon="Star"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(staffPositionsToggleSidebar())}
                    sidebarTrigger={() => dispatch(staffPositionsToggleToggleBar())}>
                    <TabBar>
                        <Tab header="Общее" index={0}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '20px 15px'
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <span
                                        style={{
                                            color: '#848484',
                                            fontSize: '12px'
                                        }}>
                                        Наименование должности
                                    </span>
                                    <span
                                        style={{
                                            color: '#293440',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            marginTop: '15px'
                                        }}>
                                        {selectedRow?.name}
                                    </span>
                                </div>
                                <div style={{ marginTop: '30px' }} />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <span
                                        style={{
                                            color: '#848484',
                                            fontSize: '12px'
                                        }}>
                                        Наименование организации
                                    </span>
                                    <span
                                        style={{
                                            color: '#293440',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            marginTop: '15px'
                                        }}>
                                        Общество с ограниченной ответственностью “Питон Плюс”
                                    </span>
                                </div>
                                <div style={{ marginTop: '30px' }} />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    <span
                                        style={{
                                            color: '#848484',
                                            fontSize: '12px'
                                        }}>
                                        Число сотрудников
                                    </span>
                                    <span
                                        style={{
                                            color: '#293440',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            marginTop: '15px'
                                        }}>
                                        {selectedRow?.count}
                                    </span>
                                </div>
                                <div style={{ marginTop: '30px' }} />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
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
                                            marginTop: '15px'
                                        }}>
                                        {selectedRow?.createdAt}
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

export default StaffPositions;
