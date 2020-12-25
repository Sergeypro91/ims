import React, { memo } from 'react';
import './EducationInstitutions.scss';

const EducationInstitutionsInner = () => {
    return (
        <div className="education-institutions">
            <h1>Скоро тут будут</h1>
            <p>"Институты"</p>
        </div>
    );
};

export const EducationInstitutions = memo(EducationInstitutionsInner);
