import React, { ChangeEvent, useEffect, useState } from 'react';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { Modal } from 'ui/components/Modal/Modal';
import { useHistory } from 'react-router-dom';
// import { SDAddDepartment } from 'redux/Staff/StaffDepartments/staffDepartmentsActions';
import closeModal from 'utils/closeModal/closeModal';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SNGetDepartments, /*SNGetEmployees,*/ SNGetOrganizations, SNGetPositions } from 'redux/Staff/StaffNames/staffNamesActions';
import { State } from 'redux/store';
import Dropdown from 'ui/components/Dropdown/Dropdown';
// import { getNewEmployeeNumber } from 'api/staff/employees/employees.api';
import { /*SEAddEmployee,*/ SEDeleteEmployeePhoto, SEEditEmployee } from 'redux/Staff/StaffEmployees/staffEmployeesActions';
import { Employee } from 'assets/images/svgr/employee';
import { ImageLoader } from 'ui/components/ImageLoader/ImageLoader';
import { Edit } from 'assets/images/svgr/edit_button';

const EmployeeEdit = () => {
    const { extendedEmployee, selectedRow } = useSelector((state: State) => state.staff.staffEmployees, shallowEqual);
    const history = useHistory();
    const dispatch = useDispatch();
    const initialState = {
        employeeUuid: extendedEmployee?.employeeUuid || '',
        empId: extendedEmployee?.empId || '',
        physpersonUuid: extendedEmployee?.physpersonUuid || '',
        phone: extendedEmployee?.phone || '',
        email: extendedEmployee?.email || '',
        chiefEmployeeUuid: extendedEmployee?.chiefEmployeeUuid || '',
        birthDay: '01-01-1980',
        inn: null,
        passportSeries: null,
        passportNumber: null,
        photoCompressed: extendedEmployee?.photoCompressed || '',
        gender: extendedEmployee?.gender || '',
        employmentDate: extendedEmployee?.employmentDate || new Date(),
        lastName: extendedEmployee?.lastName || '',
        firstName: extendedEmployee?.firstName || '',
        middleName: extendedEmployee?.middleName || '',
        extensionPhone: extendedEmployee?.extensionPhone || '',
        corporateEmail: extendedEmployee?.corporateEmail || '',
        organizationUuid: extendedEmployee?.organizationUuid || '',
        positionUuid: extendedEmployee?.positionUuid || '',
        departmentUuid: extendedEmployee?.departmentUuid || '',
        dismissedDate: extendedEmployee?.dismissedDate || null
    };
    const [inputsState, setInputsState] = useState(initialState);
    const organizationsNames = useSelector((state: State) => state.staff.staffNames.organizations, shallowEqual);
    const departmentsNames = useSelector((state: State) => state.staff.staffNames.departments, shallowEqual);
    const positionsNames = useSelector((state: State) => state.staff.staffNames.positions, shallowEqual);
    const [editPhoto, setEditPhoto] = useState(false);
    // const [isOnTheWindow, setIsOnTheWindow] = useState(false);

    const inputHandler = (ev: ChangeEvent) => {
        const target = ev.target as HTMLInputElement;
        setInputsState({ ...inputsState, [target.name]: target.value });
    };

    const closeCurrentModal = () => {
        closeModal('edit', history);
    };

    useEffect(() => {
        dispatch(SNGetOrganizations());
        dispatch(SNGetPositions());
        dispatch(SNGetDepartments());
    }, [dispatch]);

    useEffect(() => {
        setInputsState({
            employeeUuid: extendedEmployee?.employeeUuid || '',
            empId: extendedEmployee?.empId || '',
            physpersonUuid: extendedEmployee?.physpersonUuid || '',
            phone: extendedEmployee?.phone || '',
            email: extendedEmployee?.email || '',
            chiefEmployeeUuid: extendedEmployee?.chiefEmployeeUuid || '',
            birthDay: '01-01-1980',
            inn: null,
            passportSeries: null,
            passportNumber: null,
            photoCompressed: extendedEmployee?.photoCompressed || '',
            gender: extendedEmployee?.gender || '',
            employmentDate: extendedEmployee?.employmentDate || new Date(),
            lastName: extendedEmployee?.lastName || '',
            firstName: extendedEmployee?.firstName || '',
            middleName: extendedEmployee?.middleName || '',
            extensionPhone: extendedEmployee?.extensionPhone || '',
            corporateEmail: extendedEmployee?.corporateEmail || '',
            organizationUuid: extendedEmployee?.organizationUuid || '',
            positionUuid: extendedEmployee?.positionUuid || '',
            departmentUuid: extendedEmployee?.departmentUuid || '',
            dismissedDate: extendedEmployee?.dismissedDate || null
        });

        dispatch(SNGetOrganizations());
        dispatch(SNGetPositions());
        dispatch(SNGetDepartments());
        // eslint-disable-next-line
    }, [window.location.pathname]);

    const inputImageLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            if (
                (event.target.files[0].size < 1000000 && event.target.files[0].type === 'image/jpeg') ||
                event.target.files[0].type === 'image/png'
            ) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);

                reader.onload = function () {
                    console.log('RESULT', reader.result);
                    if (reader.result) {
                        setInputsState({
                            ...inputsState,
                            // @ts-ignore
                            photoCompressed: reader.result
                                ?.toString()
                                .replace('data:image/png;base64,', '')
                                .replace('data:image/jpeg;base64,', '')
                        });

                        setEditPhoto(false);
                        // setIsOnTheWindow(false);
                    }
                };

                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };
            } else {
                if (event.target.files[0].size > 1000000) {
                    alert('Ошибка - файл слишком большой');
                }

                if (event.target.files[0].type !== 'image/jpeg' && event.target.files[0].type !== 'image/png') {
                    alert('Ошибка - неверный формат изображения');
                }
            }
        }
    };

    return (
        <Modal
            modalName="edit"
            modalHeader="Изменение сотрудника"
            modalIcon="Info"
            successButtonLabel="Сохранить"
            // @ts-ignore
            onSuccessClick={() => {
                let empDate = '';
                const ed = new Date();

                var dd: string | number = ed.getDate();

                var mm: string | number = ed.getMonth() + 1;
                var yyyy = ed.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                empDate = dd + '-' + mm + '-' + yyyy;
                console.log(empDate);

                dispatch(
                    SEEditEmployee(
                        // @ts-ignore
                        {
                            ...inputsState,
                            // @ts-ignore
                            employmentDate: empDate
                        },
                        closeCurrentModal
                    )
                );
            }}
            denyButtonLabel="Отмена"
            onDenyClick={closeCurrentModal}
        >
            <div className="staff-modal__content">
                <div className="employee-add">
                    <div className="employee-add__body">
                        <div className="user-image">
                            <div className="edit__photo">
                                <div className="image">
                                    {inputsState.photoCompressed ? (
                                        <img
                                            alt="Employee"
                                            style={{ width: '100%', height: '100%' }}
                                            src={`data:image/jpeg;base64,${inputsState.photoCompressed}`}
                                        />
                                    ) : (
                                        <Employee />
                                    )}
                                </div>

                                <div
                                    className={`image-menu ${editPhoto ? 'open' : ''}`}
                                    // onMouseOver={() => setIsOnTheWindow(true)}
                                    onFocus={() => void 0}
                                    // onMouseLeave={() => setIsOnTheWindow(false)}
                                    onBlur={() => void 0}
                                >
                                    <button type="button" className="image-menu__button" style={{ marginBottom: 0 }}>
                                        <ImageLoader name="imageLoad" label="Загрузить" onChange={inputImageLoad} />
                                    </button>

                                    <button type="button" className="image-menu__button" style={{ marginTop: '7px' }}>
                                        <ImageLoader
                                            withoutInput
                                            name="imageLoad"
                                            label="Удалить"
                                            onClick={() => {
                                                if (extendedEmployee?.physpersonUuid && selectedRow?.physpersonName) {
                                                    dispatch(
                                                        SEDeleteEmployeePhoto(
                                                            extendedEmployee?.physpersonUuid,
                                                            extendedEmployee?.employeeUuid,
                                                            selectedRow?.physpersonName,
                                                            () => {
                                                                setInputsState({
                                                                    ...inputsState,
                                                                    // @ts-ignore
                                                                    photoCompressed: null
                                                                });
                                                            }
                                                        )
                                                    );
                                                }
                                            }}
                                        />
                                    </button>
                                </div>

                                <button type="button" className="image-menu__activator" onClick={() => setEditPhoto(!editPhoto)}>
                                    <Edit />
                                </button>
                            </div>
                        </div>

                        <div className="user-info">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className="info__row" style={{ width: '100%', marginBottom: '4px' }}>
                                    <Inputs
                                        type="text"
                                        name="empId"
                                        onInputChange={inputHandler}
                                        value={inputsState.empId}
                                        className="name__label"
                                        label="Табельный №"
                                        placeholder="Введите номер"
                                    />
                                </div>
                            </div>

                            <div className="info__row">
                                <Inputs
                                    type="text"
                                    name="lastName"
                                    onInputChange={inputHandler}
                                    value={inputsState.lastName}
                                    className="name__label"
                                    label="Фамилия*"
                                    placeholder="Введите фамилию"
                                />
                            </div>

                            <div className="info__row">
                                <Inputs
                                    type="text"
                                    name="firstName"
                                    onInputChange={inputHandler}
                                    value={inputsState.firstName}
                                    className="name__label"
                                    label="Имя"
                                    placeholder="Введите имя"
                                />
                            </div>

                            <div className="info__row">
                                <Inputs
                                    type="text"
                                    name="middleName"
                                    onInputChange={inputHandler}
                                    value={inputsState.middleName}
                                    className="name__label"
                                    label="Отчество"
                                    placeholder="Введите отчество"
                                />
                            </div>

                            <div className="info__row">
                                <Inputs
                                    type="text"
                                    name="extensionPhone"
                                    onInputChange={inputHandler}
                                    value={inputsState.extensionPhone}
                                    className="name__label"
                                    label="Телефон"
                                    placeholder="Введите телефон"
                                />

                                <Inputs
                                    type="text"
                                    name="corporateEmail"
                                    onInputChange={inputHandler}
                                    value={inputsState.corporateEmail}
                                    className="name__label"
                                    label="E-mail"
                                    labelStyles={{ minWidth: '30px' }}
                                    placeholder="Введите e-mail"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="employee-add__footer">
                        <div className="info__row">
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    minWidth: '315px',
                                    maxWidth: '315px'
                                }}
                            >
                                <span className="p--sm--normal" style={{ color: '#848484' }}>
                                    Организация*
                                </span>
                                <div style={{ marginLeft: '20px' }} />
                                <Dropdown
                                    placeholder="Выберите организацию"
                                    idField="id"
                                    labelField="name"
                                    value={inputsState.organizationUuid}
                                    initialLabelValue={extendedEmployee?.organizationName}
                                    onChange={(val) => setInputsState({ ...inputsState, organizationUuid: val ? val.id : '' })}
                                    options={organizationsNames}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '49%' }}>
                                <span className="p--sm--normal" style={{ color: '#848484' }}>
                                    Должность*
                                </span>
                                <div style={{ marginLeft: '5px' }} />
                                <Dropdown
                                    placeholder="Выберите должность"
                                    idField="id"
                                    labelField="name"
                                    initialLabelValue={extendedEmployee?.positionName}
                                    value={inputsState.positionUuid}
                                    onChange={(val) => setInputsState({ ...inputsState, positionUuid: val ? val.id : '' })}
                                    options={positionsNames}
                                />
                            </div>
                        </div>

                        <div className="info__row">
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                                <span className="p--sm--normal" style={{ color: '#848484' }}>
                                    Подразделение*
                                </span>
                                <div style={{ marginLeft: '5px' }} />
                                <Dropdown
                                    placeholder="Выберите подразделение"
                                    idField="id"
                                    labelField="name"
                                    initialLabelValue={extendedEmployee?.departmentName}
                                    value={inputsState.departmentUuid}
                                    onChange={(val) => setInputsState({ ...inputsState, departmentUuid: val ? val.id : '' })}
                                    options={departmentsNames}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EmployeeEdit;
