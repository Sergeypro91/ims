import React, { memo } from 'react';
import './TwoDAccordion.scss';

const TwoDAccordionInner = () => {
    return (
        <div className="twod-accordion">
            <div className="block-info">
                <div className="block-info__header p--sm--normal">Статус</div>

                <div className="block-info__text p--md--bold">Активен</div>
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

export const TwoDAccordion = memo(TwoDAccordionInner);
