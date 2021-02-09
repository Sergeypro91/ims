import React from 'react';
import PositionAdd from './PositionAdd/PositionAdd';
import PositionEdit from './PositionEdit/PositionEdit';
import PositionDelete from './PositionDelete/PositionDelete';
import PositionRestore from './PositionRestore/PositionRestore';

const StaffPositionsModals = () => (
    <>
        <PositionAdd />
        <PositionEdit />
        <PositionDelete />
        <PositionRestore />
    </>
);

export default StaffPositionsModals;
