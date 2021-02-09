import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SPRestorePosition } from 'redux/Staff/StaffPositions/staffPositionsActions';
import closeModal from 'utils/closeModal/closeModal';

const PositionRestore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('restore', history);
    };

    return (
        <Modal
            modalName="restore"
            modalHeader="Восстановление должности"
            modalIcon="Warning"
            successButtonLabel="Восстановить"
            onSuccessClick={() => dispatch(SPRestorePosition(selectedRow!.positionUuid, selectedRow!.posName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>Вы уверены, что хотите восстановить должность:&nbsp;{selectedRow?.posName}?</span>
            </div>
        </Modal>
    );
};

export default PositionRestore;
