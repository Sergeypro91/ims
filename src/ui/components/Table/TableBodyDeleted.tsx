import React, { FC } from 'react';
import TableBodyDeletedProps from './tableBodyDeleted.types';

const TableBodyDeleted: FC<TableBodyDeletedProps> = (props) => (
    <div style={{ display: 'flex', position: 'relative' }}>
        {props.deleted === 1 && <div className="dot dot--red" />}
        <span style={{ marginLeft: '14px' }}>{props.text}</span>
    </div>
);

export default TableBodyDeleted;
