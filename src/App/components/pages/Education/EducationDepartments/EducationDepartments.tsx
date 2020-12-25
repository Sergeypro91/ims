import React, { memo } from 'react';
import './EducationDepartments.scss';

const EducationDepartmentsInner = () => {
    return (
        <div className="education-departments">
            <h1>Скоро тут будут</h1>
            <p>"Кафедры"</p>
        </div>
    );
};

export const EducationDepartments = memo(EducationDepartmentsInner);
