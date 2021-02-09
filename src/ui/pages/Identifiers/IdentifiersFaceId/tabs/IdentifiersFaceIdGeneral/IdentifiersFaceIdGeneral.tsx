import React, { memo } from 'react';
import userImg from 'assets/images/png/faceId.png';
import './IdentifiersFaceIdGeneral.scss';

const IdentifiersFaceIdGeneralInner = () => {
    return (
        <div className="identifiersr-face-id-general">
            <div className="block-info">
                <div className="block-info__photo">
                    <img src={userImg} alt="Logo" />
                </div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Статус</div>
                <div className="block-info__text p--md--bold">Активен</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Владелец</div>
                <div className="block-info__text p--md--bold">Абрамкина Любовь Владимировна</div>
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

export const IdentifiersFaceIdGeneral = memo(IdentifiersFaceIdGeneralInner);
