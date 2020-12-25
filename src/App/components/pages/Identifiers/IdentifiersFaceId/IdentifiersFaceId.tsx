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
import {
    identifiersFaceIdToggleSidebar,
    identifiersFaceIdToggleBar
} from 'redux/Identifiers/IdentifiersFaceId/identifiersFaceIdActions';
import { IdentifiersFaceIdGeneral } from './IdentifiersFaceIdDataTabs/IdentifiersFaceIdGeneral/IdentifiersFaceIdGeneral';
import { IdentifiersFaceIdTable } from './IdentifiersFaceIdTable/IdentifiersFaceIdTable';
import './IdentifiersFaceId.scss';

const IdentifiersFaceIdInner = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sidebarOpened = useSelector(
        (state: State) => state.identifiers.identifiersFaceId.sidebarOpened,
        shallowEqual
    );
    const selectedRow = useSelector((state: State) => state.identifiers.identifiersFaceId.selectedRow, shallowEqual);

    return (
        <div className="page identifiers-faceid" aria-label="page content">
            <Toolbar>
                <section className="toolbar__section">
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
                onSuccessClick={() => console.log('Идентификатор добавлен')}
                modalHeader="Добавить идентификатор"
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
                modalHeader="Редактирование идентификатора"
                modalName="edit"
                modalIcon="Edit">
                Редактирование
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('Идентификатор удален')}
                modalHeader="Удаление идентификатора"
                modalName="delete"
                modalIcon="Warning">
                Удаление
            </Modal>

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <IdentifiersFaceIdTable />
                </div>

                <Sidebar
                    sidebarName="Данные об Face ID"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(identifiersFaceIdToggleSidebar())}
                    sidebarTrigger={() => dispatch(identifiersFaceIdToggleBar())}>
                    <TabBar trigger={toggleBar}>
                        <Tab header="Общее" index={0}>
                            <IdentifiersFaceIdGeneral />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export const IdentifiersFaceId = memo(IdentifiersFaceIdInner);
