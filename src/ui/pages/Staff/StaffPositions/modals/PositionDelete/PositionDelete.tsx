import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SPDeletePosition } from 'redux/Staff/StaffPositions/staffPositionsActions';
import closeModal from 'utils/closeModal/closeModal';

const PositionDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('delete', history);
    };

    return (
        <Modal
            modalName="delete"
            modalHeader="Удаление должности"
            modalIcon="Warning"
            successButtonLabel="Удалить"
            onSuccessClick={() => dispatch(SPDeletePosition(selectedRow!.positionUuid, selectedRow!.posName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    В случае удаления должности, все связанные с ней данные станут недоступны.
                    <br />
                    <br />
                    Вы уверены, что хотите удалить должность:&nbsp;{selectedRow?.posName}?
                </span>
            </div>
        </Modal>
    );
};

export default PositionDelete;
