import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import closeModal from 'utils/closeModal/closeModal';
import Dropdown from 'ui/components/Dropdown/Dropdown';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { EFAddFaculty } from 'redux/Education/EducationFaculties/educationFacultiesActions';
import { State } from 'redux/store';
import { SNGetEmployees } from 'redux/Staff/StaffNames/staffNamesActions';
import { ENGetInstitutions } from 'redux/Education/EducationNames/educationNamesAction';

const FacultyAdd = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialState = {
        depName: '',
        chiefPersonUuid: '',
        parentDepartmentUuid: ''
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

    const closeCurrentModal = () => {
        closeModal('add', history);
    };

    useEffect(() => {
        dispatch(SNGetEmployees());
        dispatch(ENGetInstitutions());
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            depName: '',
            chiefPersonUuid: '',
            parentDepartmentUuid: ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname]);

    return (
        <Modal
            modalName="add"
            modalHeader="Создание факультета"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() => dispatch(EFAddFaculty(inputsState, closeCurrentModal))}
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

export default FacultyAdd;
