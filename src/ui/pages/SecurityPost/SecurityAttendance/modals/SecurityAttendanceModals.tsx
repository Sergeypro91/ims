import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from 'redux/store';
import { Modal } from 'ui/components/Modal/Modal';

const SecurityAttendanceModalsInner = () => {
    const { selectedRow } = useSelector((state: State) => state.securityPost.postAttendance, shallowEqual);

    return (
        <>
            <Modal
                successButtonLabel="Добавить"
                denyButtonLabel="Отмена"
                onSuccessClick={() => console.log('Сотрудник добавлен')}
                modalHeader="Добавить сотрудника"
                modalName="add"
                modalIcon="Info"
            >
                <div>
                    <span>Add</span>
                </div>
            </Modal>

            <Modal
                successButtonLabel="Сохранить"
                denyButtonLabel="Отмена"
                onSuccessClick={() => console.log('123')}
                modalHeader="Редактирование должности"
                modalName="edit"
                modalIcon="Edit"
            >
                <div>
                    <span>Edit</span>
                </div>
            </Modal>

            <Modal
                successButtonLabel="Удалить"
                denyButtonLabel="Отмена"
                onSuccessClick={() => console.log('Сотрудник Удален')}
                modalHeader="Удаление сотрудника"
                modalName="delete"
                modalIcon="Warning"
            >
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
        </>
    );
};

export const SecurityAttendanceModals = memo(SecurityAttendanceModalsInner);
