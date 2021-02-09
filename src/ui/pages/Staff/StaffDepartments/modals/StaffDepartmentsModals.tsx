import React from 'react';
import DepartmentAdd from './DepartmentAdd/DepartmentAdd';
import DepartmentEdit from './DepartmentEdit/DepartmentEdit';
import DepartmentDelete from './DepartmentDelete/DepartmentDelete';
import DepartmentRestore from './DepartmentRestore/DepartmentRestore';

const StaffDepartmentsModals = () => (
    <>
        <DepartmentAdd />
        <DepartmentEdit />
        <DepartmentDelete />
        <DepartmentRestore />
    </>
);

export default StaffDepartmentsModals;
