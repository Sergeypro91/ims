import React, { memo } from 'react';
import './GeneralInformation.scss';

const GeneralInformationInner = () => {
    return (
        <div className="employee-tab__general-schedule">
            <div className="block-info">
                <div className="block-info__header p--sm--normal">Наименование</div>

                <div className="block-info__text p--md--bold">Пятидневка</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Описание</div>

                <div className="block-info__text p--md--bold">
                    Здесь какое-то краткое описание графика работы для тех, кому нужно краткое описание
                </div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Тип графика работы</div>

                <div className="block-info__text p--md--bold">Фиксированный</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Срок действия</div>

                <div className="block-info__text p--md--bold">Бессрочный</div>
            </div>

            <div className="block-info">
                <div className="block-info__header p--sm--normal">Периодичность</div>

                <div className="block-info__text p--md--bold">5 дней</div>
            </div>
        </div>
    );
};

export const GeneralInformation = memo(GeneralInformationInner);
