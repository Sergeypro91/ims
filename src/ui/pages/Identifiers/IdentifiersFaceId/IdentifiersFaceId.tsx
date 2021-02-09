import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { TabBar } from 'ui/components/TabBar/TabBar';
import { Tab } from 'ui/components/TabBar/Tab/Tab';
import Sidebar from 'ui/components/Sidebar/Sidebar';
import { identifiersFaceIdToggleSidebar } from 'redux/Identifiers/IdentifiersFaceId/identifiersFaceIdActions';
import { IdentifiersFaceIdGeneral } from './tabs/IdentifiersFaceIdGeneral/IdentifiersFaceIdGeneral';
import { IdentifiersFaceIdTable } from './table/IdentifiersFaceIdTable';
import { IdentifiersFaceIdModals } from './modals/IdentifiersFaceIdModals';
import { IdentifiersFaceIdToolbar } from './toolbar/IdentifiersFaceIdToolbar';
import './IdentifiersFaceId.scss';

const IdentifiersFaceIdInner = () => {
    const dispatch = useDispatch();
    const toggleBar = useSelector((state: State) => state.app.toggleBar, shallowEqual);
    const sidebarOpened = useSelector((state: State) => state.identifiers.identifiersFaceId.sidebarOpened, shallowEqual);

    return (
        <div className="page identifiers-faceid" aria-label="page content">
            <IdentifiersFaceIdToolbar />

            <IdentifiersFaceIdModals />

            <section className="page__wrapper">
                <div className="tabs-spliter">
                    <IdentifiersFaceIdTable />
                </div>

                <Sidebar
                    label="Данные об Face ID"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    toggleIsOpen={() => dispatch(identifiersFaceIdToggleSidebar())}
                >
                    <TabBar trigger={toggleBar}>
                        <Tab header="Общее" index={0}>
                            <IdentifiersFaceIdGeneral />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export const IdentifiersFaceId = memo(IdentifiersFaceIdInner);
