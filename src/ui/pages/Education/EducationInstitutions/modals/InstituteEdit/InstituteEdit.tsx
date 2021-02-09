import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import closeModal from 'utils/closeModal/closeModal';
import Dropdown from 'ui/components/Dropdown/Dropdown';
import { State } from 'redux/store';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { EIEditInstitute } from 'redux/Education/EducationInstitutions/educationInstitutionsActions';
import { SNGetEmployees } from 'redux/Staff/StaffNames/staffNamesActions';

const InstitutionEdit = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { selectedRow } = useSelector((state: State) => state.education.educationInstitutions, shallowEqual);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);
    const initialState = {
        depName: selectedRow?.depName || '',
        chiefPersonUuid: selectedRow?.chiefPersonUuid || ''
    };
    const [inputsState, setInputsState] = useState(initialState);

    useEffect(() => {
        setInputsState(initialState);
        // eslint-disable-next-line
    }, [window.location.pathname]);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    const closeCurrentModal = () => {
        closeModal('edit', history);
    };

    useEffect(() => {
        dispatch(SNGetEmployees());
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            depName: selectedRow?.depName || '',
            chiefPersonUuid: selectedRow?.chiefPersonUuid || ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname, selectedRow]);

    return (
        <Modal
            modalName="edit"
            modalHeader="Редактирование института"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(EIEditInstitute({ ...inputsState, departmentUuid: selectedRow!.departmentUuid }, closeCurrentModal))
            }
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div className="staff-modal__content">
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование института*</span>
                    <Inputs
                        type="text"
                        name="depName"
                        onInputChange={inputHandler}
                        value={inputsState.depName}
                        className="name__label"
                        placeholder="Введите наименование"
                    />
                </div>
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Руководитель института</span>
                    <Dropdown
                        placeholder="Найти сотрудника"
                        idField="id"
                        labelField="name"
                        value={inputsState.chiefPersonUuid}
                        initialLabelValue={selectedRow?.chiefPersonName || ''}
                        onChange={(val) =>
                            setInputsState({
                                ...inputsState,
                                chiefPersonUuid: val ? val.id : ''
                            })
                        }
                        options={employeesNames}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default InstitutionEdit;
