import React from 'react';
import FacultyAdd from './FacultyAdd/FacultyAdd';
import FacultyEdit from './FacultyEdit/FacultyEdit';
import FacultyDelete from './FacultyDelete/FacultyDelete';
import FacultyRestore from './FacultyRestore/FacultyRestore';

const EducationFacultiesModals = () => {
    return (
        <>
            <FacultyAdd />
            <FacultyEdit />
            <FacultyDelete />
            <FacultyRestore />
        </>
    );
};

export default EducationFacultiesModals;
