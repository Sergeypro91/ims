import React from 'react';
import EducationGroupsToolbar from './toolbar/EducationGroupsToolbar';
import EducationGroupsFilter from './filter/EducationGroupsFilter';
import EducationGroupsTable from './table/EducationGroupsTable';
import EducationGroupsSidebar from './sidebar/EducationGroupsSidebar';
import EducationGroupsModals from './modals/EducationGroupsModals';

const EducationGroups = () => (
    <div className="page">
        <EducationGroupsToolbar />
        <section className="page__wrapper">
            <EducationGroupsFilter />
            <EducationGroupsTable />
            <EducationGroupsSidebar />
        </section>

        <EducationGroupsModals />
    </div>
);

export default EducationGroups;
