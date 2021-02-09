import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import { SPAddPosition } from 'redux/Staff/StaffPositions/staffPositionsActions';
import closeModal from 'utils/closeModal/closeModal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { SNGetOrganizations } from 'redux/Staff/StaffNames/staffNamesActions';
import Dropdown from 'ui/components/Dropdown/Dropdown';

const PositionAdd = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const initialState = {
        posName: '',
        orgUuid: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const organizationsNames = useSelector((state: State) => state.staff.staffNames.organizations, shallowEqual);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    const closeCurrentModal = () => {
        closeModal('add', history);
    };

    useEffect(() => {
        setInputsState(initialState);
        // eslint-disable-next-line
    }, [window.location.pathname]);

    useEffect(() => {
        dispatch(SNGetOrganizations());
    }, [dispatch]);

    return (
        <Modal
            modalName="add"
            modalHeader="Создание должности"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() => dispatch(SPAddPosition(inputsState, closeCurrentModal))}
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
                        value={inputsState.orgUuid}
                        onChange={(val) => setInputsState({ ...inputsState, orgUuid: val ? val.id : '' })}
                        options={organizationsNames}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default PositionAdd;
