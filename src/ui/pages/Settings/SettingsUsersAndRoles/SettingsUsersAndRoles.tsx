import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { Modal } from 'ui/components/Modal/Modal';
import openModal from 'utils/openModal/openModal';
import addProps from 'ui/components/Modal/Dialog/AddModal/addProps';
import editProps from 'ui/components/Modal/Dialog/EditModal/editProps';
import deleteProps from 'ui/components/Modal/Alert/DeleteModal/deleteProps';
import InfoModal from 'ui/components/Modal/Alert/InfoModal/InfoModal';
import WarningModal from 'ui/components/Modal/Alert/WarningModal/WarningModal';
import ErrorModal from 'ui/components/Modal/Alert/ErrorModal/ErrorModal';
import Toolbar from 'ui/components/Toolbar/Toolbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
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
                <Buttons name="Add" size="m" typical onPress={() => openModal('add', history)} />
                <Buttons name="Edit" size="m" typical={!!selectedRow} disable={false} onPress={() => openModal('edit', history)} />
                <Buttons
                    name="Delete"
                    size="m"
                    typical={!!selectedRow}
                    disable={!selectedRow}
                    onPress={selectedRow ? () => openModal('delete', history) : undefined}
                />
            </Toolbar>
            {/* Modals */}

            <Modal
                {...addProps}
                onSuccessClick={() => console.log('Пользователь добавлен')}
                modalHeader="Создание пользователя"
                modalName="add"
                modalIcon="add"
            >
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
                modalIcon="Edit"
            >
                <SettingsUsersAndRolesEdit />
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('Пользователь удален')}
                modalHeader="Удаление пользователя"
                modalName="delete"
                modalIcon="Warning"
            >
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
