import React, { FC } from 'react';
import { Buttons } from 'ui/components/Buttons/Buttons';
import './Sidebar.scss';

interface SidebarProps {
    label: string;
    icon: string;
    isOpen: boolean;
    toggleIsOpen: () => void;
    deletedBadgeActive?: boolean;
    deletedBadgeLabel?: string;
}

const Sidebar: FC<SidebarProps> = (props) => (
    <aside className={`sidebar ${props.isOpen ? 'sidebar--opened' : 'sidebar--closed'}`}>
        <div className="sidebar-header">
            <div className="sidebar-header__content">
                <Buttons name={props.icon} size="m" onPress={props.toggleIsOpen} active={props.isOpen} typical={!props.isOpen} />
                <div className="sidebar-header__heading">{props.label}</div>
            </div>

            {props.deletedBadgeActive && (
                <div className="sidebar-header__badge">
                    <span>{props.deletedBadgeLabel || 'Удалено'}</span>
                </div>
            )}

            {props.isOpen && (
                <div className="sidebar-header__close">
                    <Buttons name="Close" typical size="m" onPress={props.toggleIsOpen} />
                </div>
            )}
        </div>

        {props.isOpen && <div className="sidebar__body">{props.children}</div>}
    </aside>
);

export default Sidebar;
