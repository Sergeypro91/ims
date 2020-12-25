import React, { memo } from 'react';
import './EducationFaculties.scss';

const EducationFacultiesInner = () => {
    return (
        <div className="education-faculties">
            <h1>Скоро тут будут</h1>
            <p>"Факультеты"</p>
        </div>
    );
};

export const EducationFaculties = memo(EducationFacultiesInner);
