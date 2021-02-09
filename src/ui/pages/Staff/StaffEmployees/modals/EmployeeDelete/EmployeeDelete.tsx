import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { SEDeleteEmployee } from 'redux/Staff/StaffEmployees/staffEmployeesActions';

const EmployeeDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('delete', history);
    };

    return (
        <Modal
            modalName="delete"
            modalHeader="Увольнение сотрудника"
            modalIcon="Warning"
            successButtonLabel="Удалить"
            onSuccessClick={() => dispatch(SEDeleteEmployee(selectedRow!.employeeUuid, selectedRow!.physpersonName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    В случае увольнения сотрудника, все связанные с ним данные станут недоступны.
                    <br />
                    <br />
                    Вы уверены, что хотите уволить сотрудника:&nbsp;{selectedRow?.physpersonName}?
                </span>
            </div>
        </Modal>
    );
};

export default EmployeeDelete;
