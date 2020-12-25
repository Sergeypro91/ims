import React, { memo } from 'react';
import './EducationSchedules.scss';

const EducationSchedulesInner = () => {
    return (
        <div className="education-schedules">
            <h1>Скоро тут будет</h1>
            <p>"Список учащихся"</p>
        </div>
    );
};

export const EducationSchedules = memo(EducationSchedulesInner);
