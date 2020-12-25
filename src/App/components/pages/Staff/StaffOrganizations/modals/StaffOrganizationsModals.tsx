import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from 'App/../redux/store';
import { Modal } from 'App/components/global/Modal/Modal';
import InfoModal from 'App/components/global/Modal/Alert/InfoModal/InfoModal';
import WarningModal from 'App/components/global/Modal/Alert/WarningModal/WarningModal';
import ErrorModal from 'App/components/global/Modal/Alert/ErrorModal/ErrorModal';
import OrganizationAdd from './OrganizationAdd/OrganizationAdd';
import OrganizationEdit from './OrganizationEdit/OrganizationEdit';

const StaffOrganizationsModals = () => {
    const location = useLocation();
    const history = useHistory();
    const selectedRow = useSelector((state: State) => state.staff.staffOrganizations.selectedRow, shallowEqual);

    return (
        <>
            <Modal
                modalName="add"
                modalHeader="Создание организации"
                modalIcon="Info"
                successButtonLabel="Сохранить"
                onSuccessClick={() => history.push(location.pathname.replace('/add', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/add', ''))}>
                <div>
                    <OrganizationAdd />
                </div>
            </Modal>

            <ErrorModal>Не удалось получить данные об организациях!</ErrorModal>

            <WarningModal>Внимание, что-то пошло не так! Сделайте что-нибудь!</WarningModal>

            <InfoModal>В системе что-то там произошло. Вам следует знать об этом!</InfoModal>

            <Modal
                modalName="edit"
                modalIcon="Edit"
                modalHeader="Редактирование организации"
                successButtonLabel="Сохранить"
                onSuccessClick={() => history.push(location.pathname.replace('/edit', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/edit', ''))}>
                <div>
                    <OrganizationEdit />
                </div>
            </Modal>

            <Modal
                modalName="delete"
                modalHeader="Удаление организации"
                modalIcon="Warning"
                successButtonLabel="Удалить"
                onSuccessClick={() => history.push(location.pathname.replace('/delete', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/delete', ''))}>
                {selectedRow ? (
                    <span>
                        Вы уверены, что хотите удалить организацию:
                        <br />
                        {selectedRow.name}?
                    </span>
                ) : (
                    <span>эту организацию?</span>
                )}
            </Modal>
        </>
    );
};

export default StaffOrganizationsModals;
