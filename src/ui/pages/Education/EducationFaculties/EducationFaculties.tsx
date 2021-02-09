import React from 'react';
import EducationFacultiesToolbar from './toolbar/EducationFacultiesToolbar';
import EducationFacultiesTable from './table/EducationFacultiesTable';
import EducationFacultiesSidebar from './sidebar/EducationFacultiesSidebar';
import EducationFacultiesModals from './modals/EducationFacultiesModals';

const EducationFaculties = () => (
    <div className="page">
        <EducationFacultiesToolbar />
        <section className="page__wrapper">
            <EducationFacultiesTable />
            <EducationFacultiesSidebar />
        </section>

        <EducationFacultiesModals />
    </div>
);

export default EducationFaculties;
