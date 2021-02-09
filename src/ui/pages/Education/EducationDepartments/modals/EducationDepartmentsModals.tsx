import React from 'react';
import DepartmentAdd from './DepartmentAdd/DepartmentAdd';
import DepartmentEdit from './DepartmentEdit/DepartmentEdit';
import DepartmentDelete from './DepartmentDelete/DepartmentDelete';
import DepartmentRestore from './DepartmentRestore/DepartmentRestore';

const EducationDepartmentsModals = () => {
    return (
        <>
            <DepartmentAdd />
            <DepartmentEdit />
            <DepartmentDelete />
            <DepartmentRestore />
        </>
    );
};

export default EducationDepartmentsModals;
