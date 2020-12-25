import React, { memo } from 'react';
import './SchoolchildSchools.scss';

const SchoolchildSchoolsInner = () => {
    return (
        <div className="schoolchild-schools">
            <h1>Скоро тут будут</h1>
            <p>"Школы"</p>
        </div>
    );
};

export const SchoolchildSchools = memo(SchoolchildSchoolsInner);
