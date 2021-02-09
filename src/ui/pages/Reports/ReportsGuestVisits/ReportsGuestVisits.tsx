import React, { memo } from 'react';
import './ReportsGuestVisits.scss';

const ReportsGuestVisitsInner = () => {
    return (
        <div className="reports-guest-visits">
            <span>123</span>
        </div>
    );
};

export const ReportsGuestVisits = memo(ReportsGuestVisitsInner);
