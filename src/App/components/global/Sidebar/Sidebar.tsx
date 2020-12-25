import React, { useEffect, useCallback, useRef, memo } from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { SidebarState } from './sidebarType';
import './Sidebar.scss';

const SidebarInner = (props: SidebarState) => {
    const sidebar = useRef<HTMLDivElement>(null);

    const openCloseBarBehavior = useCallback(() => {
        const element = sidebar.current?.classList;

        if (element?.contains('hidden') === element?.contains('shown')) {
            if (props.isOpen) {
                element?.add('shown');
            } else {
                element?.add('hidden');
            }
        } else if (element?.contains('hidden')) {
            element?.remove('hidden');
            element?.add('anim');
            element?.add('shown');
        } else if (element?.contains('shown')) {
            element?.remove('shown');
            element?.add('anim');
            element?.add('hidden');
        }
    }, [props.isOpen]);

    useEffect(() => {
        openCloseBarBehavior();
    }, [props.isOpen, openCloseBarBehavior]);

    const onAnimEnd = () => {
        if (sidebar.current?.classList.contains('anim')) {
            sidebar.current?.classList.remove('anim');
        }

        props.sidebarTrigger!();
    };

    return (
        <aside ref={sidebar} className="sidebar" onAnimationEnd={onAnimEnd}>
            <div className="sidebar__header">
                <div className="sidebar__header-title">
                    <Buttons
                        name={props.icon}
                        size="m"
                        onPress={props.sidebarToggler}
                        active={props.isOpen}
                        typical={!props.isOpen}
                    />

                    <div className="sidebar__label">{props.sidebarName}</div>
                </div>

                {props.isOpen && (
                    <div className="sidebar__header-close">
                        <Buttons name="Close" typical size="m" onPress={props.sidebarToggler} />
                    </div>
                )}
            </div>

            <div className="sidebar__body">{props.isOpen && props.children}</div>
        </aside>
    );
};

export const Sidebar = memo(SidebarInner);
