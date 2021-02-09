import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { EGDeleteGroup } from 'redux/Education/EducationGroups/educationGroupsActions';

const GroupDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.education.educationGroups, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('delete', history);
    };

    return (
        <Modal
            modalName="delete"
            modalHeader="Удаление группы"
            modalIcon="Warning"
            successButtonLabel="Удалить"
            onSuccessClick={() => dispatch(EGDeleteGroup(selectedRow!.departmentUuid, selectedRow!.depName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    В случае удаления группы, все связанные с ним данные станут недоступны.
                    <br />
                    <br />
                    Вы уверены, что хотите удалить группу:&nbsp;
                    {selectedRow?.depName}?
                </span>
            </div>
        </Modal>
    );
};

export default GroupDelete;
