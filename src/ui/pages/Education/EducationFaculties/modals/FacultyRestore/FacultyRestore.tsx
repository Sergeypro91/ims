import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { EFRestoreFaculty } from 'redux/Education/EducationFaculties/educationFacultiesActions';

const FacultyRestore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.education.educationFaculties, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('restore', history);
    };

    return (
        <Modal
            modalName="restore"
            modalHeader="Восстановление факультета"
            modalIcon="Warning"
            successButtonLabel="Восстановить"
            onSuccessClick={() => dispatch(EFRestoreFaculty(selectedRow!.departmentUuid, selectedRow!.depName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    Вы уверены, что хотите восстановить факультет:&nbsp;
                    {selectedRow?.depName}?
                </span>
            </div>
        </Modal>
    );
};

export default FacultyRestore;
