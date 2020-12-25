import React, { memo } from 'react';
import { QrCode } from 'assets/images/svgr/qr-code';
import './IdentifiersQrGeneral.scss';

const IdentifiersQrGeneralInner = () => {
    return (
        <div className="identifiersr-qr-general">
            <div className="block-info">
                <div className="block-info__photo">
                    <QrCode />
                </div>
            </div>

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

export const IdentifiersQrGeneral = memo(IdentifiersQrGeneralInner);
