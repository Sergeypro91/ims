import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import closeModal from 'utils/closeModal/closeModal';
import Dropdown from 'ui/components/Dropdown/Dropdown';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ENGetInstitutions, ENGetFaculties, ENGetDepartments } from 'redux/Education/EducationNames/educationNamesAction';
import { SNGetEmployees } from 'redux/Staff/StaffNames/staffNamesActions';
import { State } from 'redux/store';
import { EGAddGroup } from 'redux/Education/EducationGroups/educationGroupsActions';

const GroupAdd = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialState = {
        depName: '',
        chiefPersonUuid: '',
        instUuid: '',
        facUuid: '',
        depUuid: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);
    const institutionsNames = useSelector((state: State) => state.education.educationNames.institutions, shallowEqual);
    const facultiesNames = useSelector((state: State) => state.education.educationNames.faculties, shallowEqual);
    const departmentsNames = useSelector((state: State) => state.education.educationNames.departments, shallowEqual);

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
        dispatch(ENGetFaculties());
        dispatch(ENGetDepartments());
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            depName: '',
            chiefPersonUuid: '',
            instUuid: '',
            facUuid: '',
            depUuid: ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname]);

    return (
        <Modal
            modalName="add"
            modalHeader="Создание группы"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(
                    EGAddGroup(
                        {
                            ...inputsState,
                            parentDepartmentUuid: inputsState.depUuid
                                ? inputsState.depUuid
                                : inputsState.facUuid
                                ? inputsState.facUuid
                                : inputsState.instUuid
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
                    <span className="staff-modal-field__header">Наименование группы*</span>
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
                    <span className="staff-modal-field__header">Куратор группы</span>
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
                        value={inputsState.instUuid}
                        onChange={(val) =>
                            setInputsState({
                                ...inputsState,
                                instUuid: val ? val.id : ''
                            })
                        }
                        options={institutionsNames}
                    />
                </div>
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Факультет</span>
                    <Dropdown
                        placeholder="Найти факультет"
                        idField="id"
                        labelField="name"
                        value={inputsState.facUuid}
                        onChange={(val) =>
                            setInputsState({
                                ...inputsState,
                                facUuid: val ? val.id : ''
                            })
                        }
                        options={facultiesNames}
                    />
                </div>
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Кафедра</span>
                    <Dropdown
                        placeholder="Найти кафедру"
                        idField="id"
                        labelField="name"
                        value={inputsState.depUuid}
                        onChange={(val) =>
                            setInputsState({
                                ...inputsState,
                                depUuid: val ? val.id : ''
                            })
                        }
                        options={departmentsNames}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default GroupAdd;
