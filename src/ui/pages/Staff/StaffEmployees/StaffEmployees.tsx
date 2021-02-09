import React from 'react';
import StaffEmployeesToolbar from './toolbar/StaffEmployeesToolbar';
import StaffEmployeesTable from './table/StaffEmployeesTable';
import StaffEmployeesSidebar from './sidebar/StaffEmployeesSidebar';
import StaffEmployeesModal from './modals/StaffEmployeesModal';

const StaffEmployees = () => (
    <div className="page">
        <StaffEmployeesToolbar />
        <section className="page__wrapper">
            <StaffEmployeesTable />
            <StaffEmployeesSidebar />
        </section>

        <StaffEmployeesModal />
    </div>
);

export default StaffEmployees;
