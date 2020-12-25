import React from 'react';
import './HeaderProfile.scss';
import { Profile } from 'assets/images/svgr/userIcon';
import { ArrowDrop } from 'assets/images/svgr/arrowDrop';
import { HeaderProfileProps } from './headerProfileTypes';

export const HeaderProfile = (props: HeaderProfileProps) => {
    return (
        <button type="button" className="header__user-info" onClick={props.click}>
            <div className="user-info__separator" />

            <span className="user-info__name">
                <div className="p--md--normal">Администратор</div>
            </span>

            <div className="user-info__avatar">
                <Profile />
            </div>

            <div className={props.isOpened ? 'list-name__icon turn' : 'list-name__icon'}>
                <ArrowDrop />
            </div>
        </button>
    );
};
