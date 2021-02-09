import React from 'react';
import StaffPositionsToolbar from './toolbar/StaffPositionsToolbar';
import StaffPositionsFilter from './filter/StaffPositionsFilter';
import StaffPositionsTable from './table/StaffPositionsTable';
import StaffPositionsSidebar from './sidebar/StaffPositionsSidebar';
import StaffPositionsModals from './modals/StaffPositionsModals';

const StaffPositions = () => (
    <div className="page">
        <StaffPositionsToolbar />
        <section className="page__wrapper">
            <StaffPositionsFilter />
            <StaffPositionsTable />
            <StaffPositionsSidebar />
        </section>

        <StaffPositionsModals />
    </div>
);

export default StaffPositions;
