import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { Modal } from 'App/components/global/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import addProps from 'App/components/global/Modal/Dialog/AddModal/addProps';
import editProps from 'App/components/global/Modal/Dialog/EditModal/editProps';
import deleteProps from 'App/components/global/Modal/Alert/DeleteModal/deleteProps';
import InfoModal from 'App/components/global/Modal/Alert/InfoModal/InfoModal';
import WarningModal from 'App/components/global/Modal/Alert/WarningModal/WarningModal';
import ErrorModal from 'App/components/global/Modal/Alert/ErrorModal/ErrorModal';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import _ from 'lodash';
import {
    identifiersRfidToggleSideFilter,
    identifiersRfidToggleSidebar,
    identifiersRfidToggleBar
} from 'redux/Identifiers/IdentifiersRfid/identifiersRfidActions';
import { IdentifiersRfidTable } from './IdentifiersRfidTable/IdentifiersRfidTable';
import { IdentifiersRfidGeneral } from './IdentifiersRfidDataTabs/IdentifiersRfidGeneral/IdentifiersRfidGeneral';
import { IdentifiersRfidHistory } from './IdentifiersRfidDataTabs/IdentifiersRfidHistory/IdentifiersRfidHistory';
import { IdentifiersRfidFilters } from './IdentifiersRfidFilters/IdentifiersRfidFilters';
import './IdentifiersRfid.scss';

const IdentifiersRfidInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sidebarOpened = useSelector((state: State) => state.identifiers.identifiersRfid.sidebarOpened, shallowEqual);
    const selectedRow = useSelector((state: State) => state.identifiers.identifiersRfid.selectedRow, shallowEqual);
    const sideFilter = useSelector((state: State) => state.identifiers.identifiersRfid.sideFilter, shallowEqual);

    const triggerFilter = () => {
        dispatch(identifiersRfidToggleSideFilter());
    };

    const triggerFilterDebounce = _.debounce(triggerFilter, 250);

    return (
        <div className="page identifiers-rfid" aria-label="page content">
            <Toolbar>
                <section className="toolbar__section">
                    <Buttons name="Filter" typical active={sideFilter} size="m" onPress={triggerFilterDebounce} />

                    <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />

                    <Buttons
                        name="Edit"
                        size="m"
                        typical={!!selectedRow}
                        disable={!selectedRow}
                        onPress={selectedRow ? () => openModal('edit', history) : undefined}
                    />

                    <Buttons
                        name="Import"
                        size="m"
                        typical={!!selectedRow}
                        disable={!selectedRow}
                        onPress={() => console.log('Import')}
                    />

                    <Buttons
                        name="Delete"
                        size="m"
                        typical={!!selectedRow}
                        disable={!selectedRow}
                        onPress={selectedRow ? () => openModal('delete', history) : undefined}
                    />
                </section>
            </Toolbar>
            {/* Modals */}

            <Modal
                {...addProps}
                onSuccessClick={() => console.log('RFID ключ добавлен')}
                modalHeader="Добавить RFID ключа"
                modalName="add"
                modalIcon="Info">
                <div>
                    <span>Add</span>
                </div>
            </Modal>

            <ErrorModal>Не удалось получить данные о персонале!</ErrorModal>

            <WarningModal>Внимание, что-то пошло не так! Сделайте что-нибудь!</WarningModal>

            <InfoModal>В системе что-то там произошло. Вам следует знать об этом!</InfoModal>

            <Modal
                {...editProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Редактирование RFID ключа"
                modalName="edit"
                modalIcon="Edit">
                Редактирование
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('RFID ключ удален')}
                modalHeader="Удаление RFID ключа"
                modalName="delete"
                modalIcon="Warning">
                Удаление
            </Modal>

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <IdentifiersRfidTable />

                    <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                        <IdentifiersRfidFilters />
                    </SideFilter>
                </div>

                <Sidebar
                    sidebarName="Данные об идентификаторе"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(identifiersRfidToggleSidebar())}
                    sidebarTrigger={() => dispatch(identifiersRfidToggleBar())}>
                    <TabBar trigger={toggleBar}>
                        <Tab header="Общее" index={0}>
                            <IdentifiersRfidGeneral />
                        </Tab>

                        <Tab header="История" index={1}>
                            <IdentifiersRfidHistory />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export const IdentifiersRfid = memo(IdentifiersRfidInner);