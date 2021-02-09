import React, { useState, useEffect, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { Buttons } from 'ui/components/Buttons/Buttons';
import { SideFilterProps } from './sideFilterType';
import Fade from './Fade/Fade';
import './SideFilter.scss';
import _ from 'lodash';

const SideFilterInner = (props: SideFilterProps) => {
    const { toggleBar } = useSelector((state: State) => state.app, shallowEqual);
    const [isOnTheWindow, setIsOnTheWindow] = useState(false);

    const onClose = () => _.debounce(props.onClose, 250);

    const closeHandler = () => {
        if (!isOnTheWindow && props.isOpen) {
            onClose();
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
                onFocus={() => void 0}
                onMouseLeave={() => setIsOnTheWindow(false)}
                onBlur={() => void 0}
            >
                <div className="sidefilter__header">
                    <span className="header__title">Фильтр</span>

                    <Buttons name="Close" size="m" onPress={onClose} />
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
