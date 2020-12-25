import React, { memo } from 'react';
import './SettingParameters.scss';

const SettingParametersInner = () => {
    return (
        <div className="setting-parameters">
            <span>123</span>
        </div>
    );
};

export const SettingParameters = memo(SettingParametersInner);
