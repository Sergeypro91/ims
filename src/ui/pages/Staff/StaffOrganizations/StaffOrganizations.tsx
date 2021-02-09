import React from 'react';
import StaffOrganizationsToolbar from './toolbar/StaffOrganizationsToolbar';
import StaffOrganizationsTable from './table/StaffOrganizationsTable';
import StaffOrganizationsSidebar from './sidebar/StaffOrganizationsSidebar';
import StaffOrganizationsModals from './modals/StaffOrganizationsModals';

const StaffOrganizations = () => (
    <div className="page">
        <StaffOrganizationsToolbar />
        <section className="page__wrapper">
            <StaffOrganizationsTable />
            <StaffOrganizationsSidebar />
        </section>

        <StaffOrganizationsModals />
    </div>
);

export default StaffOrganizations;
