import React from 'react';
import GroupAdd from './GroupAdd/GroupAdd';
import GroupEdit from './GroupEdit/GroupEdit';
import GroupDelete from './GroupDelete/GroupDelete';
import GroupRestore from './GroupRestore/GroupRestore';

const EducationGroupsModals = () => {
    return (
        <>
            <GroupAdd />
            <GroupEdit />
            <GroupDelete />
            <GroupRestore />
        </>
    );
};

export default EducationGroupsModals;
