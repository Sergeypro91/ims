import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import closeModal from 'utils/closeModal/closeModal';
import Dropdown from 'ui/components/Dropdown/Dropdown';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { ENGetInstitutions } from 'redux/Education/EducationNames/educationNamesAction';
import { SNGetEmployees } from 'redux/Staff/StaffNames/staffNamesActions';
import { EFEditFaculty } from 'redux/Education/EducationFaculties/educationFacultiesActions';

const FacultyEdit = () => {
    const dispatch = useDispatch();
    const { selectedRow } = useSelector((state: State) => state.education.educationFaculties, shallowEqual);
    const history = useHistory();
    const initialState = {
        depName: selectedRow?.depName || '',
        chiefPersonUuid: selectedRow?.chiefPersonUuid || '',
        parentDepartmentUuid: selectedRow?.parentDepartmentUuid || ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);
    const institutionsNames = useSelector((state: State) => state.education.educationNames.institutions, shallowEqual);

    useEffect(() => {
        setInputsState(initialState);
        // eslint-disable-next-line
    }, [window.location.pathname]);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;

        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    useEffect(() => {
        dispatch(SNGetEmployees());
        dispatch(ENGetInstitutions());
    }, [dispatch]);

    const closeCurrentModal = () => {
        closeModal('edit', history);
    };

    useEffect(() => {
        setInputsState({
            depName: selectedRow?.depName || '',
            chiefPersonUuid: selectedRow?.chiefPersonUuid || '',
            parentDepartmentUuid: selectedRow?.parentDepartmentUuid || ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname, selectedRow]);

    return (
        <Modal
            modalName="edit"
            modalHeader="Редактирование факультета"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(EFEditFaculty({ ...inputsState, departmentUuid: selectedRow?.departmentUuid || '' }, closeCurrentModal))
            }
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div className="staff-modal__content">
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование факультета*</span>
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
                    <span className="staff-modal-field__header">Декан</span>
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
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Институт</span>
                    <Dropdown
                        placeholder="Найти институт"
                        idField="id"
                        labelField="name"
                        value={inputsState.parentDepartmentUuid}
                        initialLabelValue={selectedRow?.instituteName || ''}
                        onChange={(val) =>
                            setInputsState({
                                ...inputsState,
                                parentDepartmentUuid: val ? val.id : ''
                            })
                        }
                        options={institutionsNames}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default FacultyEdit;
