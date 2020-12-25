import React, { memo } from 'react';
import { TableItem } from 'redux/Staff/StaffEmployees/staffEmployeesTypes';
import { FiredDisabled } from 'assets/images/svgr/fired_disabled';
import { ReactComponent as UserIcon } from 'assets/images/svg/userIcon.svg';
import './EmployeeDetails.scss';

interface EditEmployee {
    selectedUser: TableItem | null;
}

const EmployeeDetailsInner = (props: EditEmployee) => {
    return (
        <div className="edit-employee">
            <div className="edit-employee__body">
                <div className="modal__employee-authenticated">
                    <div className="modal__employee-photo">
                        <UserIcon />
                    </div>

                    <div className="modal__employee-info">
                        <div className="info__item">
                            <h4 className="info__header">Фамилия</h4>
                            <span className="info__text">{props.selectedUser?.name.split(' ')[0]}</span>
                        </div>

                        <div className="info__item">
                            <h4 className="info__header">Имя</h4>
                            <span className="info__text">{props.selectedUser?.name.split(' ')[1]}</span>
                        </div>

                        <div className="info__item">
                            <h4 className="info__header">Отчество</h4>
                            <span className="info__text">{props.selectedUser?.name.split(' ')[2]}</span>
                        </div>
                    </div>
                </div>

                <div className="modal__employee-data">
                    <div className="modal__employee-title">ООО Спецавтоматика</div>
                    <div className="modal__employee-info">
                        <div className="info__item">
                            <h4 className="info__header">Отдел автоматизации</h4>
                            <span className="info__text">Специалист по стресс-тестированию</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Руководитель:</h4>
                            <span className="info__text">Кабаргин А.В.</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Дата приема:</h4>
                            <span className="info__text">21.02.2016</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Дата увольнения:</h4>
                            <span className="info__text">--.--.----</span>
                        </div>
                        <div className="info__item corrected">
                            <h4 className="info__header">Уволен ?</h4>
                            <FiredDisabled />
                        </div>
                    </div>
                </div>

                <div className="modal__employee-contacts">
                    <div className="modal__employee-title">Контактные данные</div>
                    <div className="modal__employee-info">
                        <div className="info__item">
                            <h4 className="info__header">Номер телефона:</h4>
                            <span className="info__text">+7(900)4565533</span>
                        </div>
                        <div className="info__item">
                            <h4 className="info__header">Электронная почта:</h4>
                            <span className="info__text">kabargin@specavtomatica.ru</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EmployeeDetails = memo(EmployeeDetailsInner);
