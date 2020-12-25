import React, { memo } from 'react';
import './EducationGroups.scss';

const EducationGroupsInner = () => {
    return (
        <div className="education-groups">
            <h1>Скоро тут будут</h1>
            <p>"Группы"</p>
        </div>
    );
};

export const EducationGroups = memo(EducationGroupsInner);
