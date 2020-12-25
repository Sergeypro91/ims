import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from 'App/../redux/store';
import { Modal } from 'App/components/global/Modal/Modal';
import InfoModal from 'App/components/global/Modal/Alert/InfoModal/InfoModal';
import WarningModal from 'App/components/global/Modal/Alert/WarningModal/WarningModal';
import ErrorModal from 'App/components/global/Modal/Alert/ErrorModal/ErrorModal';
import DepartmentAdd from './DepartmentAdd/DepartmentAdd';
import DepartmentEdit from './DepartmentEdit/DepartmentEdit';

const StaffDepartmentsModals = () => {
    const location = useLocation();
    const history = useHistory();
    const selectedRow = useSelector((state: State) => state.staff.staffDepartments.selectedRow, shallowEqual);

    return (
        <>
            <Modal
                modalName="add"
                modalHeader="Создание подразделения"
                modalIcon="Info"
                successButtonLabel="Сохранить"
                onSuccessClick={() => history.push(location.pathname.replace('/add', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/add', ''))}>
                <div>
                    <DepartmentAdd />
                </div>
            </Modal>

            <ErrorModal>Не удалось получить данные об организациях!</ErrorModal>

            <WarningModal>Внимание, что-то пошло не так! Сделайте что-нибудь!</WarningModal>

            <InfoModal>В системе что-то там произошло. Вам следует знать об этом!</InfoModal>

            <Modal
                modalName="edit"
                modalIcon="Edit"
                modalHeader="Редактирование подразделения"
                successButtonLabel="Сохранить"
                onSuccessClick={() => history.push(location.pathname.replace('/edit', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/edit', ''))}>
                <div>
                    <DepartmentEdit />
                </div>
            </Modal>

            <Modal
                modalName="delete"
                modalHeader="Удаление подразделения"
                modalIcon="Warning"
                successButtonLabel="Удалить"
                onSuccessClick={() => history.push(location.pathname.replace('/delete', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/delete', ''))}>
                {selectedRow ? (
                    <span>
                        Вы уверены, что хотите удалить подразделение:
                        <br />
                        {selectedRow.name}?
                    </span>
                ) : (
                    <span>это подразделение?</span>
                )}
            </Modal>
        </>
    );
};

export default StaffDepartmentsModals;
