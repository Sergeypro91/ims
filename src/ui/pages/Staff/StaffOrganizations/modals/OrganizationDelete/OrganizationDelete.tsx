import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import closeModal from 'utils/closeModal/closeModal';
import { SODeleteOrganization } from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';

const OrganizationDelete = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.staff.staffOrganizations, shallowEqual);

    const closeCurrentModal = () => {
        closeModal('delete', history);
    };

    return (
        <Modal
            modalName="delete"
            modalHeader="Удаление организации"
            modalIcon="Warning"
            successButtonLabel="Удалить"
            onSuccessClick={() => dispatch(SODeleteOrganization(selectedRow!.organizationUuid, selectedRow!.shortName, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div style={{ margin: '15px', marginTop: '30px', display: 'flex' }}>
                <span>
                    В случае удаления организации, все связанные с ней данные станут недоступны.
                    <br />
                    <br />
                    Вы уверены, что хотите удалить организацию:&nbsp;{selectedRow?.shortName}?
                </span>
            </div>
        </Modal>
    );
};

export default OrganizationDelete;
