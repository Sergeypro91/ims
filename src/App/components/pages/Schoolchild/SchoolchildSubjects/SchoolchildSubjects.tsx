import React, { memo } from 'react';
import './SchoolchildSubjects.scss';

const SchoolchildSubjectsInner = () => {
    return (
        <div className="schoolchild-subjects">
            <h1>Скоро тут будут</h1>
            <p>"Предметы"</p>
        </div>
    );
};

export const SchoolchildSubjects = memo(SchoolchildSubjectsInner);
