import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { requestSettingsParameters } from 'redux/Settings/SettingParameters/settingsParametersActions';
import { ParametersMenu } from './ParametersMenu/ParametersMenu';
import { ParametersOptions } from './ParametersOptions/ParametersOptions';
import './SettingParameters.scss';

const SettingParametersInner = () => {
    const dispatch = useDispatch();
    const [selectedParam, setSelectedParam] = useState(0);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(requestSettingsParameters());
    }, [dispatch]);

    return (
        <div className="setting-parameters">
            <ParametersMenu selectedParam={selectedParam} setSelectedParam={setSelectedParam} search={search} setSearch={setSearch} />

            <ParametersOptions selectedParam={selectedParam} setSelectedParam={setSelectedParam} search={search} />
        </div>
    );
};

export const SettingParameters = memo(SettingParametersInner);
