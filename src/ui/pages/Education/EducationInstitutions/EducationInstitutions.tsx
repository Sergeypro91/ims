import React from 'react';
import EducationInstitutionsToolbar from './toolbar/EducationInstitutionsToolbar';
import EducationInstitutionsTable from './table/EducationInstitutionsTable';
import EducationInstitutionsSidebar from './sidebar/EducationInstitutionsSidebar';
import EducationInstitutionsModals from './modals/EducationInstitutionsModals';

const EducationInstitutions = () => (
    <div className="page">
        <EducationInstitutionsToolbar />
        <section className="page__wrapper">
            <EducationInstitutionsTable />
            <EducationInstitutionsSidebar />
        </section>

        <EducationInstitutionsModals />
    </div>
);

export default EducationInstitutions;
