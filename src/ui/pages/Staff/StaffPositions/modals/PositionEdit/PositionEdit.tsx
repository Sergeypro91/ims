import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SPEditPosition } from 'redux/Staff/StaffPositions/staffPositionsActions';
import closeModal from 'utils/closeModal/closeModal';
import { SNGetOrganizations } from 'redux/Staff/StaffNames/staffNamesActions';
import Dropdown from 'ui/components/Dropdown/Dropdown';

const PositionEdit = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedRow } = useSelector((state: State) => state.staff.staffPositions, shallowEqual);
    const organizationsNames = useSelector((state: State) => state.staff.staffNames.organizations, shallowEqual);

    const initialState = {
        posName: selectedRow?.posName || '',
        orgUuid: selectedRow?.posName || ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    useEffect(() => {
        setInputsState({
            posName: selectedRow?.posName || '',
            orgUuid: selectedRow?.posName || ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname, selectedRow]);

    const closeCurrentModal = () => {
        closeModal('edit', history);
    };

    useEffect(() => {
        dispatch(SNGetOrganizations());
    }, [dispatch]);

    return (
        <Modal
            modalName="edit"
            modalIcon="Edit"
            modalHeader="Редактирование должности"
            successButtonLabel="Сохранить"
            onSuccessClick={() => dispatch(SPEditPosition({ ...inputsState, positionUuid: selectedRow!.positionUuid }, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div className="staff-modal__content">
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование должности*</span>
                    <Inputs
                        type="text"
                        name="posName"
                        onInputChange={inputHandler}
                        value={inputsState.posName}
                        className="name__label"
                        placeholder="Введите наименование"
                    />
                </div>
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование организации*</span>
                    <Dropdown
                        placeholder="Найти организацию"
                        idField="id"
                        labelField="name"
                        initialLabelValue={selectedRow?.shortName || ''}
                        value={inputsState.orgUuid}
                        onChange={(val) => setInputsState({ ...inputsState, orgUuid: val ? val.id : '' })}
                        options={organizationsNames}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default PositionEdit;
