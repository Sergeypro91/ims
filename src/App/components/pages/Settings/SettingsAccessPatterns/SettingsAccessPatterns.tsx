import React, { memo } from 'react';
import './SettingsAccessPatterns.scss';

const SettingsAccessPatternsInner = () => {
    return (
        <div className="settings-access-patterns">
            <h1>Скоро тут будут</h1>
            <p>"Шаблоны доступа"</p>
        </div>
    );
};

export const SettingsAccessPatterns = memo(SettingsAccessPatternsInner);
