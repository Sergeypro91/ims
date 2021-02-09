import React, { memo } from 'react';
import './IdentifiersRfidGeneral.scss';

const IdentifiersRfidGeneralInner = () => {
    return (
        <div className="identifiersr-rfid-general">
            <div className="block-info">
                <div className="block-info__header p--sm--normal">Номер ключа</div>
                <div className="block-info__text p--md--bold">9453214569874521</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Статус</div>
                <div className="block-info__text p--md--bold">Активен</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Владелец</div>
                <div className="block-info__text p--md--bold">Журавлев Александр Владимирович</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Класс</div>
                <div className="block-info__text p--md--bold">Пользовательский</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Создан</div>
                <div className="block-info__text p--md--bold">01.11.2020</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Срок действия</div>
                <div className="block-info__text p--md--bold">Бессрочный</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Лимит проходов</div>
                <div className="block-info__text p--md--bold">Безлимитный</div>
            </div>
        </div>
    );
};

export const IdentifiersRfidGeneral = memo(IdentifiersRfidGeneralInner);
