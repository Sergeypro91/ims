import React, { memo } from 'react';
import './SchoolchildClass.scss';

const SchoolchildClassInner = () => {
    return (
        <div className="schoolchild-class">
            <h1>Скоро тут будут</h1>
            <p>"Классы учеников"</p>
        </div>
    );
};

export const SchoolchildClass = memo(SchoolchildClassInner);
