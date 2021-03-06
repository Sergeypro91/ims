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
import { EGEditGroup } from 'redux/Education/EducationGroups/educationGroupsActions';

const GroupEdit = () => {
    const dispatch = useDispatch();
    const { selectedRow } = useSelector((state: State) => state.education.educationGroups, shallowEqual);
    const history = useHistory();
    const initialState = {
        depName: selectedRow?.depName || '',
        chiefPersonUuid: selectedRow?.chiefPersonUuid || '',
        instUuid: selectedRow?.instituteUuid || '',
        facUuid: selectedRow?.facultyUuid || '',
        depUuid: selectedRow?.tribuneUuid || ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);
    const institutionsNames = useSelector((state: State) => state.education.educationNames.institutions, shallowEqual);
    const facultiesNames = useSelector((state: State) => state.education.educationNames.faculties, shallowEqual);
    const departmentsNames = useSelector((state: State) => state.education.educationNames.departments, shallowEqual);

    useEffect(() => {
        dispatch(SNGetEmployees());
        dispatch(ENGetInstitutions());
        dispatch(ENGetFaculties());
        dispatch(ENGetDepartments());
    }, [dispatch]);

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
        setInputsState({
            depName: selectedRow?.depName || '',
            chiefPersonUuid: selectedRow?.chiefPersonUuid || '',
            instUuid: selectedRow?.instituteUuid || '',
            facUuid: selectedRow?.facultyUuid || '',
            depUuid: selectedRow?.tribuneUuid || ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname]);

    return (
        <Modal
            modalName="edit"
            modalHeader="Редактирование группы"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(
                    EGEditGroup(
                        {
                            ...inputsState,
                            parentDepartmentUuid: inputsState.depUuid
                                ? inputsState.depUuid
                                : inputsState.facUuid
                                ? inputsState.facUuid
                                : inputsState.instUuid,
                            departmentUuid: selectedRow?.departmentUuid || ''
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
                        initialLabelValue={selectedRow?.instituteName || ''}
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
                        initialLabelValue={selectedRow?.facultyName || ''}
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
                        initialLabelValue={selectedRow?.tribuneName || ''}
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

export default GroupEdit;
