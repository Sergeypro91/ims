import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { useHistory } from 'react-router-dom';
import { SOEditOrganization } from 'redux/Staff/StaffOrganizations/staffOrganizationsActions';
import closeModal from 'utils/closeModal/closeModal';
import { SNGetOrganizations } from 'redux/Staff/StaffNames/staffNamesActions';
import Dropdown from 'ui/components/Dropdown/Dropdown';

const OrganizationEdit = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedRow } = useSelector((state: State) => state.staff.staffOrganizations, shallowEqual);
    const initialState = {
        shortName: selectedRow?.shortName || '',
        legalName: selectedRow?.legalName || '',
        parentOrgUuid: selectedRow?.parentOrgUuid || '',
        inn: selectedRow?.inn || '',
        postAddress: selectedRow?.postAddress || '',
        legalAddress: selectedRow?.legalAddress || '',
        phoneNumber: selectedRow?.phoneNumber || ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const organizationsNames = useSelector((state: State) => state.staff.staffNames.organizations, shallowEqual);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        // INN
        if (target.name === 'inn') {
            if (inputsState.inn.length < 12) {
                if (target.value !== '') {
                    if (new RegExp(/^\d+$/).test(target.value)) {
                        setInputsState({ ...inputsState, [target.name]: target.value });
                    }
                } else {
                    setInputsState({ ...inputsState, [target.name]: target.value });
                }
            } else if (target.value.length < 12) {
                setInputsState({ ...inputsState, [target.name]: target.value });
            }
            // Phone
        } else if (target.name === 'phoneNumber') {
            if (target.value !== '') {
                if (new RegExp(/^\d+$/).test(target.value) || new RegExp(/[-+()]/).test(target.value)) {
                    setInputsState({ ...inputsState, [target.name]: target.value });
                }
            } else {
                setInputsState({ ...inputsState, [target.name]: target.value });
            }
        } else {
            setInputsState({ ...inputsState, [target.name]: target.value });
        }
    };

    const closeCurrentModal = () => {
        closeModal('edit', history);
    };

    useEffect(() => {
        dispatch(SNGetOrganizations());
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            shortName: selectedRow?.shortName || '',
            legalName: selectedRow?.legalName || '',
            parentOrgUuid: selectedRow?.parentOrgUuid || '',
            inn: selectedRow?.inn || '',
            postAddress: selectedRow?.postAddress || '',
            legalAddress: selectedRow?.legalAddress || '',
            phoneNumber: selectedRow?.phoneNumber || ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname, selectedRow]);

    return (
        <Modal
            modalName="edit"
            modalIcon="Edit"
            modalHeader="Редактирование организации"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(
                    SOEditOrganization(
                        {
                            ...inputsState,
                            organizationUuid: selectedRow!.organizationUuid
                        },
                        closeCurrentModal
                    )
                )
            }
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div className="staff-modal__content">
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование краткое*</span>
                    <Inputs
                        type="text"
                        name="shortName"
                        onInputChange={inputHandler}
                        value={inputsState.shortName}
                        className="name__label"
                        placeholder="Введите наименование краткое"
                    />
                </div>
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование полное*</span>
                    <Inputs
                        type="text"
                        name="legalName"
                        onInputChange={inputHandler}
                        value={inputsState.legalName}
                        className="name__label"
                        placeholder="Введите наименование полное"
                    />
                </div>
                <div className="staff-modal__field row">
                    <div>
                        <span className="staff-modal-field__header">Ведущая организация</span>
                        <Dropdown
                            placeholder="Выберите организацию"
                            idField="id"
                            labelField="name"
                            value={inputsState.parentOrgUuid}
                            initialLabelValue={selectedRow?.parentOrgName || ''}
                            onChange={(val) => setInputsState({ ...inputsState, parentOrgUuid: val ? val.id : '' })}
                            options={organizationsNames}
                        />
                    </div>
                    <div>
                        <span className="staff-modal-field__header">ИНН*</span>
                        <Inputs
                            type="text"
                            name="inn"
                            onInputChange={inputHandler}
                            value={inputsState.inn}
                            className="name__label"
                            placeholder="Введите ИНН"
                        />
                    </div>
                </div>
                <div className="staff-modal__field row">
                    <div>
                        <span className="staff-modal-field__header">Юридический адрес*</span>
                        <Inputs
                            type="text"
                            name="legalAddress"
                            onInputChange={inputHandler}
                            value={inputsState.legalAddress}
                            className="name__label"
                            placeholder="Введите адрес"
                        />
                    </div>
                    <div>
                        <span className="staff-modal-field__header">Фактический адрес*</span>
                        <Inputs
                            type="text"
                            name="legalAddress"
                            onInputChange={inputHandler}
                            value={inputsState.legalAddress}
                            className="name__label"
                            placeholder="Введите адрес"
                            disabled
                        />
                    </div>
                </div>
                <div className="staff-modal__field row">
                    <div>
                        <span className="staff-modal-field__header">Контактный телефон*</span>
                        <Inputs
                            type="text"
                            name="phoneNumber"
                            onInputChange={inputHandler}
                            value={inputsState.phoneNumber}
                            className="name__label"
                            placeholder="Введите телефон"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OrganizationEdit;
