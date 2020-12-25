import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { State } from 'redux/store';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { Modal } from 'App/components/global/Modal/Modal';
import { IdentifiersWizard } from './IdentifiersWizard/IdentifiersWizard';
import { TimetableParameters } from './TimetableParameters/TimetableParameters';
import { EmployeeAdd } from './EmployeeAdd/EmployeeAdd';
import { EditInfoTab } from './EmployeeEdit/EditInfoTab/EditInfoTab';
import { ScheduleTab } from './EmployeeEdit/ScheduleTab/ScheduleTab';
import { IdentifiersTab } from './EmployeeEdit/IdentifiersTab/IdentifiersTab';

const StaffEmployeesModalsInner = () => {
    const location = useLocation();
    const history = useHistory();
    const selectedRow = useSelector((state: State) => state.staff.staffEmployees.selectedRow, shallowEqual);

    return (
        <>
            <Modal
                modalName="add"
                modalHeader="Добавить сотрудника"
                modalIcon="Info"
                successButtonLabel="Добавить"
                onSuccessClick={() => history.push(location.pathname.replace('/add', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/add', ''))}>
                <div>
                    <EmployeeAdd />
                </div>
            </Modal>

            <Modal
                modalName="edit"
                modalIcon="Edit"
                modalHeader="Редактирование сотрудника"
                successButtonLabel="Сохранить"
                onSuccessClick={() => history.push(location.pathname.replace('/edit', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/edit', ''))}>
                <TabBar>
                    <Tab header="Общие" index={0}>
                        <EditInfoTab />
                    </Tab>

                    <Tab header="График работы" index={1}>
                        <ScheduleTab />
                    </Tab>

                    <Tab header="Идентификаторы" index={2}>
                        <IdentifiersTab />
                    </Tab>
                </TabBar>
            </Modal>

            <Modal
                modalName="delete"
                modalHeader="Удаление сотрудника"
                modalIcon="Warning"
                successButtonLabel="Удалить"
                onSuccessClick={() => history.push(location.pathname.replace('/delete', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/delete', ''))}>
                {selectedRow ? (
                    <span>
                        Вы уверены, что хотите удалить сотрудника:
                        <br />
                        {selectedRow.name}
                    </span>
                ) : (
                    <span>этого сотрудника</span>
                )}
            </Modal>

            <Modal
                modalName="timetable"
                modalHeader="Подробный график"
                modalIcon="Info"
                successButtonLabel="Сохранить"
                onSuccessClick={() => history.push(location.pathname.replace('/timetable', ''))}
                denyButtonLabel="Отмена"
                onDenyClick={() => history.push(location.pathname.replace('/timetable', ''))}>
                <TimetableParameters selectedUser={selectedRow} />
            </Modal>

            <IdentifiersWizard />
        </>
    );
};

export const StaffEmployeesModals = memo(StaffEmployeesModalsInner);
