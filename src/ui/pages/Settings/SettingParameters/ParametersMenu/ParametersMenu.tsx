import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'redux/store';
import { Inputs } from 'ui/components/Inputs/Inputs';
import { CustomScrollbar } from 'ui/components/CustomScrollbar/CustomScrollbar';
import { ParametersType } from 'redux/Settings/SettingParameters/settingsParametersTypes';
import { Loader } from 'assets/images/svgr/bx-loader-alt';

interface ParametersMenuProps {
    selectedParam: number;
    setSelectedParam: (payload: number) => void;
    search: string;
    setSearch: (payload: string) => void;
}

const ParametersMenuInner = (props: ParametersMenuProps) => {
    const { parameters } = useSelector((state: State) => state.settings.settingsParameters, shallowEqual);

    return (
        <div className="setting-parameters__menu">
            <div className="parameters-menu__header">
                <Inputs
                    name="search"
                    placeholder="Найти"
                    onInputChange={(e) => props.setSearch(e.target.value)}
                    type="text"
                    value={props.search}
                />
            </div>

            <div className="parameters-menu__body">
                <CustomScrollbar>
                    <div className="parameters-menu__content">
                        {parameters.length !== 0 ? (
                            parameters.map((elem: ParametersType, id: number) => {
                                return (
                                    <div
                                        key={elem.name}
                                        onClick={() => props.setSelectedParam(id)}
                                        className={`parameters-menu__item ${
                                            elem.name === parameters[props.selectedParam].name ? 'parameters-menu__item--active' : ''
                                        }`}
                                    >
                                        <div className="p--md--bold">{elem.label}</div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="loader">
                                <Loader />
                            </div>
                        )}
                    </div>
                </CustomScrollbar>
            </div>
        </div>
    );
};

export const ParametersMenu = memo(ParametersMenuInner);
