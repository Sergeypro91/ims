import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SDEditDepartment } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import closeModal from 'utils/closeModal/closeModal';
import { SNGetDepartments, SNGetEmployees, SNGetOrganizations } from 'redux/Staff/StaffNames/staffNamesActions';
import Dropdown from 'ui/components/Dropdown/Dropdown';

const DepartmentEdit = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedRow } = useSelector((state: State) => state.staff.staffDepartments, shallowEqual);
    const organizationsNames = useSelector((state: State) => state.staff.staffNames.organizations, shallowEqual);
    const departmentsNames = useSelector((state: State) => state.staff.staffNames.departments, shallowEqual);
    const employeesNames = useSelector((state: State) => state.staff.staffNames.employees, shallowEqual);

    const initialState = {
        depName: selectedRow?.depName || '',
        organizationUuid: selectedRow?.organizationUuid || '',
        chiefPersonUuid: selectedRow?.chiefPersonUuid || '',
        parentDepartmentUuid: selectedRow?.parentDepartmentUuid || ''
    };

    const [inputsState, setInputsState] = useState(initialState);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    const closeCurrentModal = () => {
        closeModal('edit', history);
    };

    useEffect(() => {
        dispatch(SNGetOrganizations());
        dispatch(SNGetEmployees());
        dispatch(SNGetDepartments());
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            depName: selectedRow?.depName || '',
            organizationUuid: selectedRow?.organizationUuid || '',
            chiefPersonUuid: selectedRow?.chiefPersonUuid || '',
            parentDepartmentUuid: selectedRow?.parentDepartmentUuid || ''
        });
        // eslint-disable-next-line
    }, [window.location.pathname, selectedRow]);

    return (
        <Modal
            modalName="edit"
            modalIcon="Edit"
            modalHeader="Редактирование подразделения"
            successButtonLabel="Сохранить"
            onSuccessClick={() =>
                dispatch(SDEditDepartment({ ...inputsState, departmentUuid: selectedRow!.departmentUuid }, closeCurrentModal))
            }
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
                        initialLabelValue={selectedRow?.orgName || ''}
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
                            initialLabelValue={selectedRow?.chiefPersonName || ''}
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
                            initialLabelValue={selectedRow?.parentDepartmentName || ''}
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

export default DepartmentEdit;
