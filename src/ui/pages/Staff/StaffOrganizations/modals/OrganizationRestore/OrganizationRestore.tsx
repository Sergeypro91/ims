import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SORestoreOrganization } from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';
import closeModal from 'utils/closeModal/closeModal';

const OrganizationRestore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffOrganizations, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('restore', history);
    };

    return (
        <Modal
            modalName="restore"
            modalHeader="Восстановление организации"
            modalIcon="Warning"
            successButtonLabel="Восстановить"
            onSuccessClick={() => dispatch(SORestoreOrganization(selectedRow!.organizationUuid, selectedRow!.shortName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>Вы уверены, что хотите восстановить организацию:&nbsp;{selectedRow?.shortName}?</span>
            </div>
        </Modal>
    );
};

export default OrganizationRestore;
