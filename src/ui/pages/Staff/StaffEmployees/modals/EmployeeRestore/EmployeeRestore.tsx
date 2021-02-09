import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { SERestoreEmployee } from 'redux/Staff/StaffEmployees/staffEmployeesActions';

const EmployeeRestore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('restore', history);
    };

    return (
        <Modal
            modalName="restore"
            modalHeader="Восстановление сотрудника"
            modalIcon="Warning"
            successButtonLabel="Восстановить"
            onSuccessClick={() => dispatch(SERestoreEmployee(selectedRow!.employeeUuid, selectedRow!.physpersonName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>Вы уверены, что хотите восстановить сотрудника:&nbsp;{selectedRow?.physpersonName}?</span>
            </div>
        </Modal>
    );
};

export default EmployeeRestore;
