import React, { memo } from 'react';
import './IdentifiersBiometrics.scss';

const IdentifiersBiometricsInner = () => {
    return (
        <div className="identifiers-biometrics">
            <span>123</span>
        </div>
    );
};

export const IdentifiersBiometrics = memo(IdentifiersBiometricsInner);
