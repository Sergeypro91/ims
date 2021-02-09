import React from 'react';
import EducationDepartmentsToolbar from './toolbar/EducationDepartmentsToolbar';
import EducationDepartmentsFilter from './filter/EducationDepartmentsFilter';
import EducationDepartmentsTable from './table/EducationDepartmentsTable';
import EducationDepartmentsSidebar from './sidebar/EducationDepartmentsSidebar';
import EducationDepartmentsModals from './modals/EducationDepartmentsModals';

const EducationDepartments = () => (
    <div className="page">
        <EducationDepartmentsToolbar />
        <section className="page__wrapper">
            <EducationDepartmentsFilter />
            <EducationDepartmentsTable />
            <EducationDepartmentsSidebar />
        </section>

        <EducationDepartmentsModals />
    </div>
);

export default EducationDepartments;
