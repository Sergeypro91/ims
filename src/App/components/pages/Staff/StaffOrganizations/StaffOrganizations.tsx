import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import {
    staffOrganizationsToggleSidebar,
    staffOrganizationsToggleToggleBar
} from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import Accordion from 'App/components/pages/Staff/StaffPositions/filter/Accordion/Accordion';
import StaffOrganizationsToolbar from './toolbar/StaffOrganizationsToolbar';
import StaffOrganizationsTable from './table/StaffOrganizationsTable';
import StaffOrganizationsModals from './modals/StaffOrganizationsModals';
import LinkIcon from './Icon.svg';
import './StaffOrganizations.scss';

const StaffOrganizations = () => {
    const dispatch = useDispatch();
    const { sidebarOpened, selectedRow } = useSelector((state: State) => state.staff.staffOrganizations, shallowEqual);

    return (
        <div className="page staff-organizations" aria-label="page content">
            <StaffOrganizationsToolbar />

            <StaffOrganizationsModals />

            <section className="page__wrapper">
                <StaffOrganizationsTable />

                <Sidebar
                    sidebarName="Данные об организации"
                    icon="Organization"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(staffOrganizationsToggleSidebar())}
                    sidebarTrigger={() => dispatch(staffOrganizationsToggleToggleBar())}>
                    <TabBar>
                        <Tab header="Общие" index={0}>
                            <>
                                <Accordion header="Общие сведения">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            Наименование краткое
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
                                            Наименование полное
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            Общество с ограниченной ответственностью “Питон Плюс”
                                        </span>
                                        <div style={{ marginTop: '30px' }} />
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            Головная организация
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            ООО “АЛЬЯНС“
                                        </span>
                                        <div style={{ marginTop: '30px' }} />
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            ИНН
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            {selectedRow?.inn}
                                        </span>
                                        <div style={{ marginTop: '30px' }} />
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            Дата создания
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            {selectedRow?.createdAt}
                                        </span>
                                    </div>
                                </Accordion>
                                <Accordion header="Контакты">
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
                                            Юридический адрес
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            г. Брянск, ул. Автозаводская, д.16
                                        </span>
                                        <div style={{ marginTop: '30px' }} />
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            Фактический адрес
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            г. Брянск, ул. Маслозаводская, д.119
                                        </span>
                                        <div style={{ marginTop: '30px' }} />
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            Телефон
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            45 45 45
                                        </span>
                                        <div style={{ marginTop: '30px' }} />
                                        <span
                                            style={{
                                                color: '#848484',
                                                fontSize: '12px'
                                            }}>
                                            E-mail
                                        </span>
                                        <span
                                            style={{
                                                color: '#293440',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                marginTop: '14px'
                                            }}>
                                            pythonplus@gmail.com
                                        </span>
                                    </div>
                                </Accordion>
                                <div
                                    style={{
                                        marginTop: '30px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginLeft: '15px',
                                        marginRight: '15px',
                                        marginBottom: '30px'
                                    }}>
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
                            </>
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export default StaffOrganizations;
