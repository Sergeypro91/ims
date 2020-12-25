import React, { memo } from 'react';
import './StaffTimetable.scss';

const StaffTimetableInner = () => {
    return (
        <div className="staff-timetable">
            <span>123</span>
        </div>
    );
};

export const StaffTimetable = memo(StaffTimetableInner);
