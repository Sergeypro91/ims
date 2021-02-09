import React, { memo } from 'react';
import { AttendingTable } from './AttendingTable/AttendingTable';
import './Attending.scss';

const AttendingInner = () => {
    return <AttendingTable />;
};

export const Attending = memo(AttendingInner);
