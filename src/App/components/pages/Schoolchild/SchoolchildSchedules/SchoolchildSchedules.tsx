import React, { memo } from 'react';
import './SchoolchildSchedules.scss';

const SchoolchildSchedulesInner = () => {
    return (
        <div className="schoolchild-schedules">
            <h1>Скоро тут будут</h1>
            <p>"Расписания учеников"</p>
        </div>
    );
};

export const SchoolchildSchedules = memo(SchoolchildSchedulesInner);
