import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import { SDAddDepartment } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import closeModal from 'utils/closeModal/closeModal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SNGetDepartments, SNGetEmployees, SNGetOrganizations } from 'redux/Staff/StaffNames/staffNamesActions';
import { State } from 'redux/store';
import Dropdown from 'ui/components/Dropdown/Dropdown';

const DepartmentAdd = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const initialState = {
        depName: '',
        organizationUuid: '',
        chiefPersonUuid: '',
        parentDepartmentUuid: ''
    };
    const [inputsState, setInputsState] = useState(initialState);
    const organizationsNames = useSelector((state: State) => state.staff.staffNames.organizations, shallowEqual);
    const departmentsNames = useSelector((state: State) => state.staff.staffNames.departments, shallowEqual);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    const closeCurrentModal = () => {
        closeModal('add', history);
    };

    useEffect(() => {
        dispatch(SNGetOrganizations());
        dispatch(SNGetEmployees());
        dispatch(SNGetDepartments());
    }, [dispatch]);

    useEffect(() => {
        setInputsState(initialState);
        // eslint-disable-next-line
    }, [window.location.pathname]);

    return (
        <Modal
            modalName="add"
            modalHeader="Создание подразделения"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            onSuccessClick={() => dispatch(SDAddDepartment(inputsState, closeCurrentModal))}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div className="staff-modal__content">
                <div className="staff-modal__field">
                    <span className="staff-modal-field__header">Наименование подразделения*</span>
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
                    <span className="staff-modal-field__header">Наименование организации*</span>
                    <Dropdown
                        placeholder="Выберите организацию"
                        idField="id"
                        labelField="name"
                        value={inputsState.organizationUuid}
                        onChange={(val) => setInputsState({ ...inputsState, organizationUuid: val ? val.id : '' })}
                        options={organizationsNames}
                    />
                </div>
                <div className="staff-modal__field row">
                    <div>
                        <span className="staff-modal-field__header">Руководитель подразделения*</span>
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
                    <div>
                        <span className="staff-modal-field__header">Ведущее подразделение</span>
                        <Dropdown
                            placeholder="Выбрать подразделение"
                            idField="id"
                            labelField="name"
                            value={inputsState.parentDepartmentUuid}
                            onChange={(val) =>
                                setInputsState({
                                    ...inputsState,
                                    parentDepartmentUuid: val ? val.id : ''
                                })
                            }
                            options={departmentsNames}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DepartmentAdd;
