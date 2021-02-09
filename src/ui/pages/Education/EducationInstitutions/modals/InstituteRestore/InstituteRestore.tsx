import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { EIRestoreInstitute } from 'redux/Education/EducationInstitutions/educationInstitutionsActions';

const InstitutionRestore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.education.educationInstitutions, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('restore', history);
    };

    return (
        <Modal
            modalName="restore"
            modalHeader="Восстановление института"
            modalIcon="Warning"
            successButtonLabel="Восстановить"
            onSuccessClick={() => dispatch(EIRestoreInstitute(selectedRow!.departmentUuid, selectedRow!.depName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    Вы уверены, что хотите восстановить институт:&nbsp;
                    {selectedRow?.depName}?
                </span>
            </div>
        </Modal>
    );
};

export default InstitutionRestore;
