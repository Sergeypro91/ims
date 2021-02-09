import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SDDeleteDepartment } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import closeModal from 'utils/closeModal/closeModal';

const DepartmentDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffDepartments, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('delete', history);
    };

    return (
        <Modal
            modalName="delete"
            modalHeader="Удаление подразделения"
            modalIcon="Warning"
            successButtonLabel="Удалить"
            onSuccessClick={() => dispatch(SDDeleteDepartment(selectedRow!.departmentUuid, selectedRow!.depName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    В случае удаления подразделения, все связанные с ним данные станут недоступны.
                    <br />
                    <br />
                    Вы уверены, что хотите удалить подразделение:&nbsp;{selectedRow?.depName}?
                </span>
            </div>
        </Modal>
    );
};

export default DepartmentDelete;
