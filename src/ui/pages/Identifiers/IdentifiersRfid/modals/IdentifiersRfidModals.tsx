import React, { memo } from 'react';
import { Modal } from 'ui/components/Modal/Modal';
import addProps from 'ui/components/Modal/Dialog/AddModal/addProps';
import editProps from 'ui/components/Modal/Dialog/EditModal/editProps';
import deleteProps from 'ui/components/Modal/Alert/DeleteModal/deleteProps';

const IdentifiersRfidModalsInner = () => {
    return (
        <>
            <Modal
                {...addProps}
                onSuccessClick={() => console.log('RFID ключ добавлен')}
                modalHeader="Добавить RFID ключа"
                modalName="add"
                modalIcon="Info"
            >
                <div>
                    <span>Add</span>
                </div>
            </Modal>

            <Modal
                {...editProps}
                onSuccessClick={() => console.log('123')}
                modalHeader="Редактирование RFID ключа"
                modalName="edit"
                modalIcon="Edit"
            >
                Редактирование
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('RFID ключ удален')}
                modalHeader="Удаление RFID ключа"
                modalName="delete"
                modalIcon="Warning"
            >
                Удаление
            </Modal>
        </>
    );
};

export const IdentifiersRfidModals = memo(IdentifiersRfidModalsInner);
