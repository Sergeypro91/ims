import React from 'react';
import StaffDepartmentsToolbar from './toolbar/StaffDepartmentsToolbar';
import StaffDepartmentsFilter from './filter/StaffDepartmentsFilter';
import StaffDepartmentsTable from './table/StaffDepartmentsTable';
import StaffDepartmentsSidebar from './sidebar/StaffDepartmentsSidebar';
import StaffDepartmentsModals from './modals/StaffDepartmentsModals';

const StaffDepartments = () => (
    <div className="page">
        <StaffDepartmentsToolbar />
        <section className="page__wrapper">
            <StaffDepartmentsFilter />
            <StaffDepartmentsTable />
            <StaffDepartmentsSidebar />
        </section>

        <StaffDepartmentsModals />
    </div>
);

export default StaffDepartments;
