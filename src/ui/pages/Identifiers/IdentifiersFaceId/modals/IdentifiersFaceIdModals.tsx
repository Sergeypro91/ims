import React, { memo } from 'react';
import { Modal } from 'ui/components/Modal/Modal';
import addProps from 'ui/components/Modal/Dialog/AddModal/addProps';
import editProps from 'ui/components/Modal/Dialog/EditModal/editProps';
import deleteProps from 'ui/components/Modal/Alert/DeleteModal/deleteProps';

const IdentifiersFaceIdModaslInner = () => {
    return (
        <>
            <Modal
                {...addProps}
                onSuccessClick={() => console.log('Идентификатор добавлен')}
                modalHeader="Добавить идентификатор"
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
                modalHeader="Редактирование идентификатора"
                modalName="edit"
                modalIcon="Edit"
            >
                Редактирование
            </Modal>

            <Modal
                {...deleteProps}
                onSuccessClick={() => console.log('Идентификатор удален')}
                modalHeader="Удаление идентификатора"
                modalName="delete"
                modalIcon="Warning"
            >
                Удаление
            </Modal>
        </>
    );
};

export const IdentifiersFaceIdModals = memo(IdentifiersFaceIdModaslInner);
