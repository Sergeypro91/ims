import React, { useState, useEffect, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { CustomScrollbar } from 'App/components/global/CustomScrollbar/CustomScrollbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { SideFilterProps } from './sideFilterType';
import Fade from './Fade/Fade';
import './SideFilter.scss';

const SideFilterInner = (props: SideFilterProps) => {
    const { toggleBar } = useSelector((state: State) => state.app, shallowEqual);
    const [isOnTheWindow, setIsOnTheWindow] = useState(false);

    const closeHandler = () => {
        if (!isOnTheWindow && props.isOpen) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeHandler);

        return () => document.removeEventListener('click', closeHandler);
    });

    return (
        <Fade show={props.isOpen}>
            <div
                className="sidefilter__wrapper"
                onMouseOver={() => setIsOnTheWindow(true)}
                onFocus={() => console.log('Focus')}
                onMouseLeave={() => setIsOnTheWindow(false)}>
                <div className="sidefilter__header">
                    <span className="header__title">Фильтр</span>

                    <Buttons name="Close" size="m" onPress={props.onClose} />
                </div>

                <div className="sidefilter__content">
                    <div className="content__items">
                        <CustomScrollbar trigger={toggleBar}>{props.children}</CustomScrollbar>
                    </div>

                    <div className="content__items-buttons">
                        <Buttons name="reset" label="Очистить" onPress={props.onClose} typical />

                        <Buttons name="apply" label="Применить" onPress={() => console.log('send request')} typical />
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export const SideFilter = memo(SideFilterInner);
