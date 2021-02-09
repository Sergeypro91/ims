import React, { useRef, memo } from 'react';
import { SettingsAccessPointsToolbar } from './toolbar/SettingsAccessPointsToolbar';
import { SettingsAccessPointsTable } from './table/SettingsAccessPointsTable';
import { SettingsAccessPointsSidebar } from './sidebar/SettingsAccessPointsSidebar';
import { SettingsAccesPointsModalsModals } from './modals/SettingsAccesPointsModals';
import './SettingsAccessPoints.scss';

const SettingsAccessPointsInner = () => {
    const pageWrapper = useRef<HTMLDivElement>(null);

    return (
        <div ref={pageWrapper} className="page settings-equipment">
            <SettingsAccessPointsToolbar />

            <SettingsAccesPointsModalsModals />
            <section className="page__wrapper">
                <SettingsAccessPointsTable />

                <SettingsAccessPointsSidebar />
            </section>
        </div>
    );
};

export const SettingsAccessPoints = memo(SettingsAccessPointsInner);
