import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { State } from 'redux/store';
import { ArrowDrop } from 'assets/images/svgr/arrowDrop';
import { requestSideNavMenu } from 'redux/App/appActions';
import { SideNavIcon } from '../SideNavIcon';
import { SideNavMenu } from 'redux/App/appTypes';
import { requestIdentifiersTypes } from 'redux/SetupWizard/SetupWizardIdentifiers/setupWizardIdentifiersAction';
import { requestSettingsParameters } from 'redux/Settings/SettingParameters/settingsParametersActions';
import { findIndexFunc } from 'ui/components/findIndexFunc/findIndexFunc';
import SubLink from './SubLink/Sublink';

const SideNavLinkInner = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { wsEvent, sideNavMenu } = useSelector((state: State) => state.app, shallowEqual);
    const { copyParam } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);
    const [filteredSideNav, setFilteredSideNav] = useState<SideNavMenu>([]);

    const addActiveMenuShadow = () => {
        const activePage = document.querySelector('.active-page');

        if (activePage) {
            const navLink = activePage.closest('.nav-link');

            if (navLink) {
                navLink.classList.add('nav--active');
            }
        }
    };

    const removeActiveMenuShadow = () => {
        const navActiveArr = document.querySelector('.nav--active');

        if (navActiveArr) {
            navActiveArr.classList.remove('nav--active');
        }
    };

    const spreadSubmenuOnOpenPage = () => {
        const activePage = document.querySelector('.active-page');

        if (activePage) {
            const navLink = activePage.closest('.nav-link');

            if (navLink) {
                navLink.classList.add('show');
                navLink.querySelector('.list-name__icon')!.classList.add('turn');
            }
        }
    };

    const spreadSubmenuOnActive = (e: React.SyntheticEvent) => {
        const clickedMenuLinck = e.currentTarget.parentElement;

        clickedMenuLinck?.classList.toggle('show');
        clickedMenuLinck?.querySelector('.list-name__icon')?.classList.toggle('turn');
    };

    useEffect(() => {
        addActiveMenuShadow();
        spreadSubmenuOnOpenPage();
    });

    useEffect(() => {
        return () => {
            removeActiveMenuShadow();
            addActiveMenuShadow();
        };
    }, [location]);

    // FILTER IDENTIFIERS MENU

    useEffect(() => {
        dispatch(requestSettingsParameters());
    }, [dispatch, wsEvent.status]);

    useEffect(() => {
        dispatch(requestSideNavMenu());
        dispatch(requestIdentifiersTypes());
    }, [dispatch, copyParam]);

    useEffect(() => {
        if (sideNavMenu.length > 0) {
            const filter = sideNavMenu.map((navItem) => {
                if (navItem.linkName === 'Идентификаторы') {
                    if (navItem.linkSubLink && copyParam.length > 0) {
                        const identifiersOptions = copyParam[findIndexFunc(copyParam, 'identifiers', 'name')].options;
                        const identifiersUseType = identifiersOptions[findIndexFunc(identifiersOptions, 'useType', 'name')];
                        const sublinks = navItem.linkSubLink.filter((navSubItem) => {
                            if (navSubItem.sublinkName === 'Бесконтактные RFID ключи' && identifiersUseType.selectedList) {
                                if (identifiersUseType.list) {
                                    return identifiersUseType.selectedList[
                                        identifiersUseType.list.findIndex((itemArr) => itemArr.includes('RFID ключ'))
                                    ];
                                } else {
                                    return false;
                                }
                            } else if (navSubItem.sublinkName === 'Face ID' && identifiersUseType.selectedList) {
                                if (identifiersUseType.list) {
                                    return identifiersUseType.selectedList[
                                        identifiersUseType.list.findIndex((itemArr) => itemArr.includes('Биометрия - фотография'))
                                    ];
                                } else {
                                    return false;
                                }
                            } else if (navSubItem.sublinkName === '2D штрих-коды' && identifiersUseType.selectedList) {
                                if (identifiersUseType.list) {
                                    return identifiersUseType.selectedList[
                                        identifiersUseType.list.findIndex((itemArr) => itemArr.includes('2D-штрих'))
                                    ];
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        });

                        navItem.linkSubLink = [...sublinks];

                        return navItem;
                    } else {
                        navItem.linkSubLink = [];

                        return navItem;
                    }
                } else {
                    return navItem;
                }
            });

            setFilteredSideNav([...filter]);
        }
    }, [sideNavMenu, copyParam]);

    return (
        <ul className="side__top">
            {filteredSideNav.map((elem, id) => {
                return (
                    <div key={elem.linkName} className="nav-wrapper">
                        {elem.linkSubLink ? (
                            <div className="nav-link">
                                <button type="button" className="font" onClick={spreadSubmenuOnActive}>
                                    <SideNavIcon linkName={elem.linkName} />

                                    <div className="list-name">
                                        <div className="list-name__title">
                                            <div className="p--md--normal">{elem.linkName}</div>
                                        </div>

                                        <div className="list-name__icon">
                                            <ArrowDrop />
                                        </div>
                                    </div>
                                </button>

                                <SubLink id={id} />
                            </div>
                        ) : (
                            <NavLink activeClassName="active-page" to={elem.linkUrl!} className="nav-link" tabIndex={-1}>
                                <button type="button" className="font">
                                    <SideNavIcon linkName={elem.linkName} />

                                    <div className="list-name">
                                        <div className="list-name__title">
                                            <div className="p--md--normal">{elem.linkName}</div>
                                        </div>
                                    </div>
                                </button>
                            </NavLink>
                        )}
                    </div>
                );
            })}
        </ul>
    );
};

export const SideNavLink = memo(SideNavLinkInner);
