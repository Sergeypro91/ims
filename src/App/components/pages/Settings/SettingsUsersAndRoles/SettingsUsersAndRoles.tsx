import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
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
import { SettingsUsersAndRolesTable } from './SettingsUsersAndRolesTable/SettingsUsersAndRolesTable';
import { SettingsUsersAndRolesEdit } from './SettingsUsersAndRolesEdit/SettingsUsersAndRolesEdit';
import { SettingsUsersAndRolesAdd } from './SettingsUsersAndRolesAdd/SettingsUsersAndRolesAdd';
import './SettingsUsersAndRoles.scss';

const SettingsUsersAndRolesInner = () => {
    const history = useHistory();
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
                        disable={false}
                        onPress={() => openModal('edit', history)}
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
                onSuccessClick={() => console.log('Пользователь добавлен')}
                modalHeader="Создание пользователя"
                modalName="add"
                modalIcon="add">
                <div>
                    <SettingsUsersAndRolesAdd />
                </div>
            </Modal>

            <ErrorModal>Не удалось получить данные о пользователе!</ErrorModal>

            <WarningModal>Внимание, что-то пошло не так! Сделайте что-нибудь!</WarningModal>

            <InfoModal>В системе что-то там произошло. Вам следует знать об этом!</InfoModal>

            <Modal
                {...editProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Редактирование пользователя"
                modalName="edit"
                modalIcon="Edit">
                <SettingsUsersAndRolesEdit />
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('Пользователь удален')}
                modalHeader="Удаление пользователя"
                modalName="delete"
                modalIcon="Warning">
                Удаление
            </Modal>

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <SettingsUsersAndRolesTable />
                </div>
            </section>
        </div>
    );
};

export const SettingsUsersAndRoles = memo(SettingsUsersAndRolesInner);
