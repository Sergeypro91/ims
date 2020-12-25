import React, { memo } from 'react';
import './SettingsProfile.scss';

const SettingsProfileInner = () => {
    return (
        <div className="settings-profile">
            <span>123</span>
        </div>
    );
};

export const SettingsProfile = memo(SettingsProfileInner);
