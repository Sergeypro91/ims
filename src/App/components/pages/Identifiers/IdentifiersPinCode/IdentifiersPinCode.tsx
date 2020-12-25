import React, { memo } from 'react';
import './IdentifiersPinCode.scss';

const IdentifiersPinCodeInner = () => {
    return (
        <div className="identifiers-pincode">
            <span>123</span>
        </div>
    );
};

export const IdentifiersPinCode = memo(IdentifiersPinCodeInner);
