import React from 'react';
import InstituteAdd from './InstituteAdd/InstituteAdd';
import InstituteEdit from './InstituteEdit/InstituteEdit';
import InstituteDelete from './InstituteDelete/InstituteDelete';
import InstituteRestore from './InstituteRestore/InstituteRestore';

const EducationInstitutionsModals = () => {
    return (
        <>
            <InstituteAdd />
            <InstituteEdit />
            <InstituteDelete />
            <InstituteRestore />
        </>
    );
};

export default EducationInstitutionsModals;
