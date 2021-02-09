import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { SideFilter } from 'ui/components/SideFilter/SideFilter';
import _ from 'lodash';
import { identifiersQrToggleSideFilter, identifiersQrToggleSidebar } from 'redux/Identifiers/IdentifiersQr/identifiersQrActions';
import { IdentifiersQrTable } from './table/IdentifiersQrTable';
import { IdentifiersQrGeneral } from './tabs/IdentifiersQrGeneral/IdentifiersQrGeneral';
import { IdentifiersQrHistory } from './tabs/IdentifiersQrHistory/IdentifiersQrHistory';
import { IdentifiersQrFilters } from './filters/IdentifiersQrFilters';
import { IdentifiersQrModals } from './modals/IdentifiersQrModals';
import { IdentifiersQrToolbar } from './toolbar/IdentifiersQrToolbar';
import './IdentifiersQr.scss';

const IdentifiersQrInner = () => {
    const dispatch = useDispatch();
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sidebarOpened = useSelector((state: State) => state.identifiers.identifiersQr.sidebarOpened, shallowEqual);
    const sideFilter = useSelector((state: State) => state.identifiers.identifiersQr.sideFilter, shallowEqual);

    const triggerFilter = () => {
        dispatch(identifiersQrToggleSideFilter());
    };

    const triggerFilterDebounce = _.debounce(triggerFilter, 250);

    return (
        <div className="page identifiers-rfid" aria-label="page content">
            <IdentifiersQrToolbar sideFilter={sideFilter} toggleSideFilter={triggerFilterDebounce} />

            <IdentifiersQrModals />

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <IdentifiersQrTable />

                    <SideFilter onClose={triggerFilterDebounce} isOpen={sideFilter} iconName="Настройки">
                        <IdentifiersQrFilters />
                    </SideFilter>
                </div>

                <Sidebar
                    label="Данные о QR-коде"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    toggleIsOpen={() => dispatch(identifiersQrToggleSidebar())}
                >
                    <TabBar trigger={toggleBar}>
                        <Tab header="Общее" index={0}>
                            <IdentifiersQrGeneral />
                        </Tab>

                        <Tab header="История" index={1}>
                            <IdentifiersQrHistory />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export const IdentifiersQr = memo(IdentifiersQrInner);
