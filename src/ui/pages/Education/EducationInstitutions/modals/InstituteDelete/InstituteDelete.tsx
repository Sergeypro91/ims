import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { EIDeleteInstitute } from 'redux/Education/EducationInstitutions/educationInstitutionsActions';

const InstitutionDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.education.educationInstitutions, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('delete', history);
    };

    return (
        <Modal
            modalName="delete"
            modalHeader="Удаление института"
            modalIcon="Warning"
            successButtonLabel="Удалить"
            onSuccessClick={() => dispatch(EIDeleteInstitute(selectedRow!.departmentUuid, selectedRow!.depName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    В случае удаления института, все связанные с ним данные станут недоступны.
                    <br />
                    <br />
                    Вы уверены, что хотите удалить институт:&nbsp;
                    {selectedRow?.depName}?
                </span>
            </div>
        </Modal>
    );
};

export default InstitutionDelete;
