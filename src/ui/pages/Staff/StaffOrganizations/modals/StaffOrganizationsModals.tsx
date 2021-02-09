import React from 'react';
import OrganizationAdd from './OrganizationAdd/OrganizationAdd';
import OrganizationEdit from './OrganizationEdit/OrganizationEdit';
import OrganizationDelete from './OrganizationDelete/OrganizationDelete';
import OrganizationRestore from './OrganizationRestore/OrganizationRestore';

const StaffOrganizationsModals = () => {
    return (
        <>
            <OrganizationAdd />
            <OrganizationEdit />
            <OrganizationDelete />
            <OrganizationRestore />
        </>
    );
};

export default StaffOrganizationsModals;
