import React, { memo } from 'react';
import './SchoolchildStudents.scss';

const SchoolchildStudentsInner = () => {
    return (
        <div className="schoolchild-students">
            <h1>Скоро тут будет</h1>
            <p>"Список учеников"</p>
        </div>
    );
};

export const SchoolchildStudents = memo(SchoolchildStudentsInner);
