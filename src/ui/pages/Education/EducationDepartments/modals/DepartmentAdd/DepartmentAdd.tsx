import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import closeModal from 'utils/closeModal/closeModal';
import Dropdown from 'ui/components/Dropdown/Dropdown';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SNGetEmployees } from 'redux/Staff/StaffNames/staffNamesActions';
import { ENGetFaculties, ENGetInstitutions } from 'redux/Education/EducationNames/educationNamesAction';
import { State } from 'redux/store';
import { EDAddDepartment } from 'redux/Education/EducationDepartments/educationDepartmentsActions';

const DepartmentAdd = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialState = {
        depName: '',
        chiefPersonUuid: '',
        instUuid: '',
        facUuid: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);
    const institutionsNames = useSelector((state: State) => state.education.educationNames.institutions, shallowEqual);
    const facultiesNames = useSelector((state: State) => state.education.educationNames.faculties, shallowEqual);

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
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            depName: '',
            chiefPersonUuid: '',
            instUuid: '',
            facUuid: ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname]);

    return (
        <Modal
            modalName="add"
            modalHeader="Создание кафедры"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(
                    EDAddDepartment(
                        {
                            ...inputsState,
                            parentDepartmentUuid: inputsState.facUuid ? inputsState.facUuid : inputsState.instUuid
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
                    <span className="staff-modal-field__header">Наименование кафедры*</span>
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
                    <span className="staff-modal-field__header">Заведующий кафедрой</span>
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
            </div>
        </Modal>
    );
};

export default DepartmentAdd;
