import React, { memo } from 'react';
import './404.scss';

const NotFoundInner = () => {
    return (
        <div className="not-found">
            <div className="not-found__title">
                <span className="p--lg--bold">404</span>
            </div>

            <div className="not-found__description">
                <span className="p--lg--bold">К сожелению такой страницы не существует</span>
                <span className="p--md--normal">
                    Попробуйте перейти на <a href="/security-post-central">другую страницу</a>
                </span>
            </div>
        </div>
    );
};

export const NotFound = memo(NotFoundInner);
